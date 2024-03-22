import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionsRoutingModule } from './admissions-routing.module';
import { AdmissionsComponent } from './admissions.component';
import { MainSharedModule } from '../main-shared/main-shared.module';


@NgModule({
  declarations: [
    AdmissionsComponent
  ],
  imports: [
    CommonModule,
    AdmissionsRoutingModule,
    MainSharedModule
  ]
})
export class AdmissionsModule { }
