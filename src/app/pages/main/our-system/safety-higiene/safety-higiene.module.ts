import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafetyHigieneRoutingModule } from './safety-higiene-routing.module';
import { SafetyHigieneComponent } from './safety-higiene.component';
import { MainSharedModule } from '../../main-shared/main-shared.module';


@NgModule({
  declarations: [
    SafetyHigieneComponent
  ],
  imports: [
    CommonModule,
    SafetyHigieneRoutingModule,
    MainSharedModule
  ]
})
export class SafetyHigieneModule { }
