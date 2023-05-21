import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DataService, Booth, JudgeBooth, JudgeBoothWithBooth, Criteria } from '../services/data.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.page.html',
  styleUrls: ['./evaluation.page.scss'],
})

export class EvaluationPage implements OnInit {
  public specificBooth!: string;  
  booths!: Booth[];
  criterias!: Criteria[];
  judgeBooth!: JudgeBooth[];
  judgeBoothsWithBooths!: JudgeBoothWithBooth[];

  evaluationForm!: FormGroup;
  isSubmitted = false;

  constructor(private activatedRoute: ActivatedRoute, public formBuilder: FormBuilder, private dataService: DataService) { }

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

    this.dataService.getCriteria().subscribe(criteria => {
      this.criterias = criteria;

      this.evaluationForm = this.formBuilder.group({});

      this.criterias.forEach((criteria, i) => {
        this.evaluationForm.addControl(`score${i}`, this.formBuilder.control('', Validators.required));
      });
    
      this.evaluationForm.addControl('comment', this.formBuilder.control(''));
    });

    this.specificBooth = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  range(start: number, end: number): number[] {
    return Array(end - start + 1).fill(0).map((_, idx) => start + idx);
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.evaluationForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.evaluationForm.value)
      return true
    }
  }
}
