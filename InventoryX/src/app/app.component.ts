import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-app for angular material';
  sideBarOpened:boolean = true;
  screenWidth: number;
  constructor() {
    this.screenWidth = window.innerWidth;
   window.onresize = () => {
    // set screenWidth on screen size change
    this.screenWidth = window.innerWidth;
  };
  }
  

  sideBarToggler(){
    this.sideBarOpened = !this.sideBarOpened;
  }
}
