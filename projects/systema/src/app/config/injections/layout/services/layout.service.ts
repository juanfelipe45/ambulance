
import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

// Layout token
import { LAYOUT_TOKEN } from "../tokens/layout.token";
import { iLayout } from "../interfaces/layout.interface";


@Injectable({
  providedIn: 'root',
})
export class LayoutService {

  private configSubject: BehaviorSubject<iLayout>;

  constructor(@Inject(LAYOUT_TOKEN) private config: iLayout) {
    this.configSubject = new BehaviorSubject<iLayout>(config);
  }

  public set configuration(config: any) {
    this.configSubject.next(config);
  }

  public get configuration(): Observable<iLayout> {
    return this.configSubject.asObservable();
  }
}
