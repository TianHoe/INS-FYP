import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import firebase from 'firebase/compat/app';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const firebaseConfig = {
  projectId: 'ai-fyp-80ea3',
  appId: '1:137895312247:web:f5a5d3cbdbb8e6915fff72',
  databaseURL: 'https://ai-fyp-80ea3-default-rtdb.asia-southeast1.firebasedatabase.app',
  storageBucket: 'ai-fyp-80ea3.appspot.com',
  apiKey: 'AIzaSyBqGJ0cge3fNtZvPGkaSy1ppznrOV7uLq4',
  authDomain: 'ai-fyp-80ea3.firebaseapp.com',
  messagingSenderId: '137895312247',
};

firebase.initializeApp(firebaseConfig);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
