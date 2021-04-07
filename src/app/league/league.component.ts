import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {

  bar:string = 'assets/images/g3.png';
  img:string = 'assets/images/img.png';
  car:string = 'assets/images/car44.png';

  constructor() { }

  ngOnInit(): void {
  }

}
