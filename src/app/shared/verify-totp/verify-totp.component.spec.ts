import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyTotpComponent } from './verify-totp.component';

describe('VerifyTotpComponent', () => {
  let component: VerifyTotpComponent;
  let fixture: ComponentFixture<VerifyTotpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyTotpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyTotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
