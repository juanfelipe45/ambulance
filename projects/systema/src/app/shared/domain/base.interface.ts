import { Observable } from 'rxjs';
import { IResponsePage } from '../interfaces/response-page';
export interface Base<Entity> {
  insert(entity: Entity): Observable<Entity>;

  list(): Observable<Entity[]>

  listOne(id: number): Observable<Entity>;

  update(id: number, entity: Entity): Observable<Entity>;

  delete(id: number): Observable<any>;

  page(pageIndex: number, pageSize: number): Observable<IResponsePage<Entity>>;
}
