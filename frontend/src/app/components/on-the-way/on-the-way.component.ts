import { Component, OnInit } from '@angular/core';
import {Observable, timer} from "rxjs";
import {map, take} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-on-the-way',
  templateUrl: './on-the-way.component.html',
  styleUrls: ['./on-the-way.component.sass']
})
export class OnTheWayComponent implements OnInit {

  counter$: Observable<number>;
  count = 36;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.counter$ = timer(0,1000).pipe(
      take(this.count),
      map(() => --this.count)
    );

    setTimeout(() => {
      let route = localStorage.getItem('route');
      this.router.navigate([route]);
    }, this.count * 1000);
  }

}
