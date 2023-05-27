import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnav-backbtn',
  templateUrl: './topnav-backbtn.component.html',
  styleUrls: ['./topnav-backbtn.component.scss'],
})
export class TopnavBackbtnComponent  implements OnInit {
  isEvaluatePage: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isEvaluatePage = this.router.url.includes('/evaluate');
  }
}
