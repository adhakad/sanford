import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SafetyHigieneComponent } from './safety-higiene.component';

const routes: Routes = [{ path: '', component: SafetyHigieneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SafetyHigieneRoutingModule { }
