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

  ngOnInit() {
    this.menuList = this.menu.getMenu;
  }

  addToCart(item: CartItem) {
    this.menu.addItem(item);
  }

}
