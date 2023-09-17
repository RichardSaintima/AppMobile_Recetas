import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetlistPageRoutingModule } from './recetlist-routing.module';

import { RecetlistPage } from './recetlist.page';

import { SharedModule } from '../../components/components.module';

import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetlistPageRoutingModule,
    SharedModule,
    MatPaginatorModule
  ],
  declarations: [RecetlistPage]
})
export class RecetlistPageModule {}
