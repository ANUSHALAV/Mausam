import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInfo } from './weather-info';

describe('WeatherInfo', () => {
  let component: WeatherInfo;
  let fixture: ComponentFixture<WeatherInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
