import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  img:string = 'assets/images/5.png'

  constructor() {  }

  ngOnInit(): void {
  }

}
