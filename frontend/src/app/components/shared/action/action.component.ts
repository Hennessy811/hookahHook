import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IAction} from "../../../core/models/Action.interface";

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.sass']
})
export class ActionComponent {

  @Input() action: IAction;
  @Output() dispatch = new EventEmitter();

  onClick(event) {
    this.dispatch.emit(this.action);
  }

  constructor() { }
}
