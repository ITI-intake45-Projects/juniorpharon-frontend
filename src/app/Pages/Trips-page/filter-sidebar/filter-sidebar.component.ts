// filter-sidebar.component.ts
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TripFilter } from '../../../core/models/Search/trip-filter';

@Component({
  selector: 'app-filter-sidebar',
  templateUrl: './filter-sidebar.component.html',
  styleUrls: ['./filter-sidebar.component.css'],
  standalone: false
})
export class FilterSidebarComponent implements OnInit {
  @Output() filterApplied = new EventEmitter<TripFilter>();

  showFilter: boolean = false;
  isDesktop: boolean = false;

  location: string = '';
  city: string = '';
  minPrice: number = 0;
  maxPrice: number = 1000;
  durationInDays?: number;
  rating?: number;
  descending: boolean = false;

  ngOnInit(): void {
    this.checkScreenWidth();
  }

  checkScreenWidth() {
    // Angular SSR safety
    if (typeof window !== 'undefined') {
      this.isDesktop = window.innerWidth >= 768;
    } else {
      this.isDesktop = true; // افتراض ديسكتوب على السيرفر
    }
  }

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  // دوال لتصحيح القيم عند تعديل السعر
  minPriceChanged() {
    if (this.minPrice > this.maxPrice) {
      this.minPrice = this.maxPrice;
    }
  }

  maxPriceChanged() {
    if (this.maxPrice < this.minPrice) {
      this.maxPrice = this.minPrice;
    }
  }

  applyFilter() {
    const filter: TripFilter = {
      location: this.location,
      city: this.city,
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      durationInDays: this.durationInDays,
      rating: this.rating,
      descending: this.descending,
      pageIndex: 1,
    };

    // إرسال الفلتر للـ parent
    this.filterApplied.emit(filter);

    // على الموبايل نخفي الفلتر بعد التطبيق
    if (!this.isDesktop) this.showFilter = false;
  }
}
