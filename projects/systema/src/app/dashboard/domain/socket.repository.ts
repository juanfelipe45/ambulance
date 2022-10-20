import { Observable } from 'rxjs';
import { Graph } from './graph.interface';

export interface SocketRepository {
  listen(eventName: string): Observable<Graph[]>;
}
