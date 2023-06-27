import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Venta } from './venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  private apiURL = "http://localhost:8000/api/venta/";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  
  getAll(): Observable<Venta[]> {
    return this.httpClient.get<Venta[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    )
  }

 
 
  create(venta): Observable<Venta> {
    return this.httpClient.post<Venta>(this.apiURL, JSON.stringify(venta), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
 
  find(id): Observable<Venta> {
    return this.httpClient.get<Venta>(this.apiURL + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  
 
  update(id, venta): Observable<Venta> {
    return this.httpClient.put<Venta>(this.apiURL + id, JSON.stringify(venta), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
 
  delete(id){
    return this.httpClient.delete<Venta>(this.apiURL + id, this.httpOptions)
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
