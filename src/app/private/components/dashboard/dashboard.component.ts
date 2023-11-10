import {Component, OnInit} from '@angular/core';
// import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Observable, tap} from "rxjs";
import { UserI } from '../../../public/public.interfaces';
import { UserService } from '../../../public/services/user-service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  // createUserComponentDialogRef: MatDialogRef<CreateUserComponent> | undefined;

  displayedColumns: string[] = ['username', 'email', 'firstName', 'lastName', 'id'];
  tableData: UserI[] = [];

  constructor(
    private userService: UserService,
    // private matDialog: MatDialog
  ) { }

  ngOnInit() {
    this.refreshTableData();
  }

  refreshTableData(): void {
    this.userService.getUserList().subscribe((data: UserI[]) => {
      this.tableData = data;
    });
  };

  deleteUserById(id: string): void {
    if (window.confirm('Are you shure to remove this user?')) {
      this.userService.deleteUserById(id).subscribe((res) => {
        this.refreshTableData();
      });
    }
  }

  // onShowCreateUserDialog() {
  //   this.createUserComponentDialogRef = this.matDialog.open(CreateUserComponent, {
  //     minHeight: '400px',
  //     minWidth: '300px'
  //   });
  // }
}
