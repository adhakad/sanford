import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurriculamRoutingModule } from './curriculam-routing.module';
import { CurriculamComponent } from './curriculam.component';
import { MainSharedModule } from '../../main-shared/main-shared.module';


@NgModule({
  declarations: [
    CurriculamComponent
  ],
  imports: [
    CommonModule,
    CurriculamRoutingModule,
    MainSharedModule
  ]
})
export class CurriculamModule { }
