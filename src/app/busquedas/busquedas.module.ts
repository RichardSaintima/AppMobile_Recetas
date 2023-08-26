import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusquedasPageRoutingModule } from './busquedas-routing.module';

import { BusquedasPage } from './busquedas.page';

import { SharedModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusquedasPageRoutingModule,
    SharedModule,
  ],
  declarations: [BusquedasPage],
})
export class BusquedasPageModule {}
