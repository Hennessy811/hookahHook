import { Component, OnInit } from '@angular/core';
import {CartService} from "../../../core/services/cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private cart: CartService) { }

  home;

  ngOnInit() {
    this.home = localStorage.getItem('route');
    console.log(this.home)
  }

}
