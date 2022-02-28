import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmailSignupOtpComponent } from './gmail-signup-otp.component';

describe('GmailSignupOtpComponent', () => {
  let component: GmailSignupOtpComponent;
  let fixture: ComponentFixture<GmailSignupOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GmailSignupOtpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GmailSignupOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
