import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeImplementsComponent } from './pages/homeImplements/home-implements/home-implements.component';
import { AgroImplementsRoutingModule } from './agro-implements-routing.module';
import { PesceComponent } from './pages/pesce/pesce/pesce.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormCanvasComponent } from '../shared/pages/formCanvas/form-canvas/form-canvas.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeImplementsComponent,
    PesceComponent,
  ],
  imports: [
    CommonModule,
    AgroImplementsRoutingModule,
    FlexLayoutModule,
    SharedModule


  ],
  exports:[
    HomeImplementsComponent,
    PesceComponent,


  ],
  providers:[PesceComponent]
})
export class AgroImplementsModule { }
