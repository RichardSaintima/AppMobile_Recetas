import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BasesdatosService } from './../../services/basesdatos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage  {
  sexo: string = '';
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  password: string = '';
  repeatPassword: string = '';

  formularioValido() {
    return (
      this.nombre !== '' &&
      this.apellido !== '' &&
      this.email !== '' &&
      this.password !== '' &&
      this.repeatPassword !== ''
    );
  }
  

  constructor(
    private basesdatosService: BasesdatosService,
    private router: Router,
    private toastController: ToastController
  ) {
    this.basesdatosService.crearBD().then(() => {
      console.log('Base de datos inicializada');
    })
  }

  registrarUsuario() {
    if (this.nombre && this.apellido && this.email && this.password) {
      if (this.password !== this.repeatPassword) {
        this.mostrarError('Las contraseñas no coinciden.');
        return; 
      }
      this.basesdatosService.addUsuarios(
        this.nombre,
        this.apellido,
        this.sexo,
        this.email,
        this.password
      ).then((agregado) => {
        if (agregado) {
          this.mostrarMensaje('Registro exitoso.');
          this.router.navigate(['/login']);
        } else {
          this.mostrarError('Error al registrar usuario.');
        }
      });
    } else {
      this.mostrarError('Por favor, complete todos los campos.');
    }
  }
  

  private async mostrarError(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000,
      position: 'top',
      color:'danger'
    });
    toast.present();
  }

  private async mostrarMensaje(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000,
      position: 'top',
      color: 'success',
    });
    toast.present();
  }
}
