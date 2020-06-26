import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { SliderComponent } from './slider/slider.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TestimonialService } from './services/testimonial.service';
import { SlideDirective } from './slider/slide.directive';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TestimonialComponent,
    SliderComponent,
    TestimonialsComponent,
    SlideDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [TestimonialService],
  bootstrap: [AppComponent],
  entryComponents: [TestimonialComponent]
})
export class AppModule { }
