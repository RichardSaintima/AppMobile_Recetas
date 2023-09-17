import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-settings-privacidad',
  templateUrl: './settings-privacidad.page.html',
  styleUrls: ['./settings-privacidad.page.scss'],
})
export class SettingsPrivacidadPage implements OnInit {

  constructor(private alertController: AlertController) {}

  ngOnInit() {}

  async changePassword() {
    const alert = await this.alertController.create({
      header: 'Cambiar Contraseña',
      inputs: [
        {
          name: 'currentPassword',
          type: 'password',
          placeholder: 'Contraseña Actual'
        },
        {
          name: 'newPassword',
          type: 'password',
          placeholder: 'Nueva Contraseña'
        }
      ],
      buttons: [
        'Cancelar',
        {
          text: 'Cambiar',
          handler: (data) => {

            const currentPassword = data.currentPassword;
            const newPassword = data.newPassword;
          }
        }
      ]
    });

    await alert.present();
  }

  async deleteAccount() {
    const alert = await this.alertController.create({
      header: 'Borrar Cuenta',
      message: '¿Estás seguro de que deseas borrar tu cuenta? Esta acción no se puede deshacer.',
      buttons: [
        'Cancelar',
        {
          text: 'Borrar',
          handler: () => {
            
          }
        }
      ]
    });

    await alert.present();
  }

}
