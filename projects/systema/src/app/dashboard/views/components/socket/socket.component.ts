import { SocketApplication } from './../../../application/socket.application';
import { Component, OnInit } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import { Graph } from '../../../domain/graph.interface';

@Component({
  selector: 'amb-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.sass']
})
export class SocketComponent implements OnInit {

  public scheme: string;
  public legend: boolean;
  public gradient: boolean;
  public doughnut: boolean;
  public legendTitle: string;
  public dataVacuums: Graph[]
  public view: [number, number];
  public legendPosition: LegendPosition;

  constructor(private readonly _socketApplication: SocketApplication) {
    this.legend = true;
    this.dataVacuums = [];
    this.legendPosition = LegendPosition.Right;
    this.legendTitle = 'Vacuums';
    this.gradient = true;
    this.doughnut = true;
    this.view = [500, 450];
    this.scheme = 'natural';
  }

  ngOnInit(): void {
    this._socketApplication.listen('dataupdate').subscribe((data: Graph[]) => {
      console.log('data', data);
      this.dataVacuums = data;
    });
  }

}
