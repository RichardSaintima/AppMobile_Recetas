import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsCuentaPageRoutingModule } from './settings-cuenta-routing.module';

import { SettingsCuentaPage } from './settings-cuenta.page';
import { SharedModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsCuentaPageRoutingModule,
    SharedModule,
  ],
  declarations: [SettingsCuentaPage]
})
export class SettingsCuentaPageModule {}
