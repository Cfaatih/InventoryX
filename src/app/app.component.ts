import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-app for angular material';
  sideBarOpened:boolean = true;

  sideBarToggler(){
    this.sideBarOpened = !this.sideBarOpened;
  }
}
