import { Component, OnInit, ViewChild } from '@angular/core';
import { TestimonialService } from '../services/testimonial.service';
import { Observable } from 'rxjs';
import { Testimonial } from '../testimonial/testimonial.model';

@Component({
  selector: 'fm-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.less']
})
export class TestimonialsComponent {
  constructor() { }
}
