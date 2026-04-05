import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
  standalone: false
})
export class HeroSectionComponent implements OnInit , OnDestroy {
 images: string[] = [
    'assets/images/hero/pic1.jpg',
    'assets/images/hero/pic2.jpg',
    'assets/images/hero/pic3.jpg',
    'assets/images/hero/pic4.jpg',
    'assets/images/hero/pic5.jpg',
    'assets/images/hero/pic6.jpg',
    'assets/images/hero/pic7.jpg',
    'assets/images/hero/pic8.jpg',
    'assets/images/hero/pic9.jpg',
    'assets/images/hero/pic10.jpg',
    'assets/images/hero/pic11.jpg',
  ];

  currentIndex: number = 0;
  intervalId: any;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.startSlider();
    }
  }

  startSlider() {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 3000); // خليها 3 ثواني أحسن
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }


  prevImage() {
  this.currentIndex =
    (this.currentIndex - 1 + this.images.length) % this.images.length;
}

goToImage(index: number) {
  this.currentIndex = index;
}



}



