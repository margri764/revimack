import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home.component';
import { NavbarComponent } from './shared/pages/navbar/navbar.component';
import { Page404Component } from './shared/pages/page404/page404.component';

const routes: Routes = [
  {
    path: "", redirectTo: "home", pathMatch: 'full'
  },
  {
    path: "home", component: HomeComponent
  },
 
  {
    path: '404',
    component: Page404Component
  },
  {
    path: '**',
    // component: ErrorPageComponent
    redirectTo: '404'
  }
]
@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
