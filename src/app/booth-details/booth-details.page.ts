import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booth-details',
  templateUrl: './booth-details.page.html',
  styleUrls: ['./booth-details.page.scss'],
})
export class BoothDetailsPage implements OnInit {
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

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.specificBooth = parseInt(this.activatedRoute.snapshot.paramMap.get('id') as string, 10);
  }

}
