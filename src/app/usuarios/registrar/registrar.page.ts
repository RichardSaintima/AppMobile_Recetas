import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular'; 
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})

export class RegistrarPage implements OnInit {

  sexo = "masculino";

  constructor(
  ) { }
//funcion para registrarse


  ngOnInit() {
  }

}
