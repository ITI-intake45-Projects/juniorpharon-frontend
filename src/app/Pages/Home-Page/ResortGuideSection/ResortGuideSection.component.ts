import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ResortGuideSection',
  templateUrl: './ResortGuideSection.component.html',
  styleUrls: ['./ResortGuideSection.component.css'],
  standalone: false
})
export class ResortGuideSectionComponent implements OnInit {

  @Input() title!: string;
  @Input() description!: string;
  @Input() image!: string;
  @Input() sideTitle!: string;
  @Input() sideText!: string;

  //   resortSections = [
  //   {
  //     title: "Plan the perfect resort getaway",
  //     description: "Planning the perfect resort getaway involves several key considerations, such as location, accommodation, activities, and amenities. Here's a step-by-step guide to help you plan your dream resort vacation",
  //     image: "assets/images/resort1.jpg",
  //     sideTitle: "A traveling insider’s guide to Las Vegas",
  //     sideText: "Las Vegas, often referred to as the Entertainment Capital of the World, is a vibrant city known for its casinos, resorts, nightlife, and entertainment. Best Time to Visit: Las Vegas has a desert climate, so it can get extremely hot during summer (June to August). Consider visiting during spring (March to May) or fall (September to November) when the temperatures are more moderate."
  //   },
  //   {
  //     title: "Three reasons to make a resort your next Office vacation",
  //     description: "Las Vegas, often referred to as the Entertainment Capital of the World, is a vibrant city known for its casinos, resorts, nightlife, and entertainment.",
  //     image: "assets/images/resort2.jpg",
  //     sideTitle: "Why your team will love it",
  //     sideText: "Las Vegas has a desert climate, so it can get extremely hot during summer (June to August). Consider visiting during spring (March to May) or fall (September to November) when the temperatures are more moderate."
  //   }
  //   // تقدر تضيف أكتر هنا لو احتجت
  // ];


  constructor() { }

  ngOnInit(): void {
  }
}
