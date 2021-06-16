import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredectPageComponent } from './predect-page.component';


describe('PredectPageComponent', () => {
  let component: PredectPageComponent;
  let fixture: ComponentFixture<PredectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredectPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
