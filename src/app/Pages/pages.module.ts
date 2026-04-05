import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Home-Page/home/home.component';
import { HeroSectionComponent } from './Home-Page/hero-section/hero-section.component';
import { share } from 'rxjs';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ExploreResortsComponent } from './Home-Page/explore-resorts/explore-resorts.component';
import { ResortGuideSectionComponent } from './Home-Page/ResortGuideSection/ResortGuideSection.component';
import { spec } from 'node:test/reporters';
import { SpecialOffersComponent } from './Home-Page/special-offers/special-offers.component';
import { NewsletterSubscribeComponent } from './Home-Page/newsletter-subscribe/newsletter-subscribe.component';
import { TripComponent } from './Trips-page/Trip/Trip.component';
import { TripCardComponent } from './Trips-page/trip-card/trip-card.component';
import { FilterSidebarComponent } from './Trips-page/filter-sidebar/filter-sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'trips',
    component: TripComponent,
  },
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  declarations: [
    HomeComponent,
    HeroSectionComponent,
    ExploreResortsComponent,
    ResortGuideSectionComponent,
    SpecialOffersComponent,
    NewsletterSubscribeComponent,
    TripComponent,
    FilterSidebarComponent,
    TripCardComponent
  ],
  exports: [RouterModule],
})
export class PagesModule {}
