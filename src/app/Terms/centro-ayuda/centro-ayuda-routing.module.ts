import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentroAyudaPage } from './centro-ayuda.page';

const routes: Routes = [
  {
    path: '',
    component: CentroAyudaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentroAyudaPageRoutingModule {}
