import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilitiesRoutingModule } from './facilities-routing.module';
import { FacilitiesComponent } from './facilities.component';
import { MainSharedModule } from '../../main-shared/main-shared.module';


@NgModule({
  declarations: [
    FacilitiesComponent
  ],
  imports: [
    CommonModule,
    FacilitiesRoutingModule,
    MainSharedModule
  ]
})
export class FacilitiesModule { }
