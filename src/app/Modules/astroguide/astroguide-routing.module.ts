import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AstroguideComponent } from './astroguide/astroguide.component';
import { AstroComponent } from './astro/astro.component';

const routes: Routes = [
  { path: '', component: AstroguideComponent },
  { path: ':id', component: AstroComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AstroguideRoutingModule { }
