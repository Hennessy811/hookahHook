import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IAction} from "../models/Action.interface";
import {environment} from "../../../environments/environment";
import {CartItem} from "./cart.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class PlaceService {

  constructor(private http: HttpClient,
              private router: Router) {}

  getActions (placeId: string, tableId: string): Observable<IAction> {
    return this.http.get<IAction>(`${environment.apiURL}`)
  }

  dispatchAction(message: string, table: string) {
    this.http.get(`${environment.apiURL}?table=${table}&action=${message}`)
      .subscribe(res => console.log(res));
    this.router.navigate([localStorage.getItem('route') + '/ontheway'])
  }

  dispatchOrder(table: string, order: CartItem[]) {
    this.http.post(`${environment.apiURL}order`, {
      order,
      table
    })
  }
}
