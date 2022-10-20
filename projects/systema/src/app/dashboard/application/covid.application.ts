import { Graph } from '../domain/graph.interface';
import { map, Observable } from 'rxjs';
import { CovidRepository } from './../domain/covid.repository';
import { Inject, Injectable } from "@angular/core";
import { CovidInfrastructure } from "../infrastructure/covid.infrastructure";
import { CovidModel } from '../domain/covid.model';

@Injectable()
export class CovidApplication {

  constructor(@Inject(CovidInfrastructure) private readonly repository: CovidRepository) {}

  getCovidData() : Observable<Graph[]> {
    return this.repository.getCovidData().pipe(
      map((data: CovidModel[]) =>
        data.map((covid: CovidModel) => ({
          name: covid.countryRegion,
          value: covid.confirmed
        }))
      )
    );
  }
}
