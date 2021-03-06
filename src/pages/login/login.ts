import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { User } from '../../models/user';
import { ChatPage } from '../chat/chat';

import { TestProvider } from '../../providers/test/test';


/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;
  
  
  
  constructor(public alertCtrl: AlertController, private db: AngularFireDatabase, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, private testProvider:TestProvider) {
  }
  
  showAlert(title: string, message: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }
  
  loginUser(){
    //console.log(this.user);
    this.fire.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
    .then(data => {
      this.user.email = '';
      this.user.password = '';
      this.db.object(`/users/${data.uid}`).subscribe(profile => {
        this.testProvider.setProfile(profile);
        this.navCtrl.push(ChatPage);
      })
    })
    .catch(error => {
      //console.log(error);
      this.showAlert('Error', error.message);
    });
  }

  
}
