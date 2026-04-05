import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter-subscribe',
  templateUrl: './newsletter-subscribe.component.html',
  styleUrls: ['./newsletter-subscribe.component.css'],
  standalone: false
})
export class NewsletterSubscribeComponent {

  // Dynamic Data
  subscribeData = {
    title: "Subscribe & get special discount",
    subtitle: "Visit the official websites of hotels you're interested in and look for any promotions, discounts, or special offers",
    placeholder: "Enter your email",
    buttonText: "Subscribe"
  };

  // Form handling (ممكن توسعها بعدين)
  email: string = '';

  onSubscribe() {
    if (this.email) {
      console.log('Subscribed with email:', this.email);
      // هنا تقدر تضيف API call للـ backend
      alert('Thank you! You will receive special discounts soon.');
      this.email = '';
    }
  }
}
