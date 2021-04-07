import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  rank: number;
  name: string;
  img:string;
  region: string;
  trophies: any;
  points:number;
}

export interface score {
 title:string;
 team1:string;
 team2:string;
 score:string;
}


const teamData: score[] = [
  {title:'Dota 2 Regional', team1:'The Saiyan Godz (TSG) UK', team2:'Dragons Lord of Bury', score:'1:0'},
  {title:'Dota 2 Regional', team1:'The Saiyan Godz (TSG) UK', team2:'Dragons Lord of Bury', score:'1:0'},
  {title:'Dota 2 Regional', team1:'The Saiyan Godz (TSG) UK', team2:'Dragons Lord of Bury', score:'1:0'}
]

const ELEMENT_DATA: PeriodicElement[] = [
  {rank: 1, img:'assets/images/21.png', name: 'Sharad', region: 'India', trophies: { gold:1, silver:2, bronz:3 }, points:333},
  {rank: 2, img:'assets/images/22.png', name: 'Rahul', region: 'US', trophies: { gold:4, silver:2, bronz:3 }, points:5454},
  {rank: 3, img:'assets/images/23.png', name: 'Vijay', region: 'UK', trophies: { gold:6, silver:2, bronz:1 }, points:545454},
  {rank: 4, img:'assets/images/24.png', name: 'Ganesh', region: 'Canada', trophies: { gold:4, silver:4, bronz:2 }, points:98454},
  {rank: 5, img:'assets/images/25.png', name: 'Vikram', region: 'Spain', trophies: { gold:4, silver:9, bronz:2 }, points:98454}
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

 
  dataSource = ELEMENT_DATA;

  scoreData = teamData;

  constructor() { }

  ngOnInit(): void {
  }

}
