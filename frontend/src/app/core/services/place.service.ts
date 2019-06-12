import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IAction} from "../models/Action.interface";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class PlaceService {

  constructor(private http: HttpClient) {}

  getActions (placeId: string, tableId: string): Observable<IAction> {
    return this.http.get<IAction>(`${environment.apiURL}`)
  }

  dispatchAction(message: string, table: string) {
    this.http.get(`${environment.apiURL}?table=${table}&action=${message}`)
      .subscribe(res => console.log(res))
  }
}
