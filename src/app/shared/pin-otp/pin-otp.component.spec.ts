import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinOtpComponent } from './pin-otp.component';

describe('PinOtpComponent', () => {
  let component: PinOtpComponent;
  let fixture: ComponentFixture<PinOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinOtpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
