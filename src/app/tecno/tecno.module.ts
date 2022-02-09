import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTecnoComponent } from './pages/homeTecno/home-tecno/home-tecno.component';
import { TecnoRoutingModule } from './tecno-routing.module';



@NgModule({
  declarations: [
    HomeTecnoComponent
  ],
  imports: [
    CommonModule,
    TecnoRoutingModule
  ],
  exports:[
    HomeTecnoComponent

  ]
})
export class TecnoModule { }
