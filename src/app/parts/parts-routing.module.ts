import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePartsComponent } from './pages/homeParts/home-parts/home-parts.component';



const routes: Routes = [
  
  {
   path: '',

   children: [
   
     {    
       path: "repuestos-accesorios" , component: HomePartsComponent
     },
       
     {
       path: '**',
       redirectTo: 'repuestos-accesorios'
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
export class PartsRoutingModule { }
