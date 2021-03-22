import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCapriceComponent } from './confirm-caprice.component';

describe('ConfirmCapriceComponent', () => {
  let component: ConfirmCapriceComponent;
  let fixture: ComponentFixture<ConfirmCapriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmCapriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmCapriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
