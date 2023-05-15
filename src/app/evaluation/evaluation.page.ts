import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.page.html',
  styleUrls: ['./evaluation.page.scss'],
})

export class EvaluationPage implements OnInit {
  public specificBooth!: number;

  public boothList = [
    { id: 6, title: 'INS 6', 
      members: 'This is the sixth card', 
      description: 'Sixth description here', 
      location: 'Lot 1-6',
      availability: undefined },
    { id: 3, title: 'INS 3', 
      members: 'This is the third card', 
      description: 'Third description here', 
      location: 'Lot 1-3',
      availability: false },
    { id: 1, title: 'INS 1', 
      members: 'This is the first card', 
      description: 'First description here', 
      location: 'Lot 1-1',
      availability: true },
    { id: 4, title: 'INS 4', 
      members: 'This is the fourth card', 
      description: 'Fourth description here', 
      location: 'Lot 1-4',
      availability: false },
    { id: 2, title: 'INS 2', 
      members: 'This is the second card', 
      description: 'Second description here', 
      location: 'Lot 1-2',
      availability: true },
    { id: 5, title: 'INS 5', 
      members: 'This is the fifth card', 
      description: 'Fifth description here', 
      location: 'Lot 1-5',
      availability: undefined },
  ];

  public criterias = [
    'Originality', 
    'Marketing value',
    'Team capability',
    'Impact of the product',
    'Presetation Skill'
  ];

  evaluationForm!: FormGroup;
  isSubmitted = false;

  constructor(private activatedRoute: ActivatedRoute, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.specificBooth = parseInt(this.activatedRoute.snapshot.paramMap.get('id') as string, 10);

    this.evaluationForm = this.formBuilder.group({
      score0: ['', [Validators.required]],
      score1: ['', [Validators.required]],
      score2: ['', [Validators.required]],
      score3: ['', [Validators.required]],
      score4: ['', [Validators.required]],
      comment: ['']
    })
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
