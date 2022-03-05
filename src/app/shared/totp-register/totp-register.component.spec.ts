import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotpRegisterComponent } from './totp-register.component';

describe('TotpRegisterComponent', () => {
  let component: TotpRegisterComponent;
  let fixture: ComponentFixture<TotpRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotpRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotpRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
