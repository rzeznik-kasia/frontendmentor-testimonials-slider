import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const app_routes: Routes = [
  { path: 'testimonials', loadChildren: './testimonials/testimonials.module#TestimonialsModule' },
  { path: 'testimonials/:id', loadChildren: './testimonial/testimonial.module#TestimonialModule' },
  { path: '',   redirectTo: '/testimonials', pathMatch: 'full' },
  { path: '**', redirectTo: '/testimonials' } 
];

@NgModule({
  imports: [ RouterModule.forRoot(app_routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }