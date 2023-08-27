import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsCuentaPage } from './settings-cuenta.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsCuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsCuentaPageRoutingModule {}
