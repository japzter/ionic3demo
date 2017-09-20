import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ChatPage } from '../pages/chat/chat';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { TestProvider } from '../providers/test/test';

const FIREBASECONFIG = {
    apiKey: "AIzaSyBDcQaalrBJG_EqdYEjDk0Nt3RySmTyXPg",
    authDomain: "real-time-chat-35c25.firebaseapp.com",
    databaseURL: "https://real-time-chat-35c25.firebaseio.com",
    projectId: "real-time-chat-35c25",
    storageBucket: "real-time-chat-35c25.appspot.com",
    messagingSenderId: "1092448883041"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASECONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TestProvider
  ]
})
export class AppModule {}
