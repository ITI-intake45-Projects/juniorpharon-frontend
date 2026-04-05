import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface ResortSection {
  id: number;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  route?: string;
}

@Component({
  selector: 'app-special-offers',
  templateUrl: './special-offers.component.html',
  styleUrls: ['./special-offers.component.css'],
  standalone: false
})
export class SpecialOffersComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {}

  resortSections: ResortSection[] = [
    {
      id: 1,
      title: 'Meetings & Events',
      description: 'We would like to extend our heartfelt gratitude Ass-salaam.',
      image: 'assets/images/special_offers/aswan.jpg',
      buttonText: 'Book Now',
      route: '/meetings'
    },
    {
      id: 2,
      title: 'Weddings Program',
      description: 'We would like to extend our heartfelt gratitude Ass-salaam.',
      image: 'assets/images/special_offers/alex.jpg',
      buttonText: 'Book Now',
      route: '/weddings'
    },
    {
      id: 3,
      title: 'Conference Hall',
      description: 'We would like to extend our heartfelt gratitude Ass-salaam.',
      image: 'assets/images/special_offers/luxor.jpg',
      buttonText: 'Book Now',
      route: '/conference'
    }
  ];

  onBook(section: ResortSection) {
    if (section.route) {
      this.router.navigate([section.route]);
    }
  }

  onDetails(section: ResortSection) {
    console.log('Details:', section);
  }
}
