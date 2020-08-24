(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
            return {
                r: 20,
                cx: 48,
                cy: 48,
                fill: 'none',
                viewBox: '24 24 48 48',
                transform: 'translate(0,0)',
                style: {}
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction);
        }
    }
    return false;
};




/***/ }),

/***/ "./src/app/services/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");








let ChatService = class ChatService {
    constructor(db, auth, storage) {
        this.db = db;
        this.auth = auth;
        this.storage = storage;
    }
    getAllUsers() {
        return this.db.collection('users').snapshotChanges();
    }
    getAllGroups() {
        return this.db.collection(`users/${this.auth.currentUserId}/groups`).snapshotChanges();
    }
    getGroupUsingId(id) {
        this.db.doc(`groups/${id}`).snapshotChanges();
    }
    findGroupById(id) {
        let group = this.db.doc(`groups/${id}`).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
        return group;
    }
    findUser(value) {
        let email = this.db.collection('users', ref => ref.where('email', '==', value)).valueChanges({ idField: 'id' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
        let nickname = this.db.collection('users', ref => ref.where('nickname', '==', value)).valueChanges({ idField: 'id' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
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
        });
    }
    //this function gives groups with type:group (groups created using Create a new group button & one on one chat groups)
    getGroups() {
        return this.db.collection(`users/${this.auth.currentUserId}/groups`).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => actions.map(a => {
            // console.log("aa.payload.doc.data()");
            // console.log(a.payload.doc.data());
            // if(a.payload.doc.data()['type']=='group') {
            // console.log("these are the groups with group chat");
            // console.log(a.payload.doc.data());
            const data = a.payload.doc.data();
            const user_group_key = a.payload.doc.id;
            return this.getOneGroup(data['id'], user_group_key);
            // }
        })));
    }
    getGroupsForGroupChat() {
        return this.db.collection(`users/${this.auth.currentUserId}/groups`).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const user_group_key = a.payload.doc.id;
            // console.log(user_group_key);
            return this.getOneGroup(data['id'], user_group_key);
        })));
    }
    getGroupsForGroupChat1() {
        return this.db.collection(`users/${this.auth.currentUserId}/groups`).snapshotChanges();
    }
    getTitlesAndUsersOfTheseGroups(id) {
        // this.db.doc(`groups/${id}`).snapshotChanges().forEach (r =>{
        //   console.log("title");
        //   console.log(r.payload.data())
        // });
        return this.db.doc(`groups/$({id}`).snapshotChanges();
    }
    getOneGroup(id, user_group_key = null) {
        // console.log("firebase created current user's id");
        // console.log(this.auth.currentUserId);
        return this.db.doc(`groups/${id}`).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(changes => {
            let count = 0;
            const data = changes.payload.data();
            this.db.collection(`groups/${id}/messages`).snapshotChanges().
                forEach(result => {
                result.forEach(r => {
                    // console.log("r ="+r);
                    //Get firebase created id of each messsage: r.payload.doc.id
                    const mId = r.payload.doc.id;
                    const uId = r.payload.doc.data()['from'];
                    // setTimeout(() => {
                    //   // console.log("mId ="+mId);
                    // }, 1000);
                    if ((r.payload.doc.data()['readFlag'] == false) && (uId != this.auth.currentUserId)) {
                        count = count + 1;
                    }
                });
            });
            const group_id = changes.payload.id;
            // console.log("count");
            // console.log(count);
            return Object.assign({ user_group_key, id: group_id }, data);
        }));
    }
    getUnreadMessages(unreadCount) {
        return unreadCount;
    }
    getChatMessages(groupId) {
        let count = 0;
        return this.db.collection(`groups/${groupId}/messages`, ref => ref.orderBy('createdAt')).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
    }
    addChatMessage(msg, chatId) {
        return this.db.collection('groups/' + chatId + '/messages').add({
            msg: msg,
            from: this.auth.currentUserId,
            readFlag: false,
            unreadCount: 0,
            createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.serverTimestamp()
        });
    }
    addFileMessage(file, chatId) {
        let newName = `${new Date().getTime()}-${this.auth.currentUserId}.png`;
        let storageRef = this.storage.ref(`/files/${chatId}/${newName}`);
        return {
            task: storageRef.putString(file, 'base64', { contentType: 'image/png' }),
            ref: storageRef
        };
    }
    saveFileMessage(filepath, chatId) {
        return this.db.collection('groups/' + chatId + '/messages').add({
            file: filepath,
            from: this.auth.currentUserId,
            createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.serverTimestamp()
        });
    }
    leaveGroup(groupId, users) {
        return this.getGroups().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(userGroups => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])(userGroups);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            let toDelete = null;
            for (let group of data) {
                if (group.id == groupId) {
                    toDelete = group.user_group_key;
                }
            }
            return toDelete;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(deleteId => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.db.doc(`users/${this.auth.currentUserId}/groups/${deleteId}`).delete());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.db.doc(`groups/${groupId}`).update({
                users: users
            }));
        }));
    }
};
ChatService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"] }
];
ChatService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"]])
], ChatService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map