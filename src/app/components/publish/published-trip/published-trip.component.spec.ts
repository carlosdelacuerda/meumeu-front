import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedTripComponent } from './published-trip.component';

describe('PublishedTripComponent', () => {
  let component: PublishedTripComponent;
  let fixture: ComponentFixture<PublishedTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishedTripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
