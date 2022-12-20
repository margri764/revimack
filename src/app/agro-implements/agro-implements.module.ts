import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeImplementsComponent } from './pages/homeImplements/home-implements/home-implements.component';
import { AgroImplementsRoutingModule } from './agro-implements-routing.module';
import { PesceComponent } from './pages/pesce/pesce/pesce.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { MetalpazComponent } from './pages/metalpaz/metalpaz/metalpaz.component';
import { CortiComponent } from './pages/corti/corti/corti.component';
import { BernardinComponent } from './pages/bernardin/bernardin/bernardin.component';



@NgModule({
  declarations: [
    HomeImplementsComponent,
    PesceComponent,
    MetalpazComponent,
    CortiComponent,
    BernardinComponent
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
