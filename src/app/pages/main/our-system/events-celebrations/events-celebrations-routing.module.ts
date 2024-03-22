import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsCelebrationsComponent } from './events-celebrations.component';

const routes: Routes = [{ path: '', component: EventsCelebrationsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsCelebrationsRoutingModule { }
