import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boxslider-two',
  templateUrl: './boxslider-two.component.html',
  styleUrls: ['./boxslider-two.component.css']
})
export class BoxsliderTwoComponent implements OnInit {
  authorImg:string = "assets/images/author.png";

  slides = [
    {img: "assets/images/box1.png"},
    {img: "assets/images/box2.png"},
    {img: "assets/images/box3.png"},
    {img: "assets/images/box4.png"},
    {img: "assets/images/box1.png"}

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
