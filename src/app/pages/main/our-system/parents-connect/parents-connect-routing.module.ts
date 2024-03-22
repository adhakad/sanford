import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentsConnectComponent } from './parents-connect.component';

const routes: Routes = [{ path: '', component: ParentsConnectComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentsConnectRoutingModule { }
