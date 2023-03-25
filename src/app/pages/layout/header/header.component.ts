import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { Event } from '@angular/router';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  gloablSearch: any = ''
  constructor() {
    console.log(this.gloablSearch)
  }
}
