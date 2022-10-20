import { CovidModel } from './../../../domain/covid.model';
import { CovidApplication } from './../../../application/covid.application';
import { Graph } from '../../../domain/graph.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'amb-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.sass']
})
export class CovidComponent implements OnInit {

  public schema: string;
  public xAxis: boolean;
  public yAxis: boolean;
  public dataCovid: Graph[]
  public xAxisLabel: string;
  public yAxisLabel: string;
  public showLegend: boolean;
  public view: [number, number];
  public showYAxisLabel: boolean;
  public showXAxisLabel: boolean;

  constructor(private readonly _covidApplication: CovidApplication) {
    this.xAxis = true;
    this.yAxis = true;
    this.dataCovid = [];
    this.view = [700, 450];
    this.showLegend = false;
    this.schema = 'natural';
    this.showYAxisLabel = true;
    this.showXAxisLabel = true;
    this.xAxisLabel = 'Countries';
    this.yAxisLabel = 'Confirmed cases';
  }

  ngOnInit(): void {
    this._covidApplication.getCovidData().subscribe((data: Graph[]) => {
      console.log('data', data);
      this.dataCovid = data;
    });
  }

}
