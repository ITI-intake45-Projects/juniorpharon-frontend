import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css'],
  standalone: false
})
export class TripCardComponent {

  @Input() trip: any;

  constructor(private router: Router) {}

  goToDetails() {
    this.router.navigate(['/trips', this.trip.id]);
  }
}
