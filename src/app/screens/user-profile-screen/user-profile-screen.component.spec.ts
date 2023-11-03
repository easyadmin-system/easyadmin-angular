import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileScreenComponent } from './user-profile-screen.component';

describe('UserProfileScreenComponent', () => {
  let component: UserProfileScreenComponent;
  let fixture: ComponentFixture<UserProfileScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfileScreenComponent]
    });
    fixture = TestBed.createComponent(UserProfileScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
