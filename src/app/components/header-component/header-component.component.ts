import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})

export class HeaderComponentComponent  implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {}


  navigateTo(page: string) {
    switch (page) {
      case 'busquedas':
        this.router.navigate(['/busquedas']);
        break;      
      default:
        break;
    }
  }

}
