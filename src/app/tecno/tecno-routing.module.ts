import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeTecnoComponent } from './pages/homeTecno/home-tecno/home-tecno.component';
import { PlantiumComponent } from './pages/plantium/plantium/plantium.component';



const routes: Routes = [
  
  {
   path: '',

   children: [
   
     {    
       path: "tecnologia" , component: HomeTecnoComponent
     },
     {    
      path: "plantium" , component: PlantiumComponent
    },
       
     {
       path: '**',
       redirectTo: 'tecnologia'
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
export class TecnoRoutingModule { }
