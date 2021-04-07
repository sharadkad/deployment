import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boxslider',
  templateUrl: './boxslider.component.html',
  styleUrls: ['./boxslider.component.css']
})
export class BoxsliderComponent implements OnInit {

  slides = [
    {img: "assets/images/car.png"},
    {img: "assets/images/car2.png"},
    {img: "assets/images/car3.png"},
    {img: "assets/images/car4.png"},
    {img: "assets/images/car2.png"}
  ];
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4,  "autoplay": true,
  "responsive": [
    {
      "breakpoint": 993,
      "settings": {
      "slidesToShow": 3,
      "slidesToScroll": 1,
      }
      },
    {
    "breakpoint": 768,
    "settings": {
    "slidesToShow": 2,
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
