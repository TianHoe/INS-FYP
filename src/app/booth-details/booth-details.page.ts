import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService, Booth, JudgeBooth, JudgeBoothWithBooth } from '../services/data.service';
import { Subscription } from 'rxjs';

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
  private boothSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.getJudgeBooth().subscribe((judgeBooths: JudgeBooth[]) => {
      this.dataService.getBooth().subscribe((booths: Booth[]) => {
        this.judgeBoothsWithBooths = this.dataService.combineData(judgeBooths, booths);
      });
    });

    this.specificBooth = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  boothCheckIn() {
    this.boothSubscription = this.dataService.getBoothById(this.specificBooth).subscribe(booth => {
      if(booth) {
        this.dataService.updateBoothAvailability(booth, false).then(() => {
          this.router.navigate(['/evaluate', this.specificBooth]);
          this.boothSubscription.unsubscribe();
        });
      }
    });
  }
}
