import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Booth, JudgeBooth, JudgeBoothWithBooth } from '../services/data.service';

@Component({
  selector: 'app-booth-details',
  templateUrl: './booth-details.page.html',
  styleUrls: ['./booth-details.page.scss'],
})
export class BoothDetailsPage implements OnInit {
  booths!: Booth[];
  public specificBooth!: string;  
  judgeBooth!: JudgeBooth[];
  judgeBoothsWithBooths!: JudgeBoothWithBooth[];

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) { }

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

    this.specificBooth = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}
