import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FranchiseEnquiryComponent } from './franchise-enquiry.component';

const routes: Routes = [
  { path: '', component: FranchiseEnquiryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FranchiseEnquiryRoutingModule { }
