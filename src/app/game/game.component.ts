import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  blueImg: string = 'assets/images/blue.png';
  roundImg: string = 'assets/images/g1.png';

  constructor() { }

  ngOnInit(): void {
  }

}
