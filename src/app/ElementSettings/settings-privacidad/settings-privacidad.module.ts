import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsPrivacidadPageRoutingModule } from './settings-privacidad-routing.module';

import { SettingsPrivacidadPage } from './settings-privacidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsPrivacidadPageRoutingModule
  ],
  declarations: [SettingsPrivacidadPage]
})
export class SettingsPrivacidadPageModule {}
