import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from'@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  httpOptions = {
    headers: new HttpHeaders(
      {'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' :'*'
    })
  }
  // Se establece la base url del API a consumir
  apiURL = 'https://jsonplaceholder.typicode.com';

  constructor(private http:HttpClient) { 
  
  }

  // Obtiene todos los posts
  getPosts(): Observable<any>{
    return this.http.get(this.apiURL + '/posts')
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }
  //Obtener un post por id
  getPost(id): Observable<any>{
    return this.http.get(this.apiURL + '/posts/' + id)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }
  //Crear un post
  createPost(post): Observable<any>{
    return this.http.post(this.apiURL + '/posts', JSON.stringify(post), this.httpOptions)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }
  //Actualizar un post
  updatePost(id, post): Observable<any>{
    return this.http.put(this.apiURL + '/posts/' + id, JSON.stringify(post), this.httpOptions)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
  //Eliminar un post
  deletePost(id): Observable<any>{
    return this.http.delete(this.apiURL + '/posts/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  //Manejo de errores
  handleError(error: HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      //Error del lado del cliente
      errorMessage = error.error.message;
    }else{
      //Error del lado del servidor
      errorMessage = `Código de error: ${error.status}, ` + `mensaje: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  
}
