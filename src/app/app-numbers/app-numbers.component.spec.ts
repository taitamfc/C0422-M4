import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNumbersComponent } from './app-numbers.component';

describe('AppNumbersComponent', () => {
  let component: AppNumbersComponent;
  let fixture: ComponentFixture<AppNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppNumbersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
