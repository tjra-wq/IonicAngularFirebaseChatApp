import { ChatService } from './../../services/chat.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-start-chat',
  templateUrl: './start-chat.page.html',
  styleUrls: ['./start-chat.page.scss'],
})
export class StartChatPage implements OnInit {

  users= [];
  allusers: Array<any>;
  // items: Array<any>;
  title = '';
  participant = '';
  participant1 = '';
  items = [];
  currentUserEmail1 = '';
  



  constructor(
    private chatService: ChatService,
    private auth: AuthService, 
    private router: Router) { }

  ngOnInit() {
    //getting current user nickname
    this.currentUserEmail1 = this.auth.currentUser.email;


    //this gets a list of all users
    this.chatService.getAllUsers()
        .subscribe(result => {
          // this.items = result;
          result.forEach(r => {
            // console.log("r");
            // console.log(r.payload.doc.data()['email']);
            // console.log(this.currentUserEmail1);
            if(r.payload.doc.data()['email'] != this.currentUserEmail1) {
                this.items.push(r);
                // console.log(r);
            }
          });   
    }); 
  }

   
  addUser(participant1) {
    // console.log("when calling addUser function, users array =");
    // console.log(this.users);
    this.participant = participant1;
    let obs = this.chatService.findUser(this.participant);
    forkJoin(obs).subscribe(res => {
      for (let data of res) {
        if (data.length > 0) {
          if(this.users.indexOf(data[0]) > -1) {
          } else {
            // console.log("data[0]");
            // console.log(data[0]);
            this.users.push(data[0]);
          }
        }
      }
      this.participant = '';
    });
  }

  createGroup() {
    // console.log("this.title");
    // console.log(this.title);
    // console.log("this.users");
    // console.log(this.users);
    // console.log("users array length: ");
    // console.log(this.users.length);
    this.chatService.createGroup(this.title, this.users).then(res => {
      this.router.navigateByUrl('/chats');
    });
    this.users = [];
  }
}
