import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedCapriceComponent } from './published-caprice.component';

describe('PublishedCapriceComponent', () => {
  let component: PublishedCapriceComponent;
  let fixture: ComponentFixture<PublishedCapriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishedCapriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedCapriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
