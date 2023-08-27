import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  navigateTo(page: string) {
    switch (page) {
      case 'settings-general':
        this.router.navigate(['/settings-general']);
        break;
      case 'settings-cuenta':
        this.router.navigate(['/settings-cuenta']);
        break;
      case 'settings-privacidad':
        this.router.navigate(['/settings-privacidad']);
        break;
      case 'visualizaciones':
        this.router.navigate(['/visualizaciones']);
        break;
      case 'centro-ayuda':
        this.router.navigate(['/centro-ayuda']);
        break;
      case 'terminos-usos':
        this.router.navigate(['/terminos-usos']);
        break;
      case 'politica-privacidad':
        this.router.navigate(['/politica-privacidad']);
        break;
      default:
        break;
    }
  }
}
