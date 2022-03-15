import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePlasticsComponent } from './pages/homePlastics/home-plastics.component';
import { PlasticsRoutingModule } from './plastics-routing.module';
import { RotoplasComponent } from './pages/rotoplas/rotoplas/rotoplas.component';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    HomePlasticsComponent,
    RotoplasComponent
  ],
  imports: [
    CommonModule,
    PlasticsRoutingModule,
    SharedModule,
    FlexLayoutModule

  ],

  exports:[
    HomePlasticsComponent
  ]
})
export class PlasticsModule { }
