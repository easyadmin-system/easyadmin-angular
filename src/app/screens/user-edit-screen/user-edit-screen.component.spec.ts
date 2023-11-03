import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditScreenComponent } from './user-edit-screen.component';

describe('UserEditScreenComponent', () => {
  let component: UserEditScreenComponent;
  let fixture: ComponentFixture<UserEditScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserEditScreenComponent]
    });
    fixture = TestBed.createComponent(UserEditScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
