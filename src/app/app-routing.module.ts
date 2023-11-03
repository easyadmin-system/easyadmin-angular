import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuardService } from './route-guard.service';

import { DashboardScreenComponent } from './screens/dashboard-screen/dashboard-screen.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistrationScreenComponent } from './screens/registration-screen/registration-screen.component';
import { SettingsScreenComponent } from './screens/settings-screen/settings-screen.component';
import { UserListScreenComponent } from './screens/user-list-screen/user-list-screen.component';
import { UserFormScreenComponent } from './screens/user-form-screen/user-form-screen.component';
import { UserEditScreenComponent } from './screens/user-edit-screen/user-edit-screen.component';
import { UserProfileScreenComponent } from './screens/user-profile-screen/user-profile-screen.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardScreenComponent, canActivate: [RouteGuardService] },
  { path: 'login', component: LoginScreenComponent, canActivate: [RouteGuardService] },
  { path: 'registration', component: RegistrationScreenComponent, canActivate: [RouteGuardService] },
  { path: 'settings', component: SettingsScreenComponent, canActivate: [RouteGuardService] },
  { path: 'users', component: UserListScreenComponent, canActivate: [RouteGuardService] },
  { path: 'users/new', component: UserFormScreenComponent, canActivate: [RouteGuardService] },
  { path: 'users/:id/edit', component: UserEditScreenComponent, canActivate: [RouteGuardService] },
  { path: 'users/:id', component: UserProfileScreenComponent, canActivate: [RouteGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
