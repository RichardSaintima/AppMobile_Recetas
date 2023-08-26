import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetinsertPage } from './recetinsert.page';

const routes: Routes = [
  {
    path: '',
    component: RecetinsertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetinsertPageRoutingModule {}
