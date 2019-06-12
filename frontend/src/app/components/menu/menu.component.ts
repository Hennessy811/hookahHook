import { Component, OnInit } from '@angular/core';
import {CartItem, CartService, Category} from "../../core/services/cart.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  constructor(private menu: CartService) { }

  menuList: Category[] = [];
  home;

  ngOnInit() {
    this.home = localStorage.getItem('route');
    this.menuList = this.menu.getMenu;
  }

  addToCart(item: CartItem) {
    this.menu.addItem(item);
  }

}
