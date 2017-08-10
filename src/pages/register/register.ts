import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { User } from '../../models/user';
import { Profile } from '../../models/profile';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user = {} as User;
  profile = {} as Profile;

  constructor(public alertCtrl: AlertController, private db: AngularFireDatabase, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
    
  }
  
  showAlert(title: string, message: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  registerUser(){
    //console.log(this.user);
    //console.log(this.profile);
    this.fire.auth.createUserWithEmailAndPassword(this.user.email, this.user.password)
    .then( data => {
      console.log(data);
      this.db.object(`users/${data.uid}`).set(this.profile);
      this.user.email = '';
      this.user.password = '';
      this.profile.firstName = '';
      this.profile.lastName = '';
      this.profile.username = '';
      this.showAlert('Success','Successfully registered User');
    })
    .catch( error => {
      this.showAlert('Error', error.message);
    });
  }

}
