import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTecnoComponent } from './pages/homeTecno/home-tecno/home-tecno.component';
import { TecnoRoutingModule } from './tecno-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { PlantiumComponent } from './pages/plantium/plantium/plantium.component';



@NgModule({
  declarations: [
    HomeTecnoComponent,
    PlantiumComponent
  ],
  imports: [
    CommonModule,
    TecnoRoutingModule,
    FlexLayoutModule,
    SharedModule
  ],
  exports:[
    HomeTecnoComponent

  ]
})
export class TecnoModule { }
