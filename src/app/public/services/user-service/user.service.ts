import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { MatSnackBar,  MatSnackBarConfig} from "@angular/material/snack-bar";
import {LoginResponseI, UserI} from "../../public.interfaces";
import {catchError, Observable, tap, throwError} from "rxjs";
import {EASYADMIN_UI_ACCESS_TOKEN} from "../../../app.module";
import {JwtHelperService} from "@auth0/angular-jwt";
import { environment } from '../../../../environments/environment';

export const snackBarConfig: MatSnackBarConfig = {
  duration: 10000,
  horizontalPosition: 'right',
  verticalPosition: 'top'
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // apiUrl = environment.apiServerUrl;
  apiUrl = '/api';

  constructor(
    private httpClient: HttpClient,
    private snackbar: MatSnackBar,
    private jwtService: JwtHelperService
  ) { }

  login(user: UserI): Observable<LoginResponseI> {
    return this.httpClient.post<LoginResponseI>(`${this.apiUrl}/users/login`, user).pipe(
      tap((res: LoginResponseI) => localStorage.setItem(EASYADMIN_UI_ACCESS_TOKEN, res.access_token)),
      tap(() => this.snackbar.open('Login Successfull', 'Close', snackBarConfig)),
      catchError(e => {
        this.snackbar.open(`${e.error.message}`, 'Close', snackBarConfig);
        return throwError(e);
      })
    )
  }

  register(user: UserI): Observable<UserI> {
    return this.httpClient.post<UserI>(`${this.apiUrl}/users/`, user).pipe(
     tap((createdUser: UserI) => this.snackbar.open(`User ${createdUser.username} was successfully registered`, 'Close', snackBarConfig)),
     catchError(e => {
       this.snackbar.open(`User could not be created: ${e.error.message}`, 'Close', snackBarConfig);
       return throwError(e);
     })
    )
  }

  getUserList() {
    return this.httpClient.get<UserI[]>(`${this.apiUrl}/users/`).pipe(
     tap(),
     catchError(e => {
       this.snackbar.open(`Cannot load users: ${e.error.message}`, 'Close', snackBarConfig);
       return throwError(e);
     })
    )
  }

  getUserById(id: string) {
    return this.httpClient.get<UserI>(`${this.apiUrl}/users/id/${id}`).pipe(
     tap(),
     catchError(e => {
       this.snackbar.open(`Cannot load user: ${e.error.message}`, 'Close', snackBarConfig);
       return throwError(e);
     })
    )
  }

  getUserByName(username: string) {
    return this.httpClient.get<UserI>(`${this.apiUrl}/users/${username}`).pipe(
     tap(),
     catchError(e => {
       this.snackbar.open(`Cannot load user: ${e.error.message}`, 'Close', snackBarConfig);
       return throwError(e);
     })
    )
  }

  createUser(user: UserI): Observable<UserI> {
    return this.httpClient.post<UserI>(`${this.apiUrl}/users/`, user).pipe(
     tap((createdUser: UserI) => this.snackbar.open(`User ${createdUser.username} was successfully created`, 'Close', snackBarConfig)),
     catchError(e => {
       this.snackbar.open(`User could not be created: ${e.error.message}`, 'Close', snackBarConfig);
       return throwError(e);
     })
    )
  }

  updateUser(user: UserI) {
    return this.httpClient.put<UserI>(`${this.apiUrl}/users/`, user).pipe(
     tap((updatedUser: UserI) => this.snackbar.open(`User ${updatedUser.username} details successfully updated`, 'Close', snackBarConfig)),
     catchError(e => {
       this.snackbar.open(`User could not update user: ${e.error.message}`, 'Close', snackBarConfig);
       return throwError(e);
     })
    )
  }

  deleteUserById(id: string) {
    return this.httpClient.delete<any>(`${this.apiUrl}/users/${id}`).pipe(
     tap(() => this.snackbar.open(`User successfully removed`, 'Close', snackBarConfig)),
     catchError(e => {
       this.snackbar.open(`User could not be removed: ${e.error.message}`, 'Close', snackBarConfig);
       return throwError(e);
     })
    )
  }

  getLoggedInUser() {
    const decodedToken = this.jwtService.decodeToken();
    return decodedToken.user;
  }
}
