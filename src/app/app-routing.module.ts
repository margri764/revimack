import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './shared/pages/contact-us/contact-us.component';
import { HomeComponent } from './shared/pages/home/home.component';
import { Page404Component } from './shared/pages/page404/page404.component';
import { ThanksComponent } from './shared/pages/thanks/thanks.component';

const routes: Routes = [

  {
    path: 'agro',
    loadChildren: () => import('./agro-machines/agro-machines.module').then( m => m.AgroMachinesModule )
  },
  
  {
    path: 'implementos',
    loadChildren: () => import('./agro-implements/agro-implements.module').then( m => m.AgroImplementsModule )
  },
  {
    path: 'eco',
    loadChildren: () => import('./plastics/plastics.module').then( m => m.PlasticsModule )
  },
  {
    path: 'insumos',
    loadChildren: () => import('./parts/parts.module').then( m => m.PartsModule )
  },
  {
    path: 'tecno',
    loadChildren: () => import('./tecno/tecno.module').then( m => m.TecnoModule )
  },

  {
    path: "home", component: HomeComponent
  },
  {
    path: "", redirectTo: "home", pathMatch: 'full'
  },
  {
    path: "gracias", component: ThanksComponent
  },
  {
    path: "contacto", component: ContactUsComponent
  },
  {
    path: '404',
    component: Page404Component
  },
  {
    path: '**',
    // component: ErrorPageComponent
    redirectTo: '404'
  }
]

@NgModule({
  imports: [
    // RouterModule.forRoot( routes)
    RouterModule.forRoot( routes, { useHash: true })

  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
