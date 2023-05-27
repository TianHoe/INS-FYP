import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService, Judge, Booth, JudgeBooth, JudgeBoothWithBooth, Scoring, Criteria, ScoringWithCriteria } from '../services/data.service';
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

  criteria: Criteria[];
  scoring: Scoring[];
  scoringWithCriteria: ScoringWithCriteria[];

  isModalOpen = false;

  constructor(private dataService: DataService, private authService: AuthService, private modalController: ModalController) {}

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

  setOpen(isOpen: boolean, booth?: Booth) {
    this.isModalOpen = isOpen;

    if(booth) {
      console.log(this.currentJudge.id);
      console.log(booth.id);

      this.dataService.getBoothScoring(this.currentJudge.id, booth.id).subscribe((scoring: Scoring[]) => {
        this.dataService.getCriteria().subscribe((criteria: Criteria[]) => {
          this.scoringWithCriteria = this.dataService.combineScoringCriteria(scoring, criteria);
        })
      })
    }
  }
}
