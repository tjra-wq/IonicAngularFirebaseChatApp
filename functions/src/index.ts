import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const nicknameChanged = functions.firestore
    .document('/users/{id}')
    .onUpdate((snap, context) => {
        let user: any = null;

        if (snap.after) {
            user = snap.after.data();
        }
        const userId = context.params.id;

        return admin.firestore().collection(`users/${userId}/groups`).get()
            .then(user_groups => {

                user_groups.docs.forEach((doc) => {
                    const group_id = doc.data().id;

                    admin.firestore().doc(`groups/${group_id}`).get()
                        .then(group => {
                            console.log('group data: ', group.data())
                            let members = [];
                            let data = group.data();

                            if (data) {
                                members = data['users'];
                            }

                            console.log('members: ', members);
                            for (let mem of members) {
                                if (mem.id == userId) {
                                    mem.nickname = user.nickname;
                                }
                            }

                            group.ref.update({
                                users: members
                            }).then(res => {
                                console.log('after nick update: ', res);
                            }, err => {
                                console.log('update err: ', err);
                            })
                        }, err => {
                            console.log('groups doc err: ', err);
                        })
                });
            }, err => {
                console.log('err: ', err);
            });
    });

export const createPush = functions.firestore
    .document('/groups/{id}/messages/{msgID}')
    .onCreate((snap, context) => {
        let msg: any = null;

        if (snap) {
            msg = snap.data();
        }

        const groupId = context.params.id;

        console.log('msg: ', msg);
        console.log('group: ', groupId);

        return admin.firestore().doc(`groups/${groupId}`).get()
            .then(group => {
                console.log('group data: ', group.data())
                let members = [];
                let data = group.data();
                if (data) {
                    members = data['users'];
                }
                console.log('members: ', members);

                for (let mem of members) {
                    if (mem.id != msg.from) {
                        const payload = {
                            notification: {
                                title: 'New Message',
                                body: 'Tap here to check it out!',
                            },
                            data: {
                                chat: groupId
                            }
                        };
                        console.log('send data: ', payload);

                        admin.firestore().doc(`devices/${mem.id}`).get()
                            .then(device => {
                                let deviceData = device.data();
                                if (deviceData) {
                                    let token = deviceData['token'];
                                    console.log('send to: ', token);
                                    admin.messaging().sendToDevice(token, payload).then(() => {
                                        console.log('PUSH SENT');
                                    }, err => {
                                        console.log('push err: ', err);
                                    })
                                }
                            }, err => {
                                console.log('device err: ', err);
                            })
                    }
                }
            }, err => {
                console.log('groups err: ', err);
            })
    });