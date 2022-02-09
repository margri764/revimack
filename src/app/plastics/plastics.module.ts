import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePlasticsComponent } from './pages/homePlastics/home-plastics.component';
import { PlasticsRoutingModule } from './plastics-routing.module';



@NgModule({
  declarations: [
    HomePlasticsComponent
  ],
  imports: [
    CommonModule,
    PlasticsRoutingModule

  ],

  exports:[
    HomePlasticsComponent
  ]
})
export class PlasticsModule { }
