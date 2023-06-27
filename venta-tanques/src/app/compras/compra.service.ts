import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Compra } from './compra';
import { Producto } from '../productos/producto';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  private apiURL = "http://localhost:8000/api/compras/";
  private apiURLStock = "http://localhost:8000/api/compras/stock";
  private apiURLStockDisponible = "http://localhost:8000/api/compras/stockdisponible/";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Compra[]> {
   return this.httpClient.get<Compra[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 getAllStock(): Observable<Compra[]> {
  return this.httpClient.get<Compra[]>(this.apiURLStock)
  .pipe(
    catchError(this.errorHandler)
  )
}

 

 create(compra): Observable<Compra> {
   return this.httpClient.post<Compra>(this.apiURL, JSON.stringify(compra), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id): Observable<Compra> {
   return this.httpClient.get<Compra>(this.apiURL + id)
   .pipe(
     catchError(this.errorHandler)
   )
 }


 //stock disponible de la venta
 getStockDisponible(id): Observable<Compra> {
  return this.httpClient.get<Compra>(this.apiURLStockDisponible + id)
  .pipe(
    catchError(this.errorHandler)
  )
}

obtenerProducto(id): Observable<Compra> {
  return this.httpClient.get<Compra>(this.apiURL + "obtenerProducto/" + id)
  .pipe(
    catchError(this.errorHandler)
  )
}

 update(id, compra): Observable<Compra> {
   return this.httpClient.put<Compra>(this.apiURL + id, JSON.stringify(compra), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id){
   return this.httpClient.delete<Compra>(this.apiURL + id, this.httpOptions)
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
