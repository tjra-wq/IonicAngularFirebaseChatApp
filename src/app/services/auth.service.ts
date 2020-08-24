import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { take, map, tap } from 'rxjs/operators';

export interface UserCredentials  {
  nickname: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  user: User = null;
  nickname = '';
  nickname2 : any;
  email2: String;
  



  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) {
    this.afAuth.authState.subscribe(res => {
      this.user = res;
      if (this.user) {
        console.log('authenticated user: ', this.user);
        this.db.doc(`users/${this.currentUserId}`).valueChanges().pipe(
          tap(res => {
            this.nickname = res['nickname'];
            // console.log(this.nickname);
          })
        ).subscribe();
      }
    })
   }

   ngOnInit() {
    // this.nickname2 = this.db.doc(`users/${this.currentUserNickName}`).snapshotChanges();
    // console.log("this.nickaname2");
    // console.log(this.nickname2);
    // this.nickname2 = this.db.doc(`users/${this.currentUserId}/nickaname`).valueChanges();
    // console.log("getting nickname2");
    // console.log(this.nickname2);
    // console.log(this.nickname);
  }


  signUp(credentials: UserCredentials) {
    return this.afAuth.createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then((data) => {
        data.user.updateProfile({
          displayName: credentials.nickname
        });
        return this.db.doc(`users/${data.user.uid}`).set({
          nickname: credentials.nickname,
          email: data.user.email,
          created: firebase.firestore.FieldValue.serverTimestamp()
        });
      });
  }

  isNicknameAvailable(name) {
    return this.db.collection('users', ref => ref.where('nickname', '==', name).limit(1)).valueChanges().pipe(
      take(1),
      map(user => {
        return user;
      })
    );
  }

  signIn(credentials: UserCredentials) {
    return this.afAuth.signInWithEmailAndPassword(credentials.email, credentials.password);
  }

  signOut() {
    return this.afAuth.signOut();
  }

  resetPw(email) {
    return this.afAuth.sendPasswordResetEmail(email);
  }

  updateUser(nickname) {
    return this.db.doc(`users/${this.currentUserId}`).update({
      nickname
    });
  }

  get authenticated(): boolean {
    return this.user !== null;
  }

  get currentUser(): any {
    return this.authenticated ? this.user : null;
  }

  get currentUserId(): string {
    return this.authenticated ? this.user.uid : '';
  }

  get currentUserNickName(): string {
    return this.authenticated ? this.user.displayName : '';
  }
}
