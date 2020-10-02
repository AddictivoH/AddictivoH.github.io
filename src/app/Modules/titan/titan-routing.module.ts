import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TitanComponent } from './titan.component';

const routes: Routes = [
  { path: '', component: TitanComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TitanRoutingModule { }
