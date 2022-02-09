import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMachinesComponent } from './pages/homeMachines/home-machines/home-machines.component';
import { AgroMachinesRoutingModule } from './agro-machines-routing.module';



@NgModule({
  declarations: [
    HomeMachinesComponent
  ],
  imports: [
    CommonModule,
    AgroMachinesRoutingModule
  ],
  exports:[
    HomeMachinesComponent

  ]
})
export class AgroMachinesModule { }
