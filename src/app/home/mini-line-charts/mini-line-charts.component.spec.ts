import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniLineChartsComponent } from './mini-line-charts.component';

describe('MiniLineChartsComponent', () => {
  let component: MiniLineChartsComponent;
  let fixture: ComponentFixture<MiniLineChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniLineChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniLineChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
