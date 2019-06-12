import { Component, OnInit } from '@angular/core';
import {CartItem, CartService} from "../../core/services/cart.service";
import {PlaceService} from "../../core/services/place.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  constructor(private cart: CartService,
              private router: Router,
              private place: PlaceService) { }

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
    this.place.dispatchOrder(localStorage.getItem('route').split('/')[3], this.cartList);
    this.cart.clearCart();
    this.cartList = this.cart.getCart;
    this.router.navigate([localStorage.getItem('route') + '/ontheway']);
  }

  ngOnInit() {
    this.cartList = this.cart.getCart;
  }

}
