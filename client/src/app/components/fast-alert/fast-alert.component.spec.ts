import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FastAlertComponent } from './fast-alert.component';

describe('FastAlertComponent', () => {
  let component: FastAlertComponent;
  let fixture: ComponentFixture<FastAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
