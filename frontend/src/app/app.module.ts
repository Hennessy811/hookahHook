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
import {MatButtonModule} from "@angular/material";


@NgModule({
  declarations: [
    AppComponent,
    ManageAccountComponent,
    WelcomeComponent,
    InstructionsComponent,
    ScannerComponent,
    ActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
