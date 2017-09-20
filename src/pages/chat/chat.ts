import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

import { Profile } from '../../models/profile';

import { TestProvider } from '../../providers/test/test';

/**
 * Generated class for the ChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  
  profile = {} as Profile;
  message: string;
  messages: object[] = [];

  constructor(private db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, private testProvider: TestProvider) {
    this.profile = this.testProvider.getProfile();
    this.db.list('/chat').subscribe( items => {
      this.messages = items;
    })
  }
  
  sendMessage() {
    //console.log(this.message);
    this.db.list('/chat').push({
      username : this.profile.username,
      message : this.message
    })
    this.message = '';
  }

  ionViewDidLoad() {
    this.db.list('/chat').push({
      userMessage : true,
      message : `${this.profile.username} has joined the room`
    })
  }
  
  ionViewWillLeave() {
    this.db.list('/chat').push({
      userMessage : true,
      message : `${this.profile.username} has left the room`
    })
  }

}
