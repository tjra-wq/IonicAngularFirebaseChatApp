(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chats-chats-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chats/chats.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chats/chats.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n\n    </ion-buttons>\n    <ion-title>Welcome {{ currentUserNickname1 }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <!-- <ion-button routerLink=\"/profile\">\n        <ion-icon name=\"people\" slot=\"icon-only\"></ion-icon>\n      </ion-button> -->\n      <ion-button (click)=\"signOut()\">\n        <ion-icon name=\"log-out\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"arrow-down-outline\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"dots\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n\n  \n  <ion-list>\n    <ion-item-divider>\n      <ion-label>\n        Signed in as: {{ currentUserEmail1 }}\n      </ion-label>\n    </ion-item-divider>\n\n    <!-- Showing Groups created using \"Create A Group Button\" -->\n    <ion-item-divider *ngIf=\"listOfGroups.length!=0\">\n      <ion-label>\n       Your Groups\n      </ion-label>\n    </ion-item-divider>\n    <ion-item button *ngFor=\"let item of listOfGroups;\"\n    (click)=\"GroupChat(item.payload.doc.data().id,item.payload.doc.data().title)\"\n    >\n      <ion-label class=\"ion-text-wrap\">\n        <ion-text color=\"primary\">\n          <h3>{{ item.payload.doc.data().title }}</h3>\n        </ion-text>\n        <p>{{ item.payload.doc.data().users}} Users</p>\n        <!-- <p>Group id: {{ item.payload.doc.data().id }}</p> -->\n      </ion-label>\n    </ion-item>\n\n\n\n    <ion-item-divider>\n      <ion-label>\n        Contacts (All Available Users)\n      </ion-label>\n    </ion-item-divider>\n    <ion-item button *ngFor=\"let item of listOfUsers;\" (click)=\"oneOnOneChat(item.payload.doc.data().email,item.payload.doc.data().nickname)\">\n      <ion-label>\n        {{ item.payload.doc.data().email }}\n        <p>{{ item.payload.doc.data().nickname }}</p>\n      </ion-label>\n      <!-- Keep either a button or a routerlink--both togather will not work -->\n      <!-- <ion-button icon-only (click)=\"oneOnOneChat(item.payload.doc.data().email,item.payload.doc.data().nickname)\">\n        <ion-icon name=\"chatbubble-outline\"></ion-icon>\n      </ion-button> -->\n      <!-- <ion-button icon-only>\n        <ion-icon name=\"call-outline\"></ion-icon>\n      </ion-button> -->\n    </ion-item>\n\n\n\n    <!-- Showing All groups (including one on one chat groups) -->\n    <!-- <ion-item-divider *ngIf=\"(groups | async)?.length!=0\">\n      <ion-label>\n      All Groups (1-1 groups & group chat groups)\n    </ion-label>\n  </ion-item-divider>\n  <ion-item button *ngFor=\"let group of groups | async\" class=\"ion-text-wrap\"\n  [routerLink]=\"['/', 'chat', (group | async)?.id || 0]\">\n    <ion-label class=\"ion-text-wrap\">\n      <ion-text color=\"primary\">\n        <h3>{{ (group | async)?.title }}</h3>\n      </ion-text>\n      <p>{{ (group | async)?.users.length }} Users</p>\n    </ion-label>\n    <ion-badge color=\"success\" slot=\"end\"> {{ getUnreadMessageBadge }}</ion-badge>\n  </ion-item> -->\n\n\n\n\n\n\n  </ion-list>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n  <ion-toolbar color=\"primary\">\n    <ion-button color=\"light\" fill=\"clear\" expand=\"full\" routerLink=\"/chats/start\">Create a new Group</ion-button>\n  </ion-toolbar>\n</ion-footer>\n\n");

/***/ }),

/***/ "./src/app/pages/chats/chats.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/chats/chats.module.ts ***!
  \*********************************************/
/*! exports provided: ChatsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsPageModule", function() { return ChatsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _chats_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chats.page */ "./src/app/pages/chats/chats.page.ts");







const routes = [
    {
        path: '',
        component: _chats_page__WEBPACK_IMPORTED_MODULE_6__["ChatsPage"]
    }
];
let ChatsPageModule = class ChatsPageModule {
};
ChatsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_chats_page__WEBPACK_IMPORTED_MODULE_6__["ChatsPage"]]
    })
], ChatsPageModule);



/***/ }),

/***/ "./src/app/pages/chats/chats.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/chats/chats.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXRzL2NoYXRzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/chats/chats.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/chats/chats.page.ts ***!
  \*******************************************/
/*! exports provided: ChatsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsPage", function() { return ChatsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





// import { map } from 'rxjs/operators';



let ChatsPage = class ChatsPage {
    constructor(auth, db, router, chatService) {
        this.auth = auth;
        this.db = db;
        this.router = router;
        this.chatService = chatService;
        this.users = [];
        this.listOfUsers = [];
        this.listOfGroups = [];
        this.title = '';
        this.titleCheck = '';
        this.participant = '';
        this.participant1 = '';
        this.currentUserEmail1 = '';
        this.currentUserNickname1 = '';
        this.chat = null;
    }
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
                if (r.payload.doc.data()['type'] == 'group') {
                    console.log("");
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
                if (r.payload.doc.data()['email'] != this.currentUserEmail1) {
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
                if (r.payload.doc.data()['type'] == 'group') {
                    console.log("");
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
                if (r.payload.doc.data()['email'] != this.currentUserEmail1) {
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
    oneOnOneChat(email1, nickname2) {
        //creating group name--------------------------------- stored in this.titleCheck (ordered alphabatically from both users' nickname)
        let nickname1 = this.auth.nickname;
        let x = nickname1.localeCompare(nickname2, undefined, { numeric: true, sensitivity: 'base' });
        if (x == -1) {
            // console.log("nickname1 will come first");
            this.titleCheck = 'oOc_' + nickname1 + '&' + nickname2;
            console.log("this.titlecheck =" + this.titleCheck);
        }
        else {
            // console.log("nickname2 will come first");
            this.titleCheck = 'oOc_' + nickname2 + '&' + nickname1;
            console.log("this.titlecheck =" + this.titleCheck);
        }
        let obs1 = this.findGroup(this.titleCheck);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(obs1).subscribe(res => {
            for (let data of res) {
                if (data.length > 0) {
                    console.log("found an existing group with this group id =" + data[0].id);
                    this.groupId = data[0].id;
                    this.router.navigateByUrl(`/chat/${this.groupId}`);
                }
                else {
                    console.log("group not found--in create group section"); //group not available--create group
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
        let group = this.db.collection('groups', ref => ref.where('title', '==', title)).valueChanges({ idField: 'id' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1));
        return group;
    }
    GroupChat(id, title) {
        console.log("id passed =" + id);
        let obs2 = this.chatService.findGroupById(id);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(obs2).subscribe(res => {
            // console.log("res");
            // console.log(res);
            for (let data of res) {
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
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(obs).subscribe(res => {
            for (let data of res) {
                if (data.length > 0) {
                    if (this.users.indexOf(data[0]) > -1) {
                    }
                    else {
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
        });
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
};
ChatsPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"] }
];
ChatsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chats',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./chats.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chats/chats.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./chats.page.scss */ "./src/app/pages/chats/chats.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]])
], ChatsPage);



/***/ })

}]);
//# sourceMappingURL=pages-chats-chats-module-es2015.js.map