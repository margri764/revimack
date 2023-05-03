import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsedRoutingModule } from './used-routing';
import { HomeUsedComponent } from './pages/home-used/home-used/home-used.component';
import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [
        HomeUsedComponent
    ],
    imports: [
        CommonModule,
        UsedRoutingModule,
        SharedModule
    ]
})
export class UsedModule { }
