import { Component, ViewChild } from '@angular/core';
// import { APIService } from '@services/api.service';
import { AuthService } from '@services/auth.service';
import { IUser } from '@interfaces/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: IUser = {
    id: '',
    username: '',
    firstName: '',
    lastName: ''
  };

  constructor(
    // private apiService: APIService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.user = this.authService.getUserDetail();
  }

  // openModal(content: any) {
  //   this.modalService.open(content, { size: 'lg' }).result.then((result) => {

  //   }, (reason) => {
  //     // clean up search results
  //   });
  // }

  // getNotifications() {
  //   this.apiService.getNotifications().subscribe((data: any) => {
  //     this.ntf = data;
  //   });
  // }

  logout() {
    // logout action
  }
}
