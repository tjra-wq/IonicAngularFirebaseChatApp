import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { take, map, switchMap } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import { forkJoin, from } from 'rxjs';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  
  getAllUsers(){
    return this.db.collection('users').snapshotChanges();
  }

  getAllGroups(){
    return this.db.collection(`users/${this.auth.currentUserId}/groups`).snapshotChanges();
  }
  getGroupUsingId(id) {
    this.db.doc(`groups/${id}`).snapshotChanges();
  }

  findGroupById(id) {
    let group = this.db.doc(`groups/${id}`).snapshotChanges().pipe(
      take(1)
    );
    return group;
  }

  constructor(private db: AngularFirestore, private auth: AuthService, private storage: AngularFireStorage) { }

  findUser(value) {
    let email = this.db.collection('users', ref => ref.where('email', '==', value)).valueChanges({ idField: 'id' }).pipe(
      take(1)
    );
    let nickname = this.db.collection('users', ref => ref.where('nickname', '==', value)).valueChanges({ idField: 'id' }).pipe(
      take(1)
    );
    return [email, nickname];
  }

  getCurrentNickName() {
    let nickname = this.auth.currentUser.nickname;
    return nickname;
  }

  getCurrentUser() {
    let current = {
      email: this.auth.currentUser.email,
      id: this.auth.currentUserId,
      nickname: this.auth.nickname
    };
    // console.log("in getCurrentUser");
    // console.log(current.nickname);
    return current.nickname;
  }


  createGroup(title, users) {
    let current = {
      email: this.auth.currentUser.email,
      id: this.auth.currentUserId,
      nickname: this.auth.nickname
    };
    // console.log("additional user(s) is/are: ");
    // console.log(users);
    let allUsers = [current];
    allUsers.push(...users);
    // console.log("allUsers for group chat");
    // console.log(allUsers);

    return this.db.collection('groups').add({
      title: title,
      type: 'group',
      users: allUsers
    }).then(res => {
      let promises = [];
      for (let usr of allUsers) {
        let oneAdd = this.db.collection(`users/${usr.id}/groups`).add({
          id: res.id,
          title: title,
          users: allUsers.length,
          type: 'group'
        });
        promises.push(oneAdd);
      }
      return Promise.all(promises);
    })
  }

  //this function gives groups with type:group (groups created using Create a new group button & one on one chat groups)
  getGroups() {
    return this.db.collection(`users/${this.auth.currentUserId}/groups`).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        // console.log("aa.payload.doc.data()");
        // console.log(a.payload.doc.data());
        // if(a.payload.doc.data()['type']=='group') {
          // console.log("these are the groups with group chat");
          // console.log(a.payload.doc.data());
          const data = a.payload.doc.data();
          const user_group_key = a.payload.doc.id;
          return this.getOneGroup(data['id'], user_group_key);
        // }
      }))
    )
  }


  getGroupsForGroupChat() {
    return this.db.collection(`users/${this.auth.currentUserId}/groups`).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const user_group_key = a.payload.doc.id;
        // console.log(user_group_key);
        return this.getOneGroup(data['id'], user_group_key);
      }))
    )
  }
  getGroupsForGroupChat1(){
    return this.db.collection(`users/${this.auth.currentUserId}/groups`).snapshotChanges();
  }

  getTitlesAndUsersOfTheseGroups(id) {
    // this.db.doc(`groups/${id}`).snapshotChanges().forEach (r =>{
    //   console.log("title");
    //   console.log(r.payload.data())
    // });
    return this.db.doc(`groups/$({id}`).snapshotChanges()
  }

  getOneGroup(id, user_group_key = null) {
    // console.log("firebase created current user's id");
    // console.log(this.auth.currentUserId);
    return this.db.doc(`groups/${id}`).snapshotChanges().pipe(
      take(1),
      map(changes => {
        let count = 0;
        const data = changes.payload.data();
        this.db.collection(`groups/${id}/messages`).snapshotChanges().
        forEach(result => {
          result.forEach (r => {
            // console.log("r ="+r);
            //Get firebase created id of each messsage: r.payload.doc.id
            const mId = r.payload.doc.id;
            const uId = r.payload.doc.data()['from'];
            // setTimeout(() => {
            //   // console.log("mId ="+mId);
            // }, 1000);
            if((r.payload.doc.data()['readFlag'] == false) && (uId != this.auth.currentUserId)) {
              count = count+1;
            }
          });
        });

        const group_id = changes.payload.id;
        // console.log("count");
        // console.log(count);
        return { user_group_key, id: group_id, ...data as {} };
      })
    )      
  }

  getUnreadMessages(unreadCount) {
    return unreadCount;
  }

  getChatMessages(groupId) {
    let count = 0;

    return this.db.collection(`groups/${groupId}/messages`, ref => ref.orderBy('createdAt')).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data as {} };
      }))
    );
  }

  addChatMessage(msg, chatId) {
    return this.db.collection('groups/' + chatId + '/messages').add({
      msg: msg,
      from: this.auth.currentUserId,
      readFlag: false,
      unreadCount: 0,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  addFileMessage(file, chatId) {
    let newName = `${new Date().getTime()}-${this.auth.currentUserId}.png`;
    let storageRef: AngularFireStorageReference = this.storage.ref(`/files/${chatId}/${newName}`);

    return {
      task: storageRef.putString(file, 'base64', { contentType: 'image/png' }), 
      ref: storageRef
    };
  }

  saveFileMessage(filepath, chatId) {
    return this.db.collection('groups/' + chatId + '/messages').add({
      file: filepath,
      from: this.auth.currentUserId,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  leaveGroup(groupId, users) {
    return this.getGroups().pipe(
      switchMap(userGroups => {
        return forkJoin(userGroups);
      }),
      map(data => {
        let toDelete = null;

        for (let group of data) {
          if (group.id == groupId) {
            toDelete = group.user_group_key;
          }
        }
        return toDelete;
      }),
      switchMap(deleteId => {
        return from(this.db.doc(`users/${this.auth.currentUserId}/groups/${deleteId}`).delete())
      }),
      switchMap(() => {
        return from(this.db.doc(`groups/${groupId}`).update({
          users: users
        }));
      })
    );
  }
}
