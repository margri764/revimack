import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeTractorsComponent } from './pages/homeTractors/home-tractors/home-tractors.component';

const routes: Routes = [
  
  {
   path: '',

   children: [
   
     {    
       path: "tractores" , component: HomeTractorsComponent
     },
     
     
     {
       path: '**',
       redirectTo: 'tractores'
     },
     
     // {
     //   path: 'form', component: FormComponent 
     // },
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
export class TractorsRoutingModule { }
