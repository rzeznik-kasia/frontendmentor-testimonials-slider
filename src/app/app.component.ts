import { Component } from '@angular/core';
import { Testimonial } from './testimonial/testimonial.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'frontendmentor-testimonials-slider';
  testimonials: Testimonial[] = 
  [
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
  ]
}
