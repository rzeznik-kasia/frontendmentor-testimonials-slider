import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { SliderComponent } from './slider/slider.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TestimonialService } from './services/testimonial.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TestimonialComponent,
    SliderComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [TestimonialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
