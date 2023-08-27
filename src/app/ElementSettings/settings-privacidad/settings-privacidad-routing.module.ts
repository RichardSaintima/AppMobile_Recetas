import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsPrivacidadPage } from './settings-privacidad.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsPrivacidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsPrivacidadPageRoutingModule {}
