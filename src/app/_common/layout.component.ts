import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page-container',
  template: `
    <div class="container-fluid page">
      <div class="page__box p-4 mt-0">{{path}}</div>
      <div class="page__content shadow p-3 position-relative">
        <div class="page__content-data position-absolute">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styleUrls : ['./layout.component.scss']
})
export class PageContainerComponent{
    path: string = this.route.url.substr(1);
    constructor(private route: Router){}
}