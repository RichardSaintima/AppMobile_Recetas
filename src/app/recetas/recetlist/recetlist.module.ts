import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetlistPageRoutingModule } from './recetlist-routing.module';

import { RecetlistPage } from './recetlist.page';

import { SharedModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetlistPageRoutingModule,
    SharedModule,
  ],
  declarations: [RecetlistPage]
})
export class RecetlistPageModule {}
