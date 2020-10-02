import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';

import { TitanRoutingModule } from './titan-routing.module';
import { TitanComponent } from './titan.component';
import { FuegoComponent } from './fuego/fuego.component';
import { AguaComponent } from './agua/agua.component';
import { MaderaComponent } from './madera/madera.component';
import { LuzComponent } from './luz/luz.component';
import { TenebrosoComponent } from './tenebroso/tenebroso.component';


@NgModule({
  declarations: [TitanComponent, FuegoComponent, AguaComponent, MaderaComponent, LuzComponent, TenebrosoComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatChipsModule,
    TitanRoutingModule
  ]
})
export class TitanModule { }
