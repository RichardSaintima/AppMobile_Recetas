import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavotyListPage } from './favoty-list.page';

const routes: Routes = [
  {
    path: '',
    component: FavotyListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavotyListPageRoutingModule {}
