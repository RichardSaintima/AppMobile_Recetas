import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.scss'],
})
export class FooterComponentComponent  implements OnInit {

  constructor(private router: Router) {}

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
        case 'ayuda':
          this.router.navigate(['/ayuda']);
          break;
      default:
        break;
    }
  }
}
