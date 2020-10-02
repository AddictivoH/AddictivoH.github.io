import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'MSl-Data-Nest', redirectTo: '/home', pathMatch: 'full' },
  { path: 'MSl-Data-Nest/home', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'astroguide', loadChildren: () => import('./Modules/astroguide/astroguide.module').then(m => m.AstroguideModule) },
  { path: 'MSL-Data-Nest/astroguide', redirectTo: '/astroguide', pathMatch: 'full' },
  { path: 'fusion', loadChildren: () => import('./Modules/fusion/fusion.module').then(m => m.FusionModule) },
  { path: 'equipment', loadChildren: () => import('./Modules/equipment/equipment.module').then(m => m.EquipmentModule) },
  { path: 'guias/titan', loadChildren: () => import('./Modules/titan/titan.module').then(m => m.TitanModule) },
  { path: 'guias/colossus', loadChildren: () => import('./Modules/colossus/colossus.module').then(m => m.ColossusModule) },
  { path: 'guias', loadChildren: () => import('./Modules/guias/guias.module').then(m => m.GuiasModule) }
  // { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
