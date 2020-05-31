import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialComponent } from './testimonial.component';
import { TestimonialRoutingModule } from '../testimonial/testimonial-routing.module';

@NgModule({
  declarations: [TestimonialComponent],
  imports: [
    CommonModule,
    TestimonialRoutingModule
  ]
})
export class TestimonialModule { }
