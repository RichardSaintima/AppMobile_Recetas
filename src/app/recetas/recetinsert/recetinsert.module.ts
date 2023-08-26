import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetinsertPageRoutingModule } from './recetinsert-routing.module';

import { RecetinsertPage } from './recetinsert.page';

import { SharedModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetinsertPageRoutingModule,
    SharedModule,
  ],
  declarations: [RecetinsertPage]
})
export class RecetinsertPageModule {}
