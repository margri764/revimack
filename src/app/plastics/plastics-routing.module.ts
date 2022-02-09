import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlasticsModule } from './plastics.module';
import { HomePlasticsComponent } from './pages/homePlastics/home-plastics.component';

const routes: Routes = [
  
  {
   path: '',

   children: [
   
     {    
       path: "plasticos" , component: HomePlasticsComponent
     },
       
     {
       path: '**',
       redirectTo: 'plasticos'
     }

   ]
 }

 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ],
  exports:[
    RouterModule

  ]
})
export class PlasticsRoutingModule { }
