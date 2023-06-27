import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private apiURL = "http://localhost:8000/api/usuarios/";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Usuario[]> {
   return this.httpClient.get<Usuario[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 create(usuario): Observable<Usuario> {
  return this.httpClient.post<Usuario>(this.apiURL, JSON.stringify(usuario), this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )
}

 errorHandler(error) {
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    errorMessage = error.error.message;
  } else {
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  return throwError(errorMessage);
}

}
