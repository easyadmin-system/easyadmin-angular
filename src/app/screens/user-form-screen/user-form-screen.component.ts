import { Component, OnInit } from '@angular/core';
import { APIService } from '@services/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormStatusType } from '@shared/types/form.enum';
import { HttpErrorResponse } from '@angular/common/http';
import { IUser } from '@interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form-screen',
  templateUrl: './user-form-screen.component.html',
  styleUrls: ['./user-form-screen.component.scss']
})
export class UserFormScreenComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    firstName: new FormControl('', [Validators.required, Validators.minLength(1)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(1)])
  });

  formStatusType = FormStatusType;
  formStatus: FormStatusType = FormStatusType.Edit;

  constructor(
    private apiService: APIService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  submitForm(): void {
    this.formStatus = FormStatusType.Progress;
    this.apiService.createUser(this.form.value).subscribe((data: any) => {
      this.formStatus = FormStatusType.Success;
      alert('User has been created!');
      this.router.navigate(['/users']);
    }, (err: HttpErrorResponse) => {
      this.formStatus = FormStatusType.Error;
    });
  }
}
