import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavotyListPageRoutingModule } from './favoty-list-routing.module';

import { FavotyListPage } from './favoty-list.page';

import { SharedModule } from '../../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavotyListPageRoutingModule,
    SharedModule,
  ],
  declarations: [FavotyListPage]
})
export class FavotyListPageModule {}
