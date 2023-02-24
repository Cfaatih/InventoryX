import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './_common/dashboard/dashboard.component';
import { HomeComponent } from './_common/home/home.component';
import { PageContainerComponent } from './_common/layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: PageContainerComponent,
    children: [{
      path: '',
      component: HomeComponent
    }]
  },
  {
    path: 'dashboard',
    component: PageContainerComponent,
    children: [
      {
        path: '',
        component : DashboardComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
