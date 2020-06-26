import { map } from 'rxjs/operators'
import { Component } from '@angular/core';

import { TestimonialService } from '../services/testimonial.service';
import { SlideItem } from './slide-item';
import { TestimonialComponent } from '../testimonial/testimonial.component';

@Component({
  selector: 'fm-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.less']
})
export class TestimonialsComponent {
  testimonialSlides$ = this.testimonialService.testimonials$.pipe(
    map(testimonials => testimonials.map(
      testimonial => new SlideItem(TestimonialComponent, testimonial)
    ))
  );

  constructor(private testimonialService: TestimonialService) { }
}
