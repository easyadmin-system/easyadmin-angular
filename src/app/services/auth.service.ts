import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';

import { IUser } from '@interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.apiServerUrl;

  constructor(private http: HttpClient) { }

  getUserDetail(): IUser {
    return {
        id: 1,
        username: 'janelznic',
        firstName: 'Jan',
        lastName: 'Elznic'
    };
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
