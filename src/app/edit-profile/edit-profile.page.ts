import { Component, OnInit } from '@angular/core';
import { DataService, Judge } from '../services/data.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})

export class EditProfilePage implements OnInit {
  currentUserId: string;
  currentJudge!: Judge;

  judge: Judge = {
    id: '',
    auth_id: '', // Set the judge's auth_id
    name: '', // Set the updated name
    contactnum: '', // Set the updated contact number
    email: '' // Set the updated email 
  };

  constructor(public dataService: DataService, private authService: AuthService, private router: Router) {
    this.currentUserId = authService.getUID()!;

    this.dataService.getJudgeByAuthId(this.currentUserId).subscribe(judge => {
      this.currentJudge = judge[0];

      this.judge = {
        id: this.currentJudge.id,
        auth_id: this.currentUserId,
        name: this.currentJudge.name,
        contactnum: this.currentJudge.contactnum,
        email: this.currentJudge.email
      };
    });
  }

  ngOnInit() { }

  updateProfile() {
    this.dataService.updateJudge(this.judge).then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Profile Updated',
        text: 'Your profile has been updated successfully!',
        heightAuto: false,
      });
      this.router.navigate(['/profile']);
    }).catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to update profile. Please try again.',
      });
      this.router.navigate([], { skipLocationChange: true });
    });
  }
}
