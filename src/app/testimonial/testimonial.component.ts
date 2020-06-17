import { Component, OnInit, Input } from '@angular/core';
import { Testimonial } from './testimonial.model';

@Component({
  selector: 'fm-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.less']
})
export class TestimonialComponent implements OnInit {
  @Input() testimonial: Testimonial;
  constructor() { }

  ngOnInit() {
  }

}
