import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class BasesdatosService {
  private db: SQLiteObject | null = null;

  constructor(
    private sqlite: SQLite,
    private platform: Platform,
    private toastController: ToastController
  ) {}

  async crearBD(): Promise<SQLiteObject | null> {
    if (this.db) {
      return this.db;
    }

    try {
      await this.platform.ready();
      this.db = await this.sqlite.create({
        name: 'recetas_app.db',
        location: 'default',
      });

      await this.db.executeSql(`
        CREATE TABLE IF NOT EXISTS usuarios (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nombre VARCHAR(40) NOT NULL,
          sexo VARCHAR(15),
          apellido VARCHAR(40) NOT NULL,
          email VARCHAR(40) NOT NULL,
          password VARCHAR(40) NOT NULL
        )
      `, []);

      return this.db;
    } catch (error) {
      this.presentToast('Error al inicializar la base de datos: ' + error);
      return null;
    }

  }

  async addUsuarios(nombre: string, apellido: string, sexo: string, email: string, password: string): Promise<boolean> {
    try {
      const db = await this.crearBD();
      if (db) {
        const data = [nombre, apellido, sexo, email, password];
        await db.executeSql(
          'INSERT INTO usuarios (nombre, apellido, sexo, email, password) VALUES (?, ?, ?, ?, ?)',
          data
        );
        return true;
      } else {
        console.log ('La base de datos no está inicializada');
        return false; // 
      }
    } catch (error) {
      console.error('Error al ejecutar consulta SQL:', error);
      return false; 
    }
  }

  // async actualiza el usuario
  async updateUsuario(id: number, nombre: string, apellido: string, sexo: string, email: string, password: string): Promise<boolean> {
    try {
      const db = await this.crearBD();
      if (db) {
        const data = [nombre, apellido, sexo, email, password, id];
        await db.executeSql(
          'UPDATE usuarios SET nombre=?, apellido=?, sexo=?, email=?, password=? WHERE id=?',
          data
        );
        return true;
      } else {
        console.log ('La base de datos no está inicializada');
        return false; // 
      }
    } catch (error) {
      console.error('Error al ejecutar consulta SQL:', error);
      return false; 
    }
  }
  
  // async eliminar el usuario
  async deleteUsuario(id: number): Promise<boolean> {
    try {
      const db = await this.crearBD();
      if (db) {
        const data = [id];
        await db.executeSql(
          'DELETE FROM usuarios WHERE id=?',
          data
        );
        return true;
      } else {
        console.log ('La base de datos no está inicializada');
        return false; // 
      }
    } catch (error) {
      console.error('Error al ejecutar consulta SQL:', error);
      return false; 
    }
  }
  
  async verificarInicioSesion(email: string, password: string): Promise<boolean> {
    try {
      const db = await this.crearBD();
      if (db) {
        const query = 'SELECT * FROM usuarios WHERE email = ? AND password = ?';
        const data = [email, password];
        const result = await db.executeSql(query, data);

        if (result.rows.length > 0) {
          // Se encontró un usuario con las credenciales proporcionadas
          return true;
        }
      }
      return false; // No se encontró un usuario con las credenciales proporcionadas
    } catch (error) {
      console.error('Error al verificar el inicio de sesión:', error);
      return false; // Hubo un error al ejecutar la consulta SQL
    }
  }

  private async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
    });
    toast.present();
  }
}
