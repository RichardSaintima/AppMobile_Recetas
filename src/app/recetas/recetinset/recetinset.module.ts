import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetinsetPageRoutingModule } from './recetinset-routing.module';

import { RecetinsetPage } from './recetinset.page';
import { SharedModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RecetinsetPageRoutingModule
  ],
  declarations: [RecetinsetPage]
})
export class RecetinsetPageModule {}
