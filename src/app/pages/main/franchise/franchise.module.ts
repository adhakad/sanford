import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FranchiseRoutingModule } from './franchise-routing.module';
import { FranchiseComponent } from './franchise.component';
import { MainSharedModule } from '../main-shared/main-shared.module';


@NgModule({
  declarations: [
    FranchiseComponent
  ],
  imports: [
    CommonModule,
    FranchiseRoutingModule,
    MainSharedModule
  ]
})
export class FranchiseModule { }
