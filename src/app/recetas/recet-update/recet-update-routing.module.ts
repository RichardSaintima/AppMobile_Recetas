import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetUpdatePage } from './recet-update.page';

const routes: Routes = [
  {
    path: '',
    component: RecetUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetUpdatePageRoutingModule {}
