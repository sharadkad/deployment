import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {

  gold:string= 'assets/images/yellow.png';
  silver:string= 'assets/images/white.png';
  bronz:string= 'assets/images/red.png';

  img1:string= 'assets/images/1logo.png';
  img2:string= 'assets/images/2logo.png';
  img3:string= 'assets/images/3logo.png';
  img4:string= 'assets/images/4logo.png';

  graph1:string= 'assets/images/graph1.png';
  graph2:string= 'assets/images/graph2.png';
  graph3:string= 'assets/images/graph3.png';
  graph4:string= 'assets/images/graph4.png';
  graph5:string= 'assets/images/graph5.png';

  logo:string= 'assets/images/98.png';
  constructor() { }

  ngOnInit(): void {
  }

}
