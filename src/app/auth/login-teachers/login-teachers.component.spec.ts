import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTeachersComponent } from './login-teachers.component';

describe('LoginTeachersComponent', () => {
  let component: LoginTeachersComponent;
  let fixture: ComponentFixture<LoginTeachersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginTeachersComponent]
    });
    fixture = TestBed.createComponent(LoginTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
