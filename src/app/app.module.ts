import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AstroguideModule } from './Modules/astroguide/astroguide.module';
import { TitanModule } from './Modules/titan/titan.module';
import { ColossusModule } from './Modules/colossus/colossus.module';
import { FusionModule } from './Modules/fusion/fusion.module';
import { EquipmentModule } from './Modules/equipment/equipment.module';
import { GuiasModule } from './Modules/guias/guias.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AstroguideModule,
    TitanModule,
    ColossusModule,
    FusionModule,
    EquipmentModule,
    GuiasModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
