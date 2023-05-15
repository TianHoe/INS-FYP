import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  public userDetails = {
      name: 'NG TIAN HOE',
      eventID: '14792057',
      contactNumber: '01124708399',
      email: '1191200726@student.mmu.edu.my',
  }

  constructor() { }

  ngOnInit() {
  }

}
