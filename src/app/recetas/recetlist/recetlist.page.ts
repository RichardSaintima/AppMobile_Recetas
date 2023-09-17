import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recetlist',
  templateUrl: './recetlist.page.html',
  styleUrls: ['./recetlist.page.scss'],
})
export class RecetlistPage implements OnInit {

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
      case 'recet-categorie':
        this.router.navigate(['/recet-categorie']);
        break;
      case 'recetinset':
        this.router.navigate(['/recetinset']);
        break;
      case 'recetdetail':
        this.router.navigate(['/recetdetail']);
        break;
      case 'recetlist':
        this.router.navigate(['/recetlist']);
        break;
      case 'favoty-list':
        this.router.navigate(['/favoty-list']);
        break;
      case 'singup':
        this.router.navigate(['/singup']);
        break;
      case 'login':
        this.router.navigate(['/login']);
        break;
      case 'settings':
        this.router.navigate(['/settings']);
        break;
      
      case 'logout':
        this.router.navigate(['/logout']);
        break;
      
      case 'recet-update':
        this.router.navigate(['/recet-update']);
        break;
      
      default:
        break;
    }
  }

}
