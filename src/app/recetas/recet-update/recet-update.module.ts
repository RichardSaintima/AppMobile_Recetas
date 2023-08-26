import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetUpdatePageRoutingModule } from './recet-update-routing.module';

import { RecetUpdatePage } from './recet-update.page';
import { SharedModule } from '../../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetUpdatePageRoutingModule,
    SharedModule,
  ],
  declarations: [RecetUpdatePage]
})
export class RecetUpdatePageModule {}
