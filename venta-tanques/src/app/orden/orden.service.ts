import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Orden } from './orden';
import { Venta } from '../venta/venta';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  private apiURLV = "http://localhost:8000/api/ordenVenta/";
  private apiURLS = "http://localhost:8000/api/ordenSalida/";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Orden[]> {
   return this.httpClient.get<Orden[]>(this.apiURLV)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 createOrdenVenta(orden): Observable<Orden> {
   return this.httpClient.post<Orden>(this.apiURLV, JSON.stringify(orden), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 
 createOrdenSalida(orden): Observable<Orden> {
  return this.httpClient.post<Orden>(this.apiURLS, JSON.stringify(orden), this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )
}




findOrdenVenta(id): Observable<Venta> {
  return this.httpClient.get<Venta>(this.apiURLV + "detalle/" + id)
  .pipe(
    catchError(this.errorHandler)
  )
}


firmarSolicitaOrdenVenta(id): Observable<Venta> {
  return this.httpClient.get<Venta>(this.apiURLV + "firmarSolicitaOrdenVenta/" + id)
  .pipe(
    catchError(this.errorHandler)
  )
}

firmarAutorizaOrdenVenta(id): Observable<Venta> {
  return this.httpClient.get<Venta>(this.apiURLV + "firmarAutorizaOrdenVenta/" + id)
  .pipe(
    catchError(this.errorHandler)
  )
}

firmarSolicitaOrdenSalida(id): Observable<Venta> {
  return this.httpClient.get<Venta>(this.apiURLS + "firmarSolicitaOrdenSalida/" + id)
  .pipe(
    catchError(this.errorHandler)
  )
}

firmarAutorizaOrdenSalida(id): Observable<Venta> {
  return this.httpClient.get<Venta>(this.apiURLS + "firmarAutorizaOrdenSalida/" + id)
  .pipe(
    catchError(this.errorHandler)
  )
}



findOrdenSalida(id): Observable<Venta> {
  return this.httpClient.get<Venta>(this.apiURLS + "detalle/" + id)
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
