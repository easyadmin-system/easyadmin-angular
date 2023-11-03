import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';

import { IUser } from '@interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  apiUrl = environment.apiServerUrl;

  constructor(private http: HttpClient) { }

  // Users
  getUserList() {
    return this.http.get<IUser[]>(`${this.apiUrl}/users/`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getUserById(id: string) {
    return this.http.get<IUser>(`${this.apiUrl}/users/id/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getUserByName(username: string) {
    return this.http.get<IUser>(`${this.apiUrl}/users/${username}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  createUser(elm: IUser) {
    return this.http.post<IUser>(`${this.apiUrl}/users/`, elm)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateUser(elm: IUser) {
    return this.http.put<IUser>(`${this.apiUrl}/users/id/${elm.id}`, elm)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteUserById(id: string) {
    return this.http.delete<any>(`${this.apiUrl}/users/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.log(error);
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error?.title}`);
    }

    return throwError('Something bad happened; please try again later.');
  }
}
