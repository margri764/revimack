import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { UsComponent } from './pages/us/us/us.component';

const routes: Routes =[

  {
    path:'contacto', component: ContactUsComponent 
  },

  {
    path:'nosotros', component: UsComponent 
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild ( routes )
  ],
  exports: [ RouterModule ]
  
})
export class SharedRoutingModule { }
