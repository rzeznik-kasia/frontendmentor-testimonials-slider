import { Component } from '@angular/core';
import { TestimonialService } from '../services/testimonial.service';

@Component({
  selector: 'fm-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.less']
})
export class TestimonialsComponent {
  testimonials$ = this.testimonialService.testimonials$;
  constructor(private testimonialService: TestimonialService) { }
}
