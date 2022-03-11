import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

//components
import { HomeMachinesComponent } from './pages/homeMachines/home-machines/home-machines.component';
import { AgroMachinesRoutingModule } from './agro-machines-routing.module';
import { MachinesComponent } from './pages/machines/machines.component';
import { FormComponent } from './pages/form/form/form.component';



@NgModule({
  declarations: [
    HomeMachinesComponent,
    MachinesComponent,
    FormComponent,

  ],
  imports: [
    CommonModule,
    AgroMachinesRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  exports:[
    HomeMachinesComponent,
    MachinesComponent,
    FormComponent,

  ],
  providers:[FormComponent]  
})
export class AgroMachinesModule { }
