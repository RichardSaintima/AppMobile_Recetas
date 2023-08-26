import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetCategoriePage } from './recet-categorie.page';

const routes: Routes = [
  {
    path: '',
    component: RecetCategoriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetCategoriePageRoutingModule {}
