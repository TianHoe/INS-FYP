import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { sendEmailVerification, updateProfile } from '@angular/fire/auth';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public auth = firebase.auth();
  currentUser?: firebase.User;

  constructor() {
     this.auth.onAuthStateChanged((user) => {
      if(user){
        this.currentUser = user;
      } else {
        this.currentUser = undefined;
      }
    })
  }

  isLoggedIn(): boolean {
    const user = this.currentUser;

    return !!user;
  }

  loginFireauth(value: any) {
    return new Promise<any> ( (resolve, reject) => {
      this.auth.signInWithEmailAndPassword(value.judgeEmail, value.judgePassword).then(
        (res: any) => resolve(res),
        (error: any) => {
          let errorMessage: string;
          switch (error.code) {
            case 'auth/user-not-found':
              errorMessage = 'User not found';
              break;
            case 'auth/wrong-password':
              errorMessage = 'Password incorrect';
              break;
            case 'auth/invalid-email':
              errorMessage = 'Invalid email address';
              break;
            default:
              errorMessage = 'Login failed, please try again';
              break;
          }
          reject(errorMessage);
        } 
      )
    })
  }

  getUID(): string | undefined {
    return this.currentUser?.uid;
  }

  async sendVerificationEmail(value: any) {
    await sendEmailVerification(value)
      .then(() => {
        Swal.fire({
          title: 'Verification email sent!',
          text: 'Please go and verify your email',
          icon: 'success',
          heightAuto: false
        })
      })
  }

  updateUserProfile(value: any) {
    if(value.uid === this.currentUser!.uid) {
      updateProfile(this.currentUser!, {
        displayName: value.name,
      })
    }
  }

  userLogout() {
    this.auth.signOut().then(() => {
      // Sign out successfully
    }).catch((error) => {
      console.log(error);
    })
  }
}
