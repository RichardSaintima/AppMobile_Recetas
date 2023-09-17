import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recetinset',
  templateUrl: './recetinset.page.html',
  styleUrls: ['./recetinset.page.scss'],
})
export class RecetinsetPage implements OnInit {

  // Variables para almacenar los datos del formulario
  recipeTitle: string | undefined;
  recipeDescription: string | undefined;

  descripcion: string = ''; 
  imagenes: File[] = []; 
  videoSeleccionado: File | undefined;

  constructor() {}

  handleImageUpload(event: any) {
    // Obtén todas las imágenes seleccionadas en el evento
    const selectedImages = event.target.files;
    
    // Recorre las imágenes seleccionadas y agrégalas al arreglo "imagenes"
    for (let i = 0; i < selectedImages.length; i++) {
      this.imagenes.push(selectedImages[i]);
    }
    
    // Ahora "imagenes" contiene todas las imágenes seleccionadas
    console.log(this.imagenes);
  }
  
    getImagenUrl(imagen: File): any {
      return URL.createObjectURL(imagen);
    }
  


    handleVideoUpload(event: any) {
      this.videoSeleccionado = event.target.files[0];
    }
  getVideoUrl(video: File): any {
    return URL.createObjectURL(video);
  }
  

  submitForm() {
    // Aquí puedes enviar los datos del formulario, incluidas las imágenes y el video, al servidor
  }

  ngOnInit() {
  }

}
