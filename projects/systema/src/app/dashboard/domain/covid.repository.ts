import { Observable } from 'rxjs';
import { CovidModel } from './covid.model';
export interface CovidRepository {
  getCovidData(): Observable<CovidModel[]>;
}
