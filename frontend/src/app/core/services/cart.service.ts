import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CartService {

  menu: Category[] = [
    {
      id: '1',
      label: 'Чаи',
      items: [
        {
          id: '1',
          label: 'Чай черный',
          description: "",
          isAvailable: true,
          price: "200 рублей / 500 мл",
          quantity: 0
        },
        {
          id: '2',
          label: 'Чай зеленый',
          description: "Прекрасный черный чай. Крепкий и вкусный, особенно с сахаром.",
          isAvailable: true,
          price: "200 рублей / 500 мл",
          quantity: 0
        },
        {
          id: '3',
          label: 'Чай травяной',
          description: "Прекрасный черный чай. Крепкий и вкусный, особенно с сахаром.",
          isAvailable: true,
          price: "200 рублей / 500 мл",
          quantity: 0
        },
        {
          id: '4',
          label: 'Чай ягодный',
          description: "Прекрасный черный чай. Крепкий и вкусный, особенно с сахаром.",
          isAvailable: true,
          price: "200 рублей / 500 мл",
          quantity: 0
        },
      ]
    },
    {
      id: '2',
      label: 'Салаты',
      items: [
        {
          id: '11',
          label: 'Цезарь',
          description: "Прекрасный черный чай. Крепкий и вкусный, особенно с сахаром.",
          isAvailable: true,
          price: "200 рублей / 500 мл",
          quantity: 0
        },
        {
          id: '12',
          label: 'Греческий',
          description: "Прекрасный черный чай. Крепкий и вкусный, особенно с сахаром.",
          isAvailable: true,
          price: "200 рублей / 500 мл",
          quantity: 0
        },
        {
          id: '13',
          label: 'Капуста',
          description: "Прекрасный черный чай. Крепкий и вкусный, особенно с сахаром.",
          isAvailable: true,
          price: "200 рублей / 500 мл",
          quantity: 0
        },
      ]
    },
  ];
  counter$ = new BehaviorSubject(0);

  private cart: CartItem[] = [];

  private get countQuantities() {
    let total = 0;
    this.cart.forEach(({quantity}) => total += quantity);
    console.log(total);
    return total;
  }

  constructor() {
    this.counter$.next(this.countQuantities);
  }

  addItem(item: CartItem) {
    if (this.cart.some(value => value.id === item.id)) {
      this.increase(item.id)
    } else {
      item.quantity++;
      this.cart.push(item);
    }
    this.counter$.next(this.countQuantities);
  }

  removeItem(id: string) {
    this.cart.filter(item => item.id === id)[0].quantity = 0;
    this.cart = this.cart.filter(item => item.id !== id);
    this.counter$.next(this.countQuantities);
  }

  increase(id: string) {
    this.cart = this.cart.map(item => {
      if (item.id === id && item.quantity < 10) {
        item.quantity++;
      }
      return item;
    });
    this.counter$.next(this.countQuantities);
  }

  decrease(id: string) {
    const item: CartItem = this.cart.filter(value => value.id === id)[0];
    if (item.quantity === 1) {
      this.removeItem(id);
    } else {
      this.cart = this.cart.map(item => {
        if (item.id === id) {
          item.quantity--;
        }
        return item;
      });
    }
    this.counter$.next(this.countQuantities);
  }

  clearCart() {
    this.cart = [];
    this.counter$.next(this.countQuantities);
  }

  get getCart(): CartItem[] {
    return this.cart;
  }

  get getMenu(): Category[] {
    return this.menu;
  }
}

export interface Category {
  id: string;
  label: string;
  items: CartItem[];
}

export interface CartItem {
  id: string;
  label: string;
  description: string;
  price: string;
  isAvailable: boolean;
  quantity?: number;
}
