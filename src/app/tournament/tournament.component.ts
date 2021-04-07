import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  level:string = 'assets/images/banner.png';
  head:string = 'BRING YOUR GAME TO THE NEXT LEVEL';
  copy:string = 'You have goals and you want to become a great gamer. You know the practice it takes to be great and it takes a long time to hit an elite level. Our esports coach is here to help you become perfect at your game.';

  constructor() { }

  ngOnInit(): void {
  }

}
