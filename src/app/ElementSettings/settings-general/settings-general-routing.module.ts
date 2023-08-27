import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsGeneralPage } from './settings-general.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsGeneralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsGeneralPageRoutingModule {}
