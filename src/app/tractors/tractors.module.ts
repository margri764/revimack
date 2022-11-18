import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TractorsRoutingModule } from './tractors-routing.module';
import { HomeTractorsComponent } from './pages/homeTractors/home-tractors/home-tractors.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeTractorsComponent
  ],
  imports: [
    CommonModule,
    TractorsRoutingModule,
    FlexLayoutModule,
    SharedModule,
  ]
})
export class TractorsModule { }
