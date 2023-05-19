import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DataService, Judge } from '../services/data.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage implements OnInit {
  currentUserId: string;
  currentJudge!: Judge;

  constructor(public dataService: DataService, 
    public authService: AuthService) {
    this.currentUserId = authService.getUID()!;

    this.dataService.getJudgeByAuthId(this.currentUserId).subscribe(judge => {
      this.currentJudge = judge[0];
    });
  }

  ngOnInit() { }
}
