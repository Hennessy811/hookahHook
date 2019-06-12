import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from "./app.component";
import {ManageAccountComponent} from "./components/manage-account/manage-account.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {InstructionsComponent} from "./components/instructions/instructions.component";
import {ScannerComponent} from "./components/scanner/scanner.component";
import {ActionComponent} from "./components/shared/action/action.component";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatDividerModule, MatExpansionModule, MatIconModule} from "@angular/material";
import { MenuComponent } from './components/menu/menu.component';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/shared/header/header.component';
import {OnTheWayComponent} from "./components/on-the-way/on-the-way.component";


@NgModule({
  declarations: [
    AppComponent,
    ManageAccountComponent,
    WelcomeComponent,
    InstructionsComponent,
    ScannerComponent,
    ActionComponent,
    MenuComponent,
    CartComponent,
    HeaderComponent,
    OnTheWayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDividerModule,
    MatIconModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
