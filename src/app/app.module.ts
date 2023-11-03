import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { DashboardScreenComponent } from './screens/dashboard-screen/dashboard-screen.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistrationScreenComponent } from './screens/registration-screen/registration-screen.component';
import { SettingsScreenComponent } from './screens/settings-screen/settings-screen.component';
import { UserListScreenComponent } from './screens/user-list-screen/user-list-screen.component';
import { UserFormScreenComponent } from './screens/user-form-screen/user-form-screen.component';
import { UserEditScreenComponent } from './screens/user-edit-screen/user-edit-screen.component';
import { UserProfileScreenComponent } from './screens/user-profile-screen/user-profile-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardScreenComponent,
    LoginScreenComponent,
    RegistrationScreenComponent,
    SettingsScreenComponent,
    UserListScreenComponent,
    UserFormScreenComponent,
    UserEditScreenComponent,
    UserProfileScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
