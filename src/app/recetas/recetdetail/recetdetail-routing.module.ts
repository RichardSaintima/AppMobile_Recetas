import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetdetailPage } from './recetdetail.page';

const routes: Routes = [
  {
    path: '',
    component: RecetdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetdetailPageRoutingModule {}
