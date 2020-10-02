import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipmentComponent } from './equipment.component';
import { GemComponent } from './gem/gem.component';
import { TrinketComponent } from './trinket/trinket.component';

const routes: Routes = [
  { path: '', component: EquipmentComponent },
  { path: 'gem', component: GemComponent },
  { path: 'trinket', component: TrinketComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentRoutingModule { }
