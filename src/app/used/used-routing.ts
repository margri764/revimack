import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeUsedComponent } from './pages/home-used/home-used/home-used.component';
import { PromoSkfComponent } from './message/promo-skf/promo-skf/promo-skf.component';
import { ViewMoreUsedComponent } from './pages/view-more-used/view-more-used/view-more-used.component';

const routes: Routes = [
  
  {
   path: '',

   children: [
   
     { 
       path: "home-usados" , component: HomeUsedComponent
     },
     {    
      path: "home-usados/:category/:id" , component: ViewMoreUsedComponent
     },
     {    
      path: "promo-skf" , component: PromoSkfComponent
     },
     {
       path: '**',
       redirectTo: 'home-usados'
     },
  
   ]
 }

 
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild( routes )

  ],
  exports: [
    RouterModule

  ]
})
export class UsedRoutingModule { }
