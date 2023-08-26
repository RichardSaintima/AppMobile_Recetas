import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetlistPage } from './recetlist.page';

const routes: Routes = [
  {
    path: '',
    component: RecetlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetlistPageRoutingModule {}
