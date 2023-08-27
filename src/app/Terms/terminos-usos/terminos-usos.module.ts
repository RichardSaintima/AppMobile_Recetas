import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerminosUsosPageRoutingModule } from './terminos-usos-routing.module';

import { TerminosUsosPage } from './terminos-usos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerminosUsosPageRoutingModule
  ],
  declarations: [TerminosUsosPage]
})
export class TerminosUsosPageModule {}
