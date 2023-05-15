import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionReference } from '@angular/fire/firestore';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service'; 
import { DataService } from '../services/data.service';
import Swal from 'sweetalert2';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
  loginForm!: FormGroup;
  errorMessage?: string | undefined;
  judgeCollection!: CollectionReference;

  validationUserMessage = {
    judgeEmail:[
      {type:"required", message:"Please enter your mail"},
      {type:"pattern", message:"Email entered is incorrect"}
    ],
    judgePassword:[
      {type:"required", message:"Please enter your password"},
      {type:"minlength", message:"Password must be at least 5 characters or more"}
    ]
  }

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public authservice: AuthService,
    public dataservice: DataService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      judgeEmail: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      judgePassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ]))
    })

    this.loginForm.valueChanges.subscribe(() => {
      this.errorMessage = "";
    })
  }

  checkUserExist(value: any): Observable<boolean> {
    return this.dataservice.getJudge().pipe(
      map(res => {
        for(let judge of res) {
          if(judge.auth_id == value.user.uid) {
            return true;
          }
        }
        return false;
      })
    );
  }

  async LoginUser(value: any){
    this.authservice.loginFireauth(value)
      .then((resp) => {
        this.checkUserExist(resp).subscribe(exist => {
          let userExist = exist;

          if(!userExist && !resp.user.emailVerified){
            Swal.fire({
              title: 'Welcome to OnRouteX!',
              html:
                '<p>Please provide us your name and phone number so that we know you better.</p>' +
                '<div class="d-flex flex-column judtify-content-center align-items-center">' + 
                '<div class="mb-3"><ion-icon name="person-sharp" class="mr-3"></ion-icon>' +
                '<input id="swal-input-name" class="swal2-input m-0" placeholder="Username"></div>' +
                '<div><ion-icon name="call-sharp" class="mr-3"></ion-icon>' + 
                '<input id="swal-input-hpnum" class="swal2-input m-0" placeholder="Phone Number"></div></div>',
              focusConfirm: false,
              heightAuto: false,
              allowOutsideClick: false,
              preConfirm: () => {
                const username = (<HTMLInputElement>document.getElementById('swal-input-name')).value;
                const phone = (<HTMLInputElement>document.getElementById('swal-input-hpnum')).value;

                this.authservice.updateUserProfile({uid: resp.user.uid, name: username});
                this.dataservice.addJudge({auth_id: resp.user.uid, name: username, contactnum: phone, email: resp.user.email});
              }
            }).then(() => {
              if(!resp.user.emailVerified){
                this.authservice.sendVerificationEmail(resp.user);
                this.router.navigate(['homepage']);
              }
              this.loginForm.reset();
            })
          }
          // if user yet to verify their account but filled in the details
          else if(userExist && !resp.user.emailVerified) {
            this.authservice.sendVerificationEmail(resp.user);
            this.loginForm.reset();
            this.router.navigate(['homepage']);
          }
          else {
            this.loginForm.reset();
            this.router.navigate(['homepage']);
          }
        });
      })
      .catch((error: any) => {
        this.errorMessage = error;
      })
  }
}
