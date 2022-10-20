import { Observable } from 'rxjs';
import { SocketInfrastructure } from './../infrastructure/socket.infrastructure';
import { Inject, Injectable } from "@angular/core";
import { SocketRepository } from '../domain/socket.repository';
import { Graph } from '../domain/graph.interface';

@Injectable()
export class SocketApplication {

  constructor(@Inject(SocketInfrastructure) private socket: SocketRepository) {}

  listen(eventName: string): Observable<Graph[]> {
    return this.socket.listen(eventName);
  }
}
