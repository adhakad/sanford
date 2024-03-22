import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsCelebrationsRoutingModule } from './events-celebrations-routing.module';
import { EventsCelebrationsComponent } from './events-celebrations.component';
import { MainSharedModule } from '../../main-shared/main-shared.module';


@NgModule({
  declarations: [
    EventsCelebrationsComponent
  ],
  imports: [
    CommonModule,
    EventsCelebrationsRoutingModule,
    MainSharedModule
  ]
})
export class EventsCelebrationsModule { }
