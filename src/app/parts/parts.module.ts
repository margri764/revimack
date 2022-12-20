import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePartsComponent } from './pages/homeParts/home-parts/home-parts.component';
import { PartsRoutingModule } from './parts-routing.module';



@NgModule({
  declarations: [
    HomePartsComponent
  ],
  imports: [
    CommonModule,
    PartsRoutingModule
  ],

  exports:[
    HomePartsComponent
  ]
})
export class PartsModule { }
