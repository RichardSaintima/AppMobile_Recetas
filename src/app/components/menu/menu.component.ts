import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {
  public showResults = false;
  public data = [
    'Amsterdam',
    'Buenos Aires',
    'Cairo',
    'Geneva',
    'Hong Kong',
    'Istanbul',
    'London',
    'Madrid',
    'New York',
    'Panama City',
  ];
  public results = [...this.data];

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
      case 'recetinsert':
        this.router.navigate(['/recetinsert']);
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
      case 'registrar':
        this.router.navigate(['/registrar']);
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

      case 'ayuda':
        this.router.navigate(['/ayuda']);
        break;
      
      default:
        break;
    }
  }
  

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);

    this.showResults = true;
  }  
}
