import { IResponsePage } from './../interfaces/response-page';
import { Observable } from 'rxjs';
import { Inject } from '@angular/core';
import { Base } from '../domain/base.interface';

export abstract class BaseApplication<Entity, Repository extends Base<Entity>> {

  constructor(private readonly repository: Repository) {}

  insert(entity: Entity): Observable<Entity> {
    return this.repository.insert(entity);
  }

  list(): Observable<Entity[]> {
    return this.repository.list();
  }

  listOne(id: number): Observable<Entity> {
    return this.repository.listOne(id);
  }

  update(id: number, entity: Entity): Observable<Entity> {
    return this.repository.update(id, entity);
  }

  delete(id: number): Observable<any> {
    return this.repository.delete(id);
  }

  page(pageIndex: number, pageSize: number): Observable<IResponsePage<Entity>> {
    return this.repository.page(pageIndex, pageSize);
  }

}
