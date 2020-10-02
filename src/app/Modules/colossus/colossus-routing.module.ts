import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColossusComponent } from './colossus.component';

const routes: Routes = [
  { path: '', component: ColossusComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColossusRoutingModule { }
