import { Component, ViewChild } from '@angular/core';
import { TestimonialService } from '../services/testimonial.service';

@Component({
  selector: 'fm-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.less']
})
export class SliderComponent {
  testimonials$ = this.testimonialService.testimonials$;
  @ViewChild('imgCarousel') imgCarousel: any;

  constructor(private testimonialService: TestimonialService) { }

  prev() {
    this.imgCarousel.prev();
  }

  next() {
    this.imgCarousel.next();
  }

}
