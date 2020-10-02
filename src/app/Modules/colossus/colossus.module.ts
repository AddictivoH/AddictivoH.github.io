import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColossusRoutingModule } from './colossus-routing.module';
import { ColossusComponent } from './colossus.component';


@NgModule({
  declarations: [ColossusComponent],
  imports: [
    CommonModule,
    ColossusRoutingModule
  ]
})
export class ColossusModule { }
