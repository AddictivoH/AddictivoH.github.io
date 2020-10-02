import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';

import { FusionRoutingModule } from './fusion-routing.module';
import { ChartComponent } from './chart/chart.component';
import { ShivaLComponent } from './chart/shiva-l/shiva-l.component';
import { HohenheimLComponent } from './chart/hohenheim-l/hohenheim-l.component';
import { BoltwingLComponent } from './chart/boltwing-l/boltwing-l.component';
import { SiegfriedLComponent } from './chart/siegfried-l/siegfried-l.component';
import { BeatelDComponent } from './chart/beatel-d/beatel-d.component';
import { MerlinDComponent } from './chart/merlin-d/merlin-d.component';
import { EmperatoDComponent } from './chart/emperato-d/emperato-d.component';

@NgModule({
  declarations: [
    ChartComponent,
    ShivaLComponent,
    HohenheimLComponent,
    BoltwingLComponent,
    SiegfriedLComponent,
    BeatelDComponent,
    MerlinDComponent,
    EmperatoDComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatChipsModule,
    FusionRoutingModule
  ]
})
export class FusionModule { }
