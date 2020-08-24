import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Observable } from 'rxjs';
import { ChatService } from './../../services/chat.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  messages: Observable<any[]>;
  newMsg = '';
  chatTitle = '';
  currentUserId = this.auth.currentUserId;
  chat = null;
  leaveGroupFlag: Boolean;

  @ViewChild(IonContent) content: IonContent;
  @ViewChild('input', { read: ElementRef }) msgInput: ElementRef;

  constructor(
    private route: ActivatedRoute, 
    private auth: AuthService, 
    private chatService: ChatService, 
    private router: Router, 
    private camera: Camera) { }

  ngOnInit() {
    // //scroll to bottom on init
    // this.scrollToBottomOnInit();
    this.route.params.subscribe(data => {
      // console.log(data);
      this.chatService.getOneGroup(data.id).subscribe(res => {
        console.log(res);
        console.log("this.currentUserId");
        console.log(this.currentUserId);
        
        //setting title for this chat page
        if(res['type']=='OneOnOne'){
          // console.log(res['users']);
          res['users'].forEach(element => {
            // console.log(element);
            // console.log(element['id']);
            if(element['id'] != this.currentUserId) {
              // console.log("this is the other user's nickname");
              // console.log(element['nickname']);
              this.chatTitle = element['nickname'];
            }
          });
          // this.chatTitle = this.getMsgFromName(this.currentUserId);
          // console.log(this.chatTitle);
        } 
        if(res['type']=='group') {
          this.chatTitle = res['title'];
          this.leaveGroupFlag = true;
        }

        this.chat = res;
        // console.log('my chat: ', this.chat);
        this.messages = this.chatService.getChatMessages(this.chat.id).pipe(
          map(messages => {
            for (let msg of messages) {
              // console.log("msg");
              // console.log(msg);
              msg['user'] = this.getMsgFromName(msg['from']);
            }
            // console.log('messages: ', messages);
            
            //scroll to bottom on init
            this.scrollToBottomOnInit();
            return messages;
          })
        );
      })
    })
  }

  //function for scroll to bottom
  scrollToBottomOnInit() {
    setTimeout(() => {
        if (this.content.scrollToBottom) {
            this.content.scrollToBottom(400);
        }
    }, 500);
}

//getting title for this chat page
gettinChatPageTitle() {

}




  getMsgFromName(userId) {
    for (let usr of this.chat.users) {
      if (usr.id == userId) {
        return usr.nickname;
      }
    }
    return 'Deleted';
  }

  sendMessage() {
    this.chatService.addChatMessage(this.newMsg, this.chat.id).then(() => {
      this.newMsg = '';
      // this.content.scrollToBottom();
      //for autoscrolling to bottom...
      setTimeout(() => {
        this.content.scrollToBottom(200);
      });
    });
  }

  resize() {
    this.msgInput.nativeElement.style.height = this.msgInput.nativeElement.scrollHeight + 'px';
  }

  leave() {
    let newUsers = this.chat.users.filter(usr => usr.id != this.auth.currentUserId);

    this.chatService.leaveGroup(this.chat.id, newUsers).subscribe(res => {
      this.router.navigateByUrl('/chats');
    });
  }

  sendFileCamera() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      correctOrientation: true
    }

    this.camera.getPicture(options).then(data => {
      let obj = this.chatService.addFileMessage(data, this.chat.id);
      let task = obj.task;
      task.then(res => {
        obj.ref.getDownloadURL().subscribe(url => {
          this.chatService.saveFileMessage(url, this.chat.id);
        })
      });

      task.percentageChanges().subscribe(change => {
        // console.log('change: ', change);
      })
    });

    
  }

  sendFileGallery() {
    const options: CameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      quality: 70,
      targetWidth: 1000,
      targetHeight: 1000,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true
      // mediaType: this.camera.MediaType.PICTURE,
    }

    this.camera.getPicture(options).then(data => {
      let obj = this.chatService.addFileMessage(data, this.chat.id);
      let task = obj.task;
      task.then(res => {
        obj.ref.getDownloadURL().subscribe(url => {
          this.chatService.saveFileMessage(url, this.chat.id);
        })
      });

      task.percentageChanges().subscribe(change => {
        // console.log('change: ', change);
      })
    });
  }
}
