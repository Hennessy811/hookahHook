import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  home;

  ngOnInit() {
    this.home = localStorage.getItem('route');
    console.log(this.home)
  }

}
