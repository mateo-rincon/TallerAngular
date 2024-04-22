import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSeries';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  series: Array<Serie> = [];
  avgSeasons:Number=0
  constructor() { }
  getSerieList():Array<Serie>{
    return dataSeries
  }
  
  ngOnInit() {
    this.series=this.getSerieList();
    this.avgSeasons=this.calcAvgSeries(this.series);
    console.log("Valor promedio: "+this.avgSeasons)
  }

  calcAvgSeries(series:Array<Serie>):Number{
    let sum:number=0;
    let cont:number=series.length;
    series.forEach((serie)=>sum=sum+serie.seasons);
    let avg:number=sum/cont
    return avg
    
  }

}
