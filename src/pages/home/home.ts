import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  loginUser(){
    console.log('Login User');
    this.navCtrl.push(LoginPage);
  }
  
  registerUser(){
    console.log('Register User');
    this.navCtrl.push(RegisterPage);
  }

}
