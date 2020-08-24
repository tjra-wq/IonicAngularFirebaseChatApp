function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
    \**************************************************************************/

  /*! exports provided: a, d */

  /***/
  function node_modulesIonicCoreDistEsmFrameworkDelegateD1eb6504Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return attachComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return detachComponent;
    });

    var attachComponent = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
        var el;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!delegate) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 2:
                if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context.next = 4;
                  break;
                }

                throw new Error('framework delegate is missing');

              case 4:
                el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                if (cssClasses) {
                  cssClasses.forEach(function (c) {
                    return el.classList.add(c);
                  });
                }

                if (componentProps) {
                  Object.assign(el, componentProps);
                }

                container.appendChild(el);

                if (!el.componentOnReady) {
                  _context.next = 11;
                  break;
                }

                _context.next = 11;
                return el.componentOnReady();

              case 11:
                return _context.abrupt("return", el);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function attachComponent(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }();

    var detachComponent = function detachComponent(delegate, element) {
      if (element) {
        if (delegate) {
          var container = element.parentElement;
          return delegate.removeViewFromDom(container, element);
        }

        element.remove();
      }

      return Promise.resolve();
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js ***!
    \**************************************************************/

  /*! exports provided: a, b, c, h */

  /***/
  function node_modulesIonicCoreDistEsmHapticCcbda579Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return hapticSelectionStart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return hapticSelectionChanged;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return hapticSelectionEnd;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hapticSelection;
    });
    /**
     * Check to see if the Haptic Plugin is available
     * @return Returns `true` or false if the plugin is available
     */

    /**
     * Trigger a selection changed haptic event. Good for one-time events
     * (not for gestures)
     */


    var hapticSelection = function hapticSelection() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.selection();
      }
    };
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */


    var hapticSelectionStart = function hapticSelectionStart() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionStart();
      }
    };
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */


    var hapticSelectionChanged = function hapticSelectionChanged() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionChanged();
      }
    };
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */


    var hapticSelectionEnd = function hapticSelectionEnd() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionEnd();
      }
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
    \***********************************************************************/

  /*! exports provided: S */

  /***/
  function node_modulesIonicCoreDistEsmSpinnerConfigsC78e170eJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S", function () {
      return SPINNERS;
    });

    var spinners = {
      'bubbles': {
        dur: 1000,
        circles: 9,
        fn: function fn(dur, index, total) {
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          var angle = 2 * Math.PI * index / total;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circles': {
        dur: 1000,
        circles: 8,
        fn: function fn(dur, index, total) {
          var step = index / total;
          var animationDelay = "".concat(dur * step - dur, "ms");
          var angle = 2 * Math.PI * step;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: function fn() {
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
        fn: function fn() {
          return {
            r: 26,
            style: {}
          };
        }
      },
      'dots': {
        dur: 750,
        circles: 3,
        fn: function fn(_, index) {
          var animationDelay = -(110 * index) + 'ms';
          return {
            r: 6,
            style: {
              'left': "".concat(9 - 9 * index, "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 17,
            y2: 29,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines-small': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 12,
            y2: 20,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      }
    };
    var SPINNERS = spinners;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js ***!
    \*************************************************************/

  /*! exports provided: c, g, h, o */

  /***/
  function node_modulesIonicCoreDistEsmThemeC2dc54d9Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createColorClasses;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getClassMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hostContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "o", function () {
      return openURL;
    });

    var hostContext = function hostContext(selector, el) {
      return el.closest(selector) !== null;
    };
    /**
     * Create the mode and color classes for the component based on the classes passed in
     */


    var createColorClasses = function createColorClasses(color) {
      return typeof color === 'string' && color.length > 0 ? _defineProperty({
        'ion-color': true
      }, "ion-color-".concat(color), true) : undefined;
    };

    var getClassList = function getClassList(classes) {
      if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array.filter(function (c) {
          return c != null;
        }).map(function (c) {
          return c.trim();
        }).filter(function (c) {
          return c !== '';
        });
      }

      return [];
    };

    var getClassMap = function getClassMap(classes) {
      var map = {};
      getClassList(classes).forEach(function (c) {
        return map[c] = true;
      });
      return map;
    };

    var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

    var openURL = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction) {
        var router;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                  _context2.next = 5;
                  break;
                }

                router = document.querySelector('ion-router');

                if (!router) {
                  _context2.next = 5;
                  break;
                }

                if (ev != null) {
                  ev.preventDefault();
                }

                return _context2.abrupt("return", router.push(url, direction));

              case 5:
                return _context2.abrupt("return", false);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function openURL(_x6, _x7, _x8) {
        return _ref3.apply(this, arguments);
      };
    }();
    /***/

  },

  /***/
  "./src/app/services/chat.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/chat.service.ts ***!
    \******************************************/

  /*! exports provided: ChatService */

  /***/
  function srcAppServicesChatServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatService", function () {
      return ChatService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");

    var ChatService = /*#__PURE__*/function () {
      function ChatService(db, auth, storage) {
        _classCallCheck(this, ChatService);

        this.db = db;
        this.auth = auth;
        this.storage = storage;
      }

      _createClass(ChatService, [{
        key: "getAllUsers",
        value: function getAllUsers() {
          return this.db.collection('users').snapshotChanges();
        }
      }, {
        key: "getAllGroups",
        value: function getAllGroups() {
          return this.db.collection("users/".concat(this.auth.currentUserId, "/groups")).snapshotChanges();
        }
      }, {
        key: "getGroupUsingId",
        value: function getGroupUsingId(id) {
          this.db.doc("groups/".concat(id)).snapshotChanges();
        }
      }, {
        key: "findGroupById",
        value: function findGroupById(id) {
          var group = this.db.doc("groups/".concat(id)).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          return group;
        }
      }, {
        key: "findUser",
        value: function findUser(value) {
          var email = this.db.collection('users', function (ref) {
            return ref.where('email', '==', value);
          }).valueChanges({
            idField: 'id'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          var nickname = this.db.collection('users', function (ref) {
            return ref.where('nickname', '==', value);
          }).valueChanges({
            idField: 'id'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
          return [email, nickname];
        }
      }, {
        key: "getCurrentNickName",
        value: function getCurrentNickName() {
          var nickname = this.auth.currentUser.nickname;
          return nickname;
        }
      }, {
        key: "getCurrentUser",
        value: function getCurrentUser() {
          var current = {
            email: this.auth.currentUser.email,
            id: this.auth.currentUserId,
            nickname: this.auth.nickname
          }; // console.log("in getCurrentUser");
          // console.log(current.nickname);

          return current.nickname;
        }
      }, {
        key: "createGroup",
        value: function createGroup(title, users) {
          var _this = this;

          var current = {
            email: this.auth.currentUser.email,
            id: this.auth.currentUserId,
            nickname: this.auth.nickname
          }; // console.log("additional user(s) is/are: ");
          // console.log(users);

          var allUsers = [current];
          allUsers.push.apply(allUsers, _toConsumableArray(users)); // console.log("allUsers for group chat");
          // console.log(allUsers);

          return this.db.collection('groups').add({
            title: title,
            type: 'group',
            users: allUsers
          }).then(function (res) {
            var promises = [];

            var _iterator = _createForOfIteratorHelper(allUsers),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var usr = _step.value;

                var oneAdd = _this.db.collection("users/".concat(usr.id, "/groups")).add({
                  id: res.id,
                  title: title,
                  users: allUsers.length,
                  type: 'group'
                });

                promises.push(oneAdd);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return Promise.all(promises);
          });
        } //this function gives groups with type:group (groups created using Create a new group button & one on one chat groups)

      }, {
        key: "getGroups",
        value: function getGroups() {
          var _this2 = this;

          return this.db.collection("users/".concat(this.auth.currentUserId, "/groups")).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) {
            return actions.map(function (a) {
              // console.log("aa.payload.doc.data()");
              // console.log(a.payload.doc.data());
              // if(a.payload.doc.data()['type']=='group') {
              // console.log("these are the groups with group chat");
              // console.log(a.payload.doc.data());
              var data = a.payload.doc.data();
              var user_group_key = a.payload.doc.id;
              return _this2.getOneGroup(data['id'], user_group_key); // }
            });
          }));
        }
      }, {
        key: "getGroupsForGroupChat",
        value: function getGroupsForGroupChat() {
          var _this3 = this;

          return this.db.collection("users/".concat(this.auth.currentUserId, "/groups")).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var user_group_key = a.payload.doc.id; // console.log(user_group_key);

              return _this3.getOneGroup(data['id'], user_group_key);
            });
          }));
        }
      }, {
        key: "getGroupsForGroupChat1",
        value: function getGroupsForGroupChat1() {
          return this.db.collection("users/".concat(this.auth.currentUserId, "/groups")).snapshotChanges();
        }
      }, {
        key: "getTitlesAndUsersOfTheseGroups",
        value: function getTitlesAndUsersOfTheseGroups(id) {
          // this.db.doc(`groups/${id}`).snapshotChanges().forEach (r =>{
          //   console.log("title");
          //   console.log(r.payload.data())
          // });
          return this.db.doc("groups/$({id}").snapshotChanges();
        }
      }, {
        key: "getOneGroup",
        value: function getOneGroup(id) {
          var _this4 = this;

          var user_group_key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          // console.log("firebase created current user's id");
          // console.log(this.auth.currentUserId);
          return this.db.doc("groups/".concat(id)).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (changes) {
            var count = 0;
            var data = changes.payload.data();

            _this4.db.collection("groups/".concat(id, "/messages")).snapshotChanges().forEach(function (result) {
              result.forEach(function (r) {
                // console.log("r ="+r);
                //Get firebase created id of each messsage: r.payload.doc.id
                var mId = r.payload.doc.id;
                var uId = r.payload.doc.data()['from']; // setTimeout(() => {
                //   // console.log("mId ="+mId);
                // }, 1000);

                if (r.payload.doc.data()['readFlag'] == false && uId != _this4.auth.currentUserId) {
                  count = count + 1;
                }
              });
            });

            var group_id = changes.payload.id; // console.log("count");
            // console.log(count);

            return Object.assign({
              user_group_key: user_group_key,
              id: group_id
            }, data);
          }));
        }
      }, {
        key: "getUnreadMessages",
        value: function getUnreadMessages(unreadCount) {
          return unreadCount;
        }
      }, {
        key: "getChatMessages",
        value: function getChatMessages(groupId) {
          var count = 0;
          return this.db.collection("groups/".concat(groupId, "/messages"), function (ref) {
            return ref.orderBy('createdAt');
          }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          }));
        }
      }, {
        key: "addChatMessage",
        value: function addChatMessage(msg, chatId) {
          return this.db.collection('groups/' + chatId + '/messages').add({
            msg: msg,
            from: this.auth.currentUserId,
            readFlag: false,
            unreadCount: 0,
            createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.serverTimestamp()
          });
        }
      }, {
        key: "addFileMessage",
        value: function addFileMessage(file, chatId) {
          var newName = "".concat(new Date().getTime(), "-").concat(this.auth.currentUserId, ".png");
          var storageRef = this.storage.ref("/files/".concat(chatId, "/").concat(newName));
          return {
            task: storageRef.putString(file, 'base64', {
              contentType: 'image/png'
            }),
            ref: storageRef
          };
        }
      }, {
        key: "saveFileMessage",
        value: function saveFileMessage(filepath, chatId) {
          return this.db.collection('groups/' + chatId + '/messages').add({
            file: filepath,
            from: this.auth.currentUserId,
            createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.serverTimestamp()
          });
        }
      }, {
        key: "leaveGroup",
        value: function leaveGroup(groupId, users) {
          var _this5 = this;

          return this.getGroups().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (userGroups) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])(userGroups);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            var toDelete = null;

            var _iterator2 = _createForOfIteratorHelper(data),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var group = _step2.value;

                if (group.id == groupId) {
                  toDelete = group.user_group_key;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return toDelete;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (deleteId) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(_this5.db.doc("users/".concat(_this5.auth.currentUserId, "/groups/").concat(deleteId))["delete"]());
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(_this5.db.doc("groups/".concat(groupId)).update({
              users: users
            }));
          }));
        }
      }]);

      return ChatService;
    }();

    ChatService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }, {
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"]
      }];
    };

    ChatService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"]])], ChatService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map