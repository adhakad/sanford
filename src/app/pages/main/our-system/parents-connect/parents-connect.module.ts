import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentsConnectRoutingModule } from './parents-connect-routing.module';
import { ParentsConnectComponent } from './parents-connect.component';
import { MainSharedModule } from '../../main-shared/main-shared.module';


@NgModule({
  declarations: [
    ParentsConnectComponent
  ],
  imports: [
    CommonModule,
    ParentsConnectRoutingModule,
    MainSharedModule
  ]
})
export class ParentsConnectModule { }
