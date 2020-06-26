import { Type } from '@angular/core';

import { TestimonialComponent } from '../testimonial/testimonial.component';
import { Testimonial } from './testimonial.model';

export class SlideItem {
  constructor(public component: Type<TestimonialComponent>, public data: Testimonial) {}
}
  