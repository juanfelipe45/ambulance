import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "projects/systema/src/environments/environment";
import { Observable } from "rxjs";
import { IResponsePage } from '../interfaces/response-page';

export abstract class BaseInfrastructure<Entity> {

  protected http: HttpClient;

  constructor(private readonly _http: HttpClient, private readonly endpoint: string) {}

  insert(entity: Entity): Observable<Entity> {
    return this._http.post<Entity>(`${environment.apiUrl}/${this.endpoint}`, entity);
  }

  list(): Observable<Entity[]> {
    return this._http.get<Entity[]>(`${environment.apiUrl}/${this.endpoint}`);
  }

  listOne(id: number): Observable<Entity> {
    return this._http.get<Entity>(`${environment.apiUrl}/${this.endpoint}/${id}`);
  }

  update(id: number, entity: Entity): Observable<Entity> {
    return this._http.put<Entity>(`${environment.apiUrl}/${this.endpoint}/${id}`, entity);
  }

  delete(id: number): Observable<any> {
    return this._http.delete(`${environment.apiUrl}/${this.endpoint}/${id}`);
  }

  page(pageIndex: number, pageSize: number): Observable<IResponsePage<Entity>> {
    return this._http.get<IResponsePage<Entity>>(`${environment.apiUrl}/${this.endpoint}/page/${pageIndex}/${pageSize}`);
  }
}
