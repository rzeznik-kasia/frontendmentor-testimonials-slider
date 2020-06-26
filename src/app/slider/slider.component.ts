import { Component, ViewChild, Input, ComponentFactoryResolver, OnInit } from '@angular/core';

import { SlideItem } from '../testimonials/slide-item';
import { SlideDirective } from './slide.directive';
import { SlideComponent } from '../testimonial/slide.component';

@Component({
  selector: 'fm-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.less']
})
export class SliderComponent implements OnInit {
  @Input() slides: SlideItem[];
  
  @ViewChild(SlideDirective) private slideHost: SlideDirective;
  private currentSlideIndex = 0;
  
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
  
  ngOnInit() {
    this.loadComponent();
  }
  
  prev() {
    this.currentSlideIndex--;
    this.checkAndFixIndex();
    this.loadComponent();
  }

  next() {
    this.currentSlideIndex++;
    this.checkAndFixIndex();
    this.loadComponent();
  }

  private loadComponent() {
    const slideItem = this.slides[this.currentSlideIndex];
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(slideItem.component);
    const viewContainerRef = this.slideHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<SlideComponent>componentRef.instance).data = slideItem.data;
  }
  
  private checkAndFixIndex() {
    if (this.currentSlideIndex < 0) {
      this.currentSlideIndex = this.slides.length -1;
    }
    else if (this.currentSlideIndex == this.slides.length) {
      this.currentSlideIndex = 0;
    }
  }

}
