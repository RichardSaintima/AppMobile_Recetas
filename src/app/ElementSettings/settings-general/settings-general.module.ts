import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsGeneralPageRoutingModule } from './settings-general-routing.module';

import { SettingsGeneralPage } from './settings-general.page';
import { SharedModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsGeneralPageRoutingModule,
    SharedModule,
  ],
  declarations: [SettingsGeneralPage]
})
export class SettingsGeneralPageModule {}
