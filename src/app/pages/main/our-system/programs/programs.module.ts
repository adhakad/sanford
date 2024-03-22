import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramsRoutingModule } from './programs-routing.module';
import { ProgramsComponent } from './programs.component';
import { MainSharedModule } from '../../main-shared/main-shared.module';


@NgModule({
  declarations: [
    ProgramsComponent
  ],
  imports: [
    CommonModule,
    ProgramsRoutingModule,
    MainSharedModule
  ]
})
export class ProgramsModule { }
