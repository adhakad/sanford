import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculamComponent } from './curriculam.component';

const routes: Routes = [
  { path: '', component: CurriculamComponent }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurriculamRoutingModule { }
