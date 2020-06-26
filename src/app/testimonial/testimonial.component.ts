import { Component, Input } from '@angular/core';

import { SlideComponent } from './slide.component';

@Component({
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.less']
})
export class TestimonialComponent implements SlideComponent {
  @Input() data: any;
}
