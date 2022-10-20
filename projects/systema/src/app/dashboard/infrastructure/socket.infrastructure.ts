import { Injectable } from "@angular/core";
import { Observable, Observer } from "rxjs";
import { Graph } from "../domain/graph.interface";
import { SocketRepository } from "../domain/socket.repository";
import * as io from 'socket.io-client';

@Injectable()
export class SocketInfrastructure implements SocketRepository {

  private socket: io.Socket;

  constructor() {
    this.socket = io.connect('https://p7inv.sse.codesandbox.io/');
  }

  listen(eventName: string): Observable<Graph[]> {
    return new Observable<Graph[]>((observer: Observer<Graph[]>) => {
      this.socket.on(eventName, (data: Graph[]) => observer.next(data));
    });
  }

}
