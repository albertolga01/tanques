import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Inventario } from './inventario';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  private apiURL = "http://localhost:8000/api/compras/inventario";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Inventario[]> {
   return this.httpClient.get<Inventario[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 inventario(): Observable<Inventario[]> {
  return this.httpClient.get<Inventario[]>(this.apiURL)
  .pipe(
    catchError(this.errorHandler)
  )
}

 create(inventario): Observable<Inventario> {
   return this.httpClient.post<Inventario>(this.apiURL, JSON.stringify(inventario), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id): Observable<Inventario> {
   return this.httpClient.get<Inventario>(this.apiURL + id)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 update(id, inventario): Observable<Inventario> {
   return this.httpClient.put<Inventario>(this.apiURL + id, JSON.stringify(inventario), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id){
   return this.httpClient.delete<Inventario>(this.apiURL + id, this.httpOptions)
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
