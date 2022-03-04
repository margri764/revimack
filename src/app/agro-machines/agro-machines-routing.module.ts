import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeMachinesComponent } from './pages/homeMachines/home-machines/home-machines.component';
import { FormComponent } from './pages/form/form/form.component';

const routes: Routes = [
  
   {
    path: '',

    children: [
    
      {    
        path: "maquinas" , component: HomeMachinesComponent
      },
      
      
      {
        path: '**',
        redirectTo: 'maquinas-agricolas'
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
  exports:[
    RouterModule

  ]
})
export class AgroMachinesRoutingModule { }
