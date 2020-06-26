import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Testimonial } from '../testimonials/testimonial.model';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {
  testimonials$: Observable<Testimonial[]> = of(Testimonials);
}

const Testimonials = [
  {
    description: `I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
    excited about the future.`,
    name: "Tanya Sinclair",
    jobName: "UX Engineer",
    imageUrl: "../assets/images/image-tanya.jpg"
  },
  {
    description: `If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer.`,
    name: "John Tarkpor",
    jobName: "Junior Front-end Developer",
    imageUrl: "../assets/images/image-john.jpg"
  },
];
