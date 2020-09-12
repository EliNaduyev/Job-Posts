import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAlertComponent } from './login-alert.component';

describe('LoginAlertComponent', () => {
  let component: LoginAlertComponent;
  let fixture: ComponentFixture<LoginAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
