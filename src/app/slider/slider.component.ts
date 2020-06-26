import { Component, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'fm-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.less']
})
export class SliderComponent {
  @Input() slides;
  @ViewChild('imgCarousel') imgCarousel: any;

  constructor() { }

  prev() {
    this.imgCarousel.prev();
  }

  next() {
    this.imgCarousel.next();
  }

}
