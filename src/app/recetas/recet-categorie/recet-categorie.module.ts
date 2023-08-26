import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetCategoriePageRoutingModule } from './recet-categorie-routing.module';

import { RecetCategoriePage } from './recet-categorie.page';
import { SharedModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetCategoriePageRoutingModule,
    SharedModule,
  ],
  declarations: [RecetCategoriePage]
})
export class RecetCategoriePageModule {}
