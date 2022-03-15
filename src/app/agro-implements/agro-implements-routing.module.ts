import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeImplementsComponent } from './pages/homeImplements/home-implements/home-implements.component';
import { PesceComponent } from './pages/pesce/pesce/pesce.component';
import { RotoplasComponent } from './pages/rotoplas/rotoplas/rotoplas.component';



const routes: Routes = [
  
  {
   path: '',

   children: [
   
     {    
       path: "implementos-agricolas" , component: HomeImplementsComponent
     },

     {    
      path: "pesce" , component: PesceComponent
     },
     
     {    
      path: "rotoplas" , component: RotoplasComponent
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
