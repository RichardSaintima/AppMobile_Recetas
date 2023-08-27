import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizacionesPageRoutingModule } from './visualizaciones-routing.module';

import { VisualizacionesPage } from './visualizaciones.page';
import { SharedModule } from '../../components/components.module';

import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule, 
    VisualizacionesPageRoutingModule,
    SharedModule,
  ],
  declarations: [VisualizacionesPage]
})
export class VisualizacionesPageModule {}
