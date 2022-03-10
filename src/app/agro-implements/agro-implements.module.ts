import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeImplementsComponent } from './pages/homeImplements/home-implements/home-implements.component';
import { AgroImplementsRoutingModule } from './agro-implements-routing.module';
import { PesceComponent } from './pages/pesce/pesce/pesce.component';



@NgModule({
  declarations: [
    HomeImplementsComponent,
    PesceComponent
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
