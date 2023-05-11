import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsedRoutingModule } from './used-routing';
import { HomeUsedComponent } from './pages/home-used/home-used/home-used.component';
import { SharedModule } from "../shared/shared.module";
import { IvyCarouselModule } from 'angular-responsive-carousel2';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PromoSkfComponent } from './message/promo-skf/promo-skf/promo-skf.component';
import { ViewMoreUsedComponent } from './pages/view-more-used/view-more-used/view-more-used.component';
import { CurrentMonthYearPipe } from './pipe/currentMonthYear';
import { ViewMoreSimilarComponent } from './pages/view-more-similar/view-more-similar/view-more-similar.component';




@NgModule({
    declarations: [
        HomeUsedComponent,
        PromoSkfComponent,
        ViewMoreUsedComponent,
        CurrentMonthYearPipe,
        ViewMoreSimilarComponent
    ],
    imports: [
        CommonModule,
        UsedRoutingModule,
        SharedModule,
        IvyCarouselModule,
        FlexLayoutModule

    ]
})
export class UsedModule { }
