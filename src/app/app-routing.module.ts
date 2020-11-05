import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy,  PreloadAllModules } from '@angular/router';

import { CommonModule } from '@angular/common';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'astroguide', loadChildren: () => import('./Modules/astroguide/astroguide.module').then(m => m.AstroguideModule) },
  { path: 'tools/fusion', loadChildren: () => import('./Modules/fusion/fusion.module').then(m => m.FusionModule) },
  { path: 'tools/equipment', loadChildren: () => import('./Modules/equipment/equipment.module').then(m => m.EquipmentModule) },
  { path: 'academia/titan', loadChildren: () => import('./Modules/titan/titan.module').then(m => m.TitanModule) },
  { path: 'academia/colossus', loadChildren: () => import('./Modules/colossus/colossus.module').then(m => m.ColossusModule) },
  { path: 'academia', loadChildren: () => import('./Modules/guias/guias.module').then(m => m.GuiasModule) },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules} ), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
