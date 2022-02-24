import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoutchartComponent } from './popoutchart.component';

describe('PopoutchartComponent', () => {
  let component: PopoutchartComponent;
  let fixture: ComponentFixture<PopoutchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopoutchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoutchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
