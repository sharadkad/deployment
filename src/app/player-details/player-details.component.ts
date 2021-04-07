import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {

  authorimg:string = 'assets/images/zach.png';

  teamlogo1:string= 'assets/images/24.png';
  teamlogo2:string= 'assets/images/223.png';
  teamlogo3:string= 'assets/images/224.png';
  teamlogo4:string= 'assets/images/222.png';


  constructor() { }

  ngOnInit(): void {
  }

}
