import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, of, Subject, timer} from "rxjs";
import {delay, map, take} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-on-the-way',
  templateUrl: './on-the-way.component.html',
  styleUrls: ['./on-the-way.component.sass']
})
export class OnTheWayComponent implements OnInit, OnDestroy {

  counter$: Observable<number>;
  count = 36;

  constructor(private router: Router) {
  }

  timer;

  ngOnInit() {
    this.timer = of(null).pipe(
      delay(this.count * 1000)
    ).subscribe(() => {
      this.router.navigate([localStorage.getItem('route')])
    });

    this.counter$ = timer(0, 1000).pipe(
      take(this.count),
      map(() => --this.count)
    );
  }

  ngOnDestroy(): void {
    this.timer.unsubscribe()
  }
}
