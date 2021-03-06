import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Page404Component } from './pages/page404/page404.component';
import { SharedRoutingModule } from './shared-routing.module';
import { StartComponent } from './pages/start/start.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NavbarComponent } from './pages/navbar/navbar.component';
import { SliderUpComponent } from './pages/sliderUp/slider-up/slider-up.component';
import { FormCanvasComponent } from './pages/formCanvas/form-canvas/form-canvas.component';
import { SliderBrandComponent } from './pages/sliderBrand/slider-brand/slider-brand.component';
import { ThanksComponent } from './pages/thanks/thanks.component';
import { UsComponent } from './pages/us/us/us.component';





@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactUsComponent,
    Page404Component,
    StartComponent,
    NavbarComponent,
    SliderUpComponent,
    FormCanvasComponent,
    SliderBrandComponent,
    ThanksComponent,
    UsComponent  
  ],
  
  imports: [
    CommonModule,
    SharedRoutingModule,  
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  
  exports:[
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactUsComponent,
    Page404Component,
    StartComponent,
    NavbarComponent,
    SliderUpComponent,
    FormCanvasComponent,
    SliderBrandComponent ,
    UsComponent  


    

  ],
  // providers:[ FormCanvasComponent]
})
export class SharedModule { }
