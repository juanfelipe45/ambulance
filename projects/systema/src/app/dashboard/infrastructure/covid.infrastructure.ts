import { HttpClient } from '@angular/common/http';
import { CovidRepository } from './../domain/covid.repository';
import { Injectable } from "@angular/core";
import { map, Observable } from 'rxjs';
import { CovidModel } from '../domain/covid.model';

@Injectable()
export class CovidInfrastructure implements CovidRepository {


  constructor(private readonly _http: HttpClient) {}

  public getCovidData(): Observable<CovidModel[]> {
    return this._http.get<CovidModel[]>('/api/confirmed').pipe(
      map((data: CovidModel[]) => data.slice(0, 30))
    );
  }

}
