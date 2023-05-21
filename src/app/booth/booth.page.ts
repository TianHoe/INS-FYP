import { Component, OnInit } from '@angular/core';
import { DataService, Booth } from '../services/data.service';

@Component({
  selector: 'app-booth',
  templateUrl: './booth.page.html',
  styleUrls: ['./booth.page.scss'],
})
export class BoothPage implements OnInit {
  booths!: Booth[];

  public boothList = [
    { id: 6, title: 'INS 6', 
      members: 'This is the sixth card', 
      description: 'Sixth description here', 
      location: 'Lot 1-6',
      availability: undefined,
      evaluated: false },
    { id: 3, title: 'INS 3', 
      members: 'This is the third card', 
      description: 'Third description here', 
      location: 'Lot 1-3',
      availability: false,
      evaluated: false },
    { id: 1, title: 'INS 1', 
      members: 'This is the first card', 
      description: 'First description here', 
      location: 'Lot 1-1',
      availability: true,
      evaluated: false },
    { id: 4, title: 'INS 4', 
      members: 'This is the fourth card', 
      description: 'Fourth description here', 
      location: 'Lot 1-4',
      availability: false,
      evaluated: false },
    { id: 2, title: 'INS 2', 
      members: 'This is the second card', 
      description: 'Second description here', 
      location: 'Lot 1-2',
      availability: true,
      evaluated: true },
    { id: 5, title: 'INS 5', 
      members: 'This is the fifth card', 
      description: 'Fifth description here', 
      location: 'Lot 1-5',
      availability: undefined,
      evaluated: false },
  ];

  public sortedBoothList = this.boothList.sort((a, b) => a.id - b.id);

  public results = [...this.sortedBoothList];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getBooth().subscribe(booths => {
      this.booths = booths;
    });
  }

  handleChange(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.sortedBoothList.filter((booth) => {
      if (typeof booth.title === 'string' && typeof booth.members === 'string') {
        return (
          booth.title.toLowerCase().includes(query) ||
          booth.members.toLowerCase().includes(query)
        );
      }
      return false;
    });
  }
}
