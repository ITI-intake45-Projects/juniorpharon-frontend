import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore-resorts',
  templateUrl: './explore-resorts.component.html',
  styleUrls: ['./explore-resorts.component.css'],
  standalone: false
})
export class ExploreResortsComponent implements OnInit {

  resorts = [
    { name: 'Alexandria', count: 12, image: 'assets/images/explore-resorts/alex.jpg' },
    { name: 'Aswan', count: 22, image: 'assets/images/explore-resorts/aswan.jpg' },
    { name: 'Luxor', count: 32, image: 'assets/images/explore-resorts/luxor.jpg' },
    { name: 'Horgada', count: 10, image: 'assets/images/explore-resorts/horgada.jpg' },
    { name: 'Sharm El Sheikh', count: 8, image: 'assets/images/explore-resorts/sharm.jpg' },
    { name: 'Dahab', count: 5, image: 'assets/images/explore-resorts/dahab.jpg' }
  ];

  displayedResorts: any[] = [];
  showAll = false; // false → عرض أول 4، true → عرض الكل

  constructor() { }

  ngOnInit(): void {
    this.displayedResorts = this.resorts.slice(0, 4); // أول 4 فقط
  }

  toggleResorts(): void {
    this.showAll = !this.showAll;
    this.displayedResorts = this.showAll ? this.resorts : this.resorts.slice(0, 4);
  }
}
