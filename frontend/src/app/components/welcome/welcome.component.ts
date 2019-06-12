import { Component, OnInit } from '@angular/core';
import {IAction} from "../../core/models/Action.interface";
import {ManagePlaceService} from "../../core/services/manage.place.service";
import {PlaceService} from "../../core/services/place.service";
import {ActivatedRoute, Router} from "@angular/router";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent implements OnInit {

  unsubscribe = new Subject();

  actions: IAction[] = [
    {
      id: 1,
      message: 'helpme',
      label: 'Позвать официанта',
      endpoint: ''
    },
    {
      id: 2,
      message: 'helpme',
      label: 'Позвать калянщика',
      endpoint: ''
    },
    {
      id: 3,
      message: 'helpme',
      label: 'Меню',
      endpoint: 'menu',
      isRoute: true
    },
    {
      id: 4,
      message: 'checkout',
      label: 'Счёт',
      endpoint: 'checkout'
    },
  ];

  menu: IAction[] = [
    {
      id: 3,
      message: 'helpme',
      label: 'Меню',
      endpoint: 'menu',
      isRoute: true
    },
    {
      id: 4,
      message: 'checkout',
      label: 'Счёт',
      endpoint: 'checkout'
    },
  ];

  render: IAction[] = [];

  dispatched(event: IAction) {
    console.log('Dispatched ', event);
    this.route.params.subscribe(res => {
      // console.log(this.router.url)
      if (event.isRoute) {
        this.router.navigate([this.router.url + '/menu'])
      }
      this.ps.dispatchAction(event.message, res.tableId);
    }).unsubscribe()
  }

  constructor(private ps: PlaceService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getActions();

    if (this.router.url.indexOf('menu') > 0) {
      this.render = this.menu
    }
    else {
      this.render = this.actions
    }
  }

  getActions() {
    const params = this.route.snapshot.params;
    console.log(params)
    this.ps.getActions(params.placeId, params.tableId)
      .pipe(
        takeUntil(this.unsubscribe)
      ).subscribe();
  }

}
