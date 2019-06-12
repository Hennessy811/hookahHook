import { Component, OnInit } from '@angular/core';
import {CartItem, CartService} from "../../core/services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  constructor(private cart: CartService) { }

  cartList: CartItem[] = [
  ];

  increase(id: string) {
    this.cart.increase(id);
    this.cartList = this.cart.getCart
  }

  decrease(id: string) {

    this.cartList.find(value => value.id === id).quantity === 1 ? this.removeFromCart(id) : this.cart.decrease(id);
  }

  removeFromCart(id: string) {
    this.cart.removeItem(id);
    this.cartList = this.cart.getCart;
  }

  dispatchOrder() {
    alert('Заказ отправлен');
  }

  ngOnInit() {
    this.cartList = this.cart.getCart;
  }

}
