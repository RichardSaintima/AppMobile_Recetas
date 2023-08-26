import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetdetailPageRoutingModule } from './recetdetail-routing.module';

import { RecetdetailPage } from './recetdetail.page';

import { SharedModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetdetailPageRoutingModule,
    SharedModule,
  ],
  declarations: [RecetdetailPage]
})
export class RecetdetailPageModule {}
