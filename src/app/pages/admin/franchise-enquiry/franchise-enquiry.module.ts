import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FranchiseEnquiryRoutingModule } from './franchise-enquiry-routing.module';
import { FranchiseEnquiryComponent } from './franchise-enquiry.component';
import { AdminSharedModule } from '../admin-shared/admin-shared.module';


@NgModule({
  declarations: [
    FranchiseEnquiryComponent
  ],
  imports: [
    CommonModule,
    FranchiseEnquiryRoutingModule,
    AdminSharedModule
  ]
})
export class FranchiseEnquiryModule { }
