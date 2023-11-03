import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormScreenComponent } from './user-form-screen.component';

describe('UserFormScreenComponent', () => {
  let component: UserFormScreenComponent;
  let fixture: ComponentFixture<UserFormScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserFormScreenComponent]
    });
    fixture = TestBed.createComponent(UserFormScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
