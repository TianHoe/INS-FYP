import { Component, OnInit } from '@angular/core';
import { DataService, Judge, Booth, JudgeBooth, JudgeBoothWithBooth } from '../services/data.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  evaluatedCount: number;
  assignedCount: number;
  currentUserId: string;
  currentJudge!: Judge;  
  booths!: Booth[];
  judgeBooth!: JudgeBooth[];
  judgeBoothsWithBooths!: JudgeBoothWithBooth[];

  constructor(private dataService: DataService, private authService: AuthService) {
    
  }

  ngOnInit() {
    this.currentUserId = this.authService.getUID()!;

    this.dataService.getJudgeByAuthId(this.currentUserId).subscribe(judge => {
      this.currentJudge = judge[0];
      
      this.dataService.getJudgeBoothByJudgeId(this.currentJudge.id).subscribe(judgebooth => {
        this.judgeBooth = judgebooth;
        this.evaluatedCount = this.judgeBooth.filter(booth => booth.evaluated == true).length;
        this.assignedCount = this.judgeBooth.length;
      });
  
      this.dataService.getJudgeBoothByJudgeId(this.currentJudge.id).subscribe((judgeBooths: JudgeBooth[]) => {
        this.dataService.getBooth().subscribe((booths: Booth[]) => {
          this.judgeBoothsWithBooths = this.dataService.combineData(judgeBooths, booths);
        });
      });
    });
  }
}
