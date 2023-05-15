import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public userDetails = {
    name: 'NG TIAN HOE',
    contactNumber: '01124708399',
    email: '1191200726@student.mmu.edu.my',
}

  constructor() { }

  ngOnInit() {
  }

}
