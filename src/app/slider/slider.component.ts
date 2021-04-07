import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngbmodule/material-carousel';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  slides = [
    {'image': 'assets/images/main1.png'}, 
    {'image': 'assets/images/main1.png'},
    {'image': 'assets/images/main1.png'}];

    images = [
      {'img': 'assets/images/96.png'}, 
      {'img': 'assets/images/97.png'},
      {'img': 'assets/images/98.png'},
      {'img': 'assets/images/99.png'},
      {'img': 'assets/images/100.png'},
      {'img': 'assets/images/101.png'}
    ];

  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1,  "autoplay": true,
  "responsive": [
    {
      "breakpoint": 993,
      "settings": {
      "slidesToShow": 1,
      "slidesToScroll": 1,
      }
      },
    {
    "breakpoint": 768,
    "settings": {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    }
    },
    {
    "breakpoint": 576,
    "settings": {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    }
    }
    ]};

  constructor() { }

  ngOnInit(): void {
  }

}
