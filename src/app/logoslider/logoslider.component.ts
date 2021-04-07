import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logoslider',
  templateUrl: './logoslider.component.html',
  styleUrls: ['./logoslider.component.css']
})
export class LogosliderComponent implements OnInit {
  slides = [
    {img: "assets/images/mo.png"},
    {img: "assets/images/br.png"},
    {img: "assets/images/t.png"},
    {img: "assets/images/c.png"},
    {img: "assets/images/sat.png"},
    {img: "assets/images/tes.png"},
    {img: "assets/images/ta.png"},
    {img: "assets/images/bmv.png"}
  ];
  slideConfig = {"slidesToShow": 8, "slidesToScroll": 4,  "autoplay": true,
  "responsive": [
    {
      "breakpoint": 993,
      "settings": {
      "slidesToShow": 5,
      "slidesToScroll": 1,
      }
      },
    {
    "breakpoint": 768,
    "settings": {
    "slidesToShow": 5,
    "slidesToScroll": 1,
    }
    },
    {
    "breakpoint": 576,
    "settings": {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    }
    }
    ]};
  constructor() { }

  ngOnInit(): void {
  }

}
