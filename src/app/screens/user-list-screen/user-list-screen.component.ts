import { Component, OnInit } from '@angular/core';
import { APIService } from '@services/api.service';
import { IUser } from '@interfaces/user.interface';

@Component({
  selector: 'app-user-list-screen',
  templateUrl: './user-list-screen.component.html',
  styleUrls: ['./user-list-screen.component.scss']
})
export class UserListScreenComponent implements OnInit {
  displayedColumns: string[] = ['username', 'firstName', 'lastName', 'id'];
  tableData: IUser[] = [];

  constructor(
    private apiService: APIService
  ) { }

  ngOnInit(): void {
    this.refreshTableData();
  }

  deleteUserById(id: string): void {
    if (window.confirm('Are you shure to remove this user?')) {
      this.apiService.deleteUserById(id).subscribe((res) => {
        this.refreshTableData();
        alert('User deleted!')
      });
    }
  }

  refreshTableData(): void {
    this.apiService.getUserList().subscribe((data: IUser[]) => {
      this.tableData = data;
    });
  };
}
