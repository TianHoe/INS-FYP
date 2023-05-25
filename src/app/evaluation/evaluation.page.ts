import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService, Judge, Booth, JudgeBooth, JudgeBoothWithBooth, Criteria, Scoring } from '../services/data.service';
import { AuthService } from '../services/auth.service';
import { ToastController } from '@ionic/angular';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.page.html',
  styleUrls: ['./evaluation.page.scss'],
})

export class EvaluationPage implements OnInit {
  public specificBooth!: string;
  currentUserId: string;
  currentJudge!: Judge;  
  booths!: Booth[];
  criterias!: Criteria[];
  judgeBooth!: JudgeBooth[];
  judgeBoothsWithBooths!: JudgeBoothWithBooth[];

  evaluationForm!: FormGroup;
  isSubmitted = false;

  constructor(private activatedRoute: ActivatedRoute, 
    public formBuilder: FormBuilder, 
    private dataService: DataService, 
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController) {
      this.currentUserId = authService.getUID()!;

    this.dataService.getJudgeByAuthId(this.currentUserId).subscribe(judge => {
      this.currentJudge = judge[0];
    });
  }

  ngOnInit() {
    this.dataService.getJudgeBooth().subscribe((judgeBooths: JudgeBooth[]) => {
      this.dataService.getBooth().subscribe((booths: Booth[]) => {
        this.judgeBoothsWithBooths = this.dataService.combineData(judgeBooths, booths);
      });
    });

    this.dataService.getCriteria().subscribe(criteria => {
      this.criterias = criteria;
    });

    this.specificBooth = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  range(start: number, end: number): number[] {
    return Array(end - start + 1).fill(0).map((_, idx) => start + idx);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Please provide all the required values!',
      duration: 1500,
      icon: 'close-circle',
    });

    await toast.present();
  }

  cancelEvaluation() {
    this.dataService.updateBoothAvailability(this.judgeBoothsWithBooths[0].booth, true);
    this.router.navigate(['/booth']);
  }

  submitForm() {
    this.isSubmitted = true;
    if (this.evaluationForm.valid) {
      const formValues = this.evaluationForm.value;

      // Iterate over the form values
      Object.keys(formValues).forEach(key => {
        if (key.startsWith('score')) {
          const criteriaIndex = parseInt(key.substring(5));
          const criteria = this.criterias[criteriaIndex];
          const value = formValues[key];

          // Create a new Scoring object
          const scoring: Scoring = {
            booth_id: this.specificBooth,
            criteria_id: criteria.id,
            judge_id: this.currentJudge.id,
            value: parseInt(value)
          };

          // Call the addScoring function for each scoring value
          this.dataService.addScoring(scoring);
        }
      });
      // Update the judgeBooth and Booth object 
      this.dataService.updateJudgeBooth(this.judgeBooth[0]);
      this.dataService.updateBoothAvailability(this.judgeBoothsWithBooths[0].booth, true);

      // Reset the form after submitting
      this.evaluationForm.reset();
      this.router.navigate(['/booth']);

      Swal.fire({
        icon: 'success',
        title: 'Scoring submitted',
        text: 'Your evaluation has been submitted successfully!',
        heightAuto: false,
      });
      return true;
    } else {
      this.presentToast();
      return false;
    }
  }
}
