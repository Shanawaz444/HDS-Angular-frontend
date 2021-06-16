import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredectPageDialogComponent } from './predect-page-dialog.component';

describe('PredectPageDialogComponent', () => {
  let component: PredectPageDialogComponent;
  let fixture: ComponentFixture<PredectPageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredectPageDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredectPageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
