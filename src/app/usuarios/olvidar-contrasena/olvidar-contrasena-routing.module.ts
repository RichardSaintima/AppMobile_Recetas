import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlvidarContrasenaPage } from './olvidar-contrasena.page';

const routes: Routes = [
  {
    path: '',
    component: OlvidarContrasenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlvidarContrasenaPageRoutingModule {}
