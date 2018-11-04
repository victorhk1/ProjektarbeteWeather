import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherdetailComponent } from './weatherdetail.component';

describe('WeatherdetailComponent', () => {
  let component: WeatherdetailComponent;
  let fixture: ComponentFixture<WeatherdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
