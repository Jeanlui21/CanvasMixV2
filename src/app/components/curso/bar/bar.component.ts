import { Component, OnInit, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { Course } from 'src/app/models/course';
import { Scores, dataSet } from 'src/app/models/constructor';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {
  
  @Input() data: dataSet;


  public contenedor : any = [];
  public data_new = [];
  public label_new = [];

  constructor() { }

  ngOnInit() {
   
   
    for (const score in this.data) {
      if (this.data.hasOwnProperty(score)) {
        this.data_new = this.data[score];
        console.log(this.data.data);
      }
    }

  }

  

  public chartType: string = 'horizontalBar';

  public chartDatasets: Array<any> = [
    { data: this.data , label: 'My First dataset' }
  ];

  public chartLabels: Array<any> = ["s","s","s","s","s","s","s","s","s","s"];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}
