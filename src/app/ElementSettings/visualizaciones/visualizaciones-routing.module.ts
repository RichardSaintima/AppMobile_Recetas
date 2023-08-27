import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizacionesPage } from './visualizaciones.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizacionesPageRoutingModule {}
