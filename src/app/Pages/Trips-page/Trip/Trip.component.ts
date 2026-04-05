import { Component, OnInit } from '@angular/core';
import { TripFilter } from '../../../core/models/Search/trip-filter';
import { TripsService } from '../../../core/Services/Trips.service';
export interface Trip {
  id: number;
  title: string;
  city: string;
  location: string;
  price: number;
  durationInDays: number;
  coverImage: string;
  rating?: number;
}

@Component({
  selector: 'app-Trip',
  templateUrl: './Trip.component.html',
  styleUrls: ['./Trip.component.css'],
  standalone: false
})
export class TripComponent implements OnInit {



  trips = [
  {
    id: 1,
    title: 'Luxor Historical Tour',
    city: 'Luxor',
    location: 'Karnak & Valley of the Kings',
    price: 1500,
    oldPrice: 2000,
    durationInDays: 3,
    coverImage: 'https://images.unsplash.com/photo-1587135941948-670b381f08ce',
    rating: 4.7
  },
  {
    id: 2,
    title: 'Aswan Nile Experience',
    city: 'Aswan',
    location: 'Philae Temple & Nile Cruise',
    price: 1200,
    oldPrice: 1500,
    durationInDays: 2,
    coverImage: 'https://images.unsplash.com/photo-1590080875515-8c9c4c6b2f5d',
    rating: 4.5
  },
  {
    id: 3,
    title: 'Cairo Pyramids Adventure',
    city: 'Cairo',
    location: 'Giza Pyramids & Egyptian Museum',
    price: 1800,
    oldPrice: 2200,

    durationInDays: 2,
    coverImage: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020',
    rating: 4.8
  },
  {
    id: 4,
    title: 'Hurghada Beach Holiday',
    city: 'Hurghada',
    location: 'Red Sea Resort',
    price: 2000,
    durationInDays: 4,
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    rating: 4.6
  },
  {
    id: 5,
    title: 'Sharm El Sheikh Diving Trip',
    city: 'Sharm El Sheikh',
    location: 'Ras Mohammed National Park',
    price: 2200,
    durationInDays: 5,
    coverImage: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
    rating: 4.9
  },
  {
    id: 6,
    title: 'Alexandria Cultural Tour',
    city: 'Alexandria',
    location: 'Bibliotheca & Qaitbay Citadel',
    price: 1300,
    durationInDays: 2,
    coverImage: 'https://images.unsplash.com/photo-1577083552431-6e5fd75c9c6d',
    rating: 4.4
  },
  {
    id: 7,
    title: 'Siwa Oasis Safari',
    city: 'Siwa',
    location: 'Desert Safari & Salt Lakes',
    price: 2500,
    durationInDays: 3,
    coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
    rating: 4.8
  },
  {
    id: 8,
    title: 'Fayoum Nature Escape',
    city: 'Fayoum',
    location: 'Wadi El Rayan & Waterfalls',
    price: 900,
    durationInDays: 1,
    coverImage: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e',
    rating: 4.3
  }
];



  
  loading = false;

  constructor(private tripsService: TripsService) {}

  ngOnInit(): void {
    this.loadTrips({}); // load all trips initially
  }

  loadTrips(filter: TripFilter) {
    this.loading = true;
    this.tripsService.searchTrips(filter).subscribe({
      next: (res: any) => {
        this.trips = res.data; // assuming backend returns { data: [...] }
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
}

