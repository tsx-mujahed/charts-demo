import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InappSignupOtpComponent } from './inapp-signup-otp.component';

describe('InappSignupOtpComponent', () => {
  let component: InappSignupOtpComponent;
  let fixture: ComponentFixture<InappSignupOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InappSignupOtpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InappSignupOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
