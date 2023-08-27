import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentroAyudaPageRoutingModule } from './centro-ayuda-routing.module';

import { CentroAyudaPage } from './centro-ayuda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentroAyudaPageRoutingModule
  ],
  declarations: [CentroAyudaPage]
})
export class CentroAyudaPageModule {}
