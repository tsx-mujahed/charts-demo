import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOtpVerifyComponent } from './login-otp-verify.component';

describe('LoginOtpVerifyComponent', () => {
  let component: LoginOtpVerifyComponent;
  let fixture: ComponentFixture<LoginOtpVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginOtpVerifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginOtpVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
