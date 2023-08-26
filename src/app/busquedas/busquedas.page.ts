import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-busquedas',
  templateUrl: './busquedas.page.html',
  styleUrls: ['./busquedas.page.scss'],
})
export class BusquedasPage implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);

    this.showResults = true;
  }  

}
