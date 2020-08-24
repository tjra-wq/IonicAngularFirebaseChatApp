import { ChatService } from './../../services/chat.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { map } from 'rxjs/operators';
import { forkJoin, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {

  groups: Observable<any>;
  groups2: Observable<any>;
  newGroups: Observable<any>;
  users = [];
  listOfUsers = [];
  listOfGroups = [];
  allusers: Array<any>;
  title = '';
  titleCheck = '';
  participant = '';
  participant1 = '';
  currentUserEmail1 = '';
  currentUserNickname1 = '';
  getUnreadMessageBadge: any;
  chat = null;
  messages: Observable<any[]>;
  oneOnOneEmail: '';
  oneOnOneid: any;
  oneOnOnenickname: '';
  groupAvailable: boolean;
  groupId: any;



  

  constructor(
    private auth: AuthService, 
    private db: AngularFirestore,
    private router: Router, 
    private chatService: ChatService) { }

  ngOnInit() {

    this.users = [];

    //getting current user email
    this.currentUserEmail1 = this.auth.currentUser.email;

    //getting current user nickname
    this.currentUserNickname1 = this.auth.currentUserNickName;

    //getting unread messages badge -- if last 10+ unread messages then it will show 10+
    this.getUnreadMessageBadge = this.getUnreadMessages();

    //getting list of all available groups
    this.groups = this.chatService.getGroups();

    //get all groups for group chats
    this.listOfGroups = [];
    this.chatService.getAllGroups()
    .subscribe(result => {
      result.forEach(r => {
        if(r.payload.doc.data()['type'] == 'group') {
          console.log("")
          console.log("id of these groups =");
          console.log(r.payload.doc.id);
          this.listOfGroups.push(r);
        }
      });   
    });  

    //this gets a list of all users
    this.listOfUsers = [];
    this.chatService.getAllUsers()
        .subscribe(result => {
          result.forEach(r => {
            if(r.payload.doc.data()['email'] != this.currentUserEmail1) {
                this.listOfUsers.push(r);
            }
          });   
    });


  }

  //swipe down to refresh
  doRefresh(event) {
    console.log('Begin async operation');
    //getting list of all available groups
    this.groups = this.chatService.getGroups();
    
    //get all groups for group chats
    this.listOfGroups = [];
    this.chatService.getAllGroups()
    .subscribe(result => {
      result.forEach(r => {
        if(r.payload.doc.data()['type'] == 'group') {
          console.log("")
          console.log("id of these groups =");
          console.log(r.payload.doc.id);
          this.listOfGroups.push(r);
        }
      });   
    });  

    //this gets a list of all users
    this.listOfUsers = [];
    this.chatService.getAllUsers()
      .subscribe(result => {
        result.forEach(r => {
        if(r.payload.doc.data()['email'] != this.currentUserEmail1) {
            this.listOfUsers.push(r);
          }
        });   
    });

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  //function to get unread messages
  getUnreadMessages() {
    let count = 0;
    return count;
  }
  getMsgFromName(userId) {
    for (let usr of this.chat.users) {
      if (usr.id == userId) {
        return usr.nickname;
      }
    }
    return 'Deleted';
  }
    


  //---------one on one chat
  oneOnOneChat(email1,nickname2) {
    //creating group name--------------------------------- stored in this.titleCheck (ordered alphabatically from both users' nickname)
    let nickname1 = this.auth.nickname;
    let x = nickname1.localeCompare(nickname2, undefined, {numeric: true, sensitivity: 'base'});
    if(x==-1){
      // console.log("nickname1 will come first");
      this.titleCheck = 'oOc_'+nickname1 +'&'+ nickname2;
      console.log("this.titlecheck ="+this.titleCheck);
    } else {
      // console.log("nickname2 will come first");
      this.titleCheck = 'oOc_'+nickname2 +'&'+ nickname1;
      console.log("this.titlecheck ="+this.titleCheck);
    }

    let obs1 = this.findGroup(this.titleCheck);
    forkJoin(obs1).subscribe(res => {
      for (let data of res) {
        if (data.length > 0) {
          console.log("found an existing group with this group id ="+data[0].id);
          this.groupId = data[0].id;
          this.router.navigateByUrl(`/chat/${this.groupId}`);
        }
        else {
          console.log("group not found--in create group section");   //group not available--create group
          setTimeout(() => {
            this.addUser(email1);
            console.log(this.users);
            // this.readyToCreateOneOnOneGroup();
          // this.groupId  is assigned with new group id in createGroup
          }, 1000);
          setTimeout(() => {
            this.readyToCreateOneOnOneGroup();
          // this.groupId  is assigned with new group id in createGroup()
          
          }, 2000);
        }
      }
    });
  }

  findGroup(title) {
    let group = this.db.collection('groups', ref => 
      ref.where('title', '==', title)).valueChanges({ idField: 'id' }).pipe(
      take(1)
    );
    return group;
  }

  GroupChat(id,title) {
    console.log("id passed ="+id);
    let obs2 = this.chatService.findGroupById(id);
    forkJoin(obs2).subscribe(res => {
      // console.log("res");
      // console.log(res);
      for(let data of res){
        console.log("data");
        console.log(data.payload.id);
        this.router.navigateByUrl(`/chat/${data.payload.id}`);
      }
      // for (let data of res) {
      //   if (data.length > 0) {
      //     console.log("found an existing group with this group id ="+data[0].id);
      //     this.groupId = data[0].id;
      //     this.router.navigateByUrl(`/chat/${this.groupId}`);
      //   }
      // }
    });
  }



  // oneOnOneGroupAvailability(findThisGroupTitle) {
  //   this.db.collection('groups').snapshotChanges()
  //   .subscribe(result => {
  //     result.forEach(r => {
  //       if((r.payload.doc.data()['type'] == "OneOnOne") && (r.payload.doc.data()['title'] == findThisGroupTitle)) {
  //           // this.groupAvailable = true;
  //           this.groupId = r.payload.doc.id;
  //           console.log("this.groupId ="+this.groupId);
  //           this.groupAvailable = true;
  //           this.router.navigateByUrl(`/chat/${this.groupId}`);
  //           this.groupAvailable = false;
  //           // return true;
  //       }
  //     });
  //   });
  //   this.groupAvailable = false;
  //   // return false; 
  // }



    addUser(participant1) {
      this.participant = participant1;
      let obs = this.chatService.findUser(this.participant);
      forkJoin(obs).subscribe(res => {
        for (let data of res) {
          if (data.length > 0) {
            if(this.users.indexOf(data[0]) > -1) {
            } else {
              this.users.push(data[0]);
            }
          }
        }
        this.participant = '';
      });
    }
  
    readyToCreateOneOnOneGroup() {
      this.createGroup(this.titleCheck, this.users).then(res => {
        console.log("group created");
        // this.router.navigateByUrl('/chats');
        this.router.navigateByUrl(`/chat/${this.groupId}`);
      });
      this.users = [];
    }


    createGroup(title, users) {
      let current = {
        email: this.auth.currentUser.email,
        id: this.auth.currentUserId,
        nickname: this.auth.nickname
      };
      let allUsers = [current];
      allUsers.push(...users);
      return this.db.collection('groups').add({
        title: title,
        type: 'OneOnOne',
        users: allUsers
      }).then(res => {
        // console.log("new group's id ="+res.id);
        this.groupId = res.id;
        let promises = [];
        for (let usr of allUsers) {
          let oneAdd = this.db.collection(`users/${usr.id}/groups`).add({
            id: res.id,
            type: 'OneOnOne'
          });
          promises.push(oneAdd);
        }
        return Promise.all(promises);
      })
    }
//   // Add a new document with a generated id.
// db.collection("cities").add({
//   name: "Tokyo",
//   country: "Japan"
// })
// .then(function(docRef) {
//   console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//   console.error("Error adding document: ", error);
// });

  openProfile() {

  }
  
  signOut() {
    this.users = null;
    this.groups = null;
    this.listOfUsers = null;
    this.auth.signOut().then(() => {
      this.router.navigateByUrl('/login');
    });
  }
}
