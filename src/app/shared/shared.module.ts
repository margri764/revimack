import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { Page404Component } from './pages/page404/page404.component';
import { SharedRoutingModule } from './shared-routing.module';
import { StartComponent } from './pages/start/start.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NavbarComponent } from './pages/navbar/navbar.component';





@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactUsComponent,
    Page404Component,
    StartComponent,
    NavbarComponent  
    
  ],
  
  imports: [
    CommonModule,
    SharedRoutingModule,  
    FormsModule,
    FlexLayoutModule,




  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactUsComponent,
    Page404Component,
    StartComponent,
    NavbarComponent

  ],
})
export class SharedModule { }
