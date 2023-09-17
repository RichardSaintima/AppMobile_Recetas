import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetinsetPage } from './recetinset.page';

const routes: Routes = [
  {
    path: '',
    component: RecetinsetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetinsetPageRoutingModule {}
