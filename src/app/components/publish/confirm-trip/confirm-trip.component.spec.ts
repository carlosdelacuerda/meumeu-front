import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmTripComponent } from './confirm-trip.component';

describe('ConfirmTripComponent', () => {
  let component: ConfirmTripComponent;
  let fixture: ComponentFixture<ConfirmTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmTripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
