import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.scss'],
})
export class FooterComponentComponent  implements OnInit {

  constructor(
    private router: Router,
    private alertController: AlertController) {}

  async abrirOpciones() {
    const alert = await this.alertController.create({
      header: 'Elija Opcion',
      buttons: [
        {
          text: 'Agregar Contenido',
          handler: () => {
            this.router.navigate(['/recetinset']);
          }
        },
        {
          text: 'Mis Contenidos',
          handler: () => {
            this.router.navigate(['/recetlist']);
          }
        },
        {
          text: 'Cancelar',
          handler: () => {
          }
        }
      ]
    });
    await alert.present();
  }


  ngOnInit() {}
  navigateTo(page: string) {
    switch (page) {
      case 'home':
        this.router.navigate(['/home']);
        break;
      case 'perfil':
        this.router.navigate(['/perfil']);
        break;
      case 'about-us':
        this.router.navigate(['/about-us']);
        break;
        case 'busquedas':
          this.router.navigate(['/busquedas']);
          break;
        case 'settings':
          this.router.navigate(['/settings']);
          break;
        case 'ayuda':
          this.router.navigate(['/ayuda']);
          break;
        case 'recetlist':
          this.router.navigate(['/recetlist']);
          break;
      default:
        break;
    }
  }

  isActionSheetOpen = false;
  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Share',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  setOpen(isOpen: boolean) {
    this.isActionSheetOpen = isOpen;
  }
}
