import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusquedasPage } from './busquedas.page';

const routes: Routes = [
  {
    path: '',
    component: BusquedasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusquedasPageRoutingModule {}
