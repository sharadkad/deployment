import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asidelogo',
  templateUrl: './asidelogo.component.html',
  styleUrls: ['./asidelogo.component.css']
})
export class AsidelogoComponent implements OnInit {

  images = [
    {'img': 'assets/images/96.png'}, 
    {'img': 'assets/images/97.png'},
    {'img': 'assets/images/98.png'},
    {'img': 'assets/images/99.png'},
    {'img': 'assets/images/100.png'},
    {'img': 'assets/images/101.png'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
