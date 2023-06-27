import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiURL = "http://localhost:8000/api/login/";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }
 

  login(login): Observable<Login> {
    return this.httpClient.post<Login>(this.apiURL, JSON.stringify(login), this.httpOptions)
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
