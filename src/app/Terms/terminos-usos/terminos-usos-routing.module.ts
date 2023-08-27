import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerminosUsosPage } from './terminos-usos.page';

const routes: Routes = [
  {
    path: '',
    component: TerminosUsosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerminosUsosPageRoutingModule {}
