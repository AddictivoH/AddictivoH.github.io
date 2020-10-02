import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipmentRoutingModule } from './equipment-routing.module';
import { GemComponent } from './gem/gem.component';
import { TrinketComponent } from './trinket/trinket.component';
import { EquipmentComponent } from './equipment.component';


@NgModule({
  declarations: [GemComponent, TrinketComponent, EquipmentComponent],
  imports: [
    CommonModule,
    EquipmentRoutingModule
  ]
})
export class EquipmentModule { }
