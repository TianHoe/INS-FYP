import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  public boothList = [
    { id: 6, title: 'INS 6', 
      members: 'This is the sixth card', 
      description: 'Sixth description here', 
      totalScore: undefined,
      comment: 'Comment for sixth card',
      evaluated: undefined },
    { id: 3, title: 'INS 3', 
      members: 'This is the third card', 
      description: 'Third description here', 
      totalScore: undefined,
      comment: 'Comment for third card',
      evaluated: false },
    { id: 1, title: 'INS 1', 
      members: 'This is the first card', 
      description: 'First description here', 
      totalScore: '15/25',
      comment: 'Comment for first card',
      evaluated: true },
    { id: 4, title: 'INS 4', 
      members: 'This is the fourth card', 
      description: 'Fourth description here', 
      totalScore: undefined,
      comment: 'Comment for fourth card',
      evaluated: false },
    { id: 2, title: 'INS 2', 
      members: 'This is the second card', 
      description: 'Second description here', 
      totalScore: '21/25',
      comment: 'Comment for second card',
      evaluated: true },
    { id: 5, title: 'INS 5', 
      members: 'This is the fifth card', 
      description: 'Fifth description here', 
      totalScore: undefined,
      comment: 'Comment for fifth card',
      evaluated: undefined },
  ];

  public sortedBoothList = this.boothList.sort((a, b) => a.id - b.id);
  public evaluatedCount = this.sortedBoothList.filter(booth => booth.evaluated == true).length;
  public assignedCount = this.sortedBoothList.filter(booth => booth.evaluated != undefined).length;

  constructor() { }

  ngOnInit() {
  }

}
