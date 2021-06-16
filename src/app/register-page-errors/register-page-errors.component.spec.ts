import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPageErrorsComponent } from './register-page-errors.component';

describe('RegisterPageErrorsComponent', () => {
  let component: RegisterPageErrorsComponent;
  let fixture: ComponentFixture<RegisterPageErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPageErrorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPageErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
