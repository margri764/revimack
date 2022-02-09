import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeImplementsComponent } from './pages/homeImplements/home-implements/home-implements.component';



const routes: Routes = [
  
  {
   path: '',

   children: [
   
     {    
       path: "implementos-agricolas" , component: HomeImplementsComponent
     },
       
     {
       path: '**',
       redirectTo: 'implementos-agricolas'
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
export class AgroImplementsRoutingModule { }
