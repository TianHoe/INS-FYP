import { Component, OnInit } from '@angular/core';
import { DataService, Judge, Booth, JudgeBooth, JudgeBoothWithBooth } from '../services/data.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-booth',
  templateUrl: './booth.page.html',
  styleUrls: ['./booth.page.scss'],
})
export class BoothPage implements OnInit {
  currentUserId: string;
  currentJudge!: Judge;
  booths!: Booth[];
  judgeBooth!: JudgeBooth[];
  judgeBoothsWithBooths!: JudgeBoothWithBooth[];

  constructor(private dataService: DataService, private authService: AuthService) {
    this.currentUserId = authService.getUID()!;

    this.dataService.getJudgeByAuthId(this.currentUserId).subscribe(judge => {
      this.currentJudge = judge[0];
    });
  }

  ngOnInit() {
    this.dataService.getBooth().subscribe(booths => {
      this.booths = booths;
    });

    this.dataService.getJudgeBooth().subscribe(judgebooth => {
      this.judgeBooth = judgebooth;
    });

    this.dataService.getJudgeBooth().subscribe((judgeBooths: JudgeBooth[]) => {
      this.dataService.getBooth().subscribe((booths: Booth[]) => {
        this.judgeBoothsWithBooths = this.dataService.combineData(judgeBooths, booths);
      });
    });
  }
}
