import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeImplementsComponent } from './pages/homeImplements/home-implements/home-implements.component';
import { AgroImplementsRoutingModule } from './agro-implements-routing.module';



@NgModule({
  declarations: [
    HomeImplementsComponent
  ],
  imports: [
    CommonModule,
    AgroImplementsRoutingModule
  ],
  exports:[
    HomeImplementsComponent

  ]
})
export class AgroImplementsModule { }
