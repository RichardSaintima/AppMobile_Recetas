import { Component, OnInit } from '@angular/core';
import { BasesdatosService } from './../../services/basesdatos.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = ''; 

  constructor(
    private basesdatosService: BasesdatosService,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  async onSubmit() {
    if (!this.email || !this.password) {
      this.mostrarMensajeError('Por favor, complete todos los campos.');
      return;
    }

    const loggedIn = await this.basesdatosService.verificarInicioSesion(this.email, this.password);

    if (loggedIn) {
      this.router.navigate(['/home']);
      this.mostrarMensajeExito('Inicio de sesión exitoso.');
    } else {
      this.mostrarMensajeError('Credenciales incorrectas. Verifique su correo electrónico y contraseña.');
    }
  }

  async mostrarMensajeExito(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      color: 'success',
      position: "top",
    });
    toast.present();
  }

  async mostrarMensajeError(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      color: 'danger',
      position: "top",
    });
    toast.present();
  }
}
