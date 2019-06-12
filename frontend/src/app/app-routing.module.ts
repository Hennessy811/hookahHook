import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {ManageAccountComponent} from "./components/manage-account/manage-account.component";
import {InstructionsComponent} from "./components/instructions/instructions.component";
import {CartComponent} from "./components/cart/cart.component";
import {MenuComponent} from "./components/menu/menu.component";
import {OnTheWayComponent} from "./components/on-the-way/on-the-way.component";

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'instructions'
  },
  {
    path: 'service/:placeId/:tableId', component: WelcomeComponent
  },
  {
    path: 'service/:placeId/:tableId/menu', component: MenuComponent
  },
  {
    path: 'service/:placeId/:tableId/ontheway', component: OnTheWayComponent
  },
  {
    path: 'dashboard/:placeId', component: ManageAccountComponent
  },
  {
    path: 'instructions', component: InstructionsComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: '**', redirectTo: 'instructions'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
