import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeUsedComponent } from './pages/home-used/home-used/home-used.component';
import { PromoSkfComponent } from './message/promo-skf/promo-skf/promo-skf.component';
import { ViewMoreUsedComponent } from './pages/view-more-used/view-more-used/view-more-used.component';
import { ViewMoreSimilarComponent } from './pages/view-more-similar/view-more-similar/view-more-similar.component';
import { NotifyModalComponent } from './messages/notify-modal/notify-modal/notify-modal.component';

const routes: Routes = [
  
  {
   path: '',

   children: [
    // { 
    //   path: "form" , component: NotifyModalComponent
    // },
   
     { 
       path: "home-usados" , component: HomeUsedComponent
     },
     {    
      path: "home-usados/:category/:brand/:name" , component: ViewMoreUsedComponent
     },
     {    
      path: "ver-usados-similares/:category/:brand/:name" , component: ViewMoreSimilarComponent
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
