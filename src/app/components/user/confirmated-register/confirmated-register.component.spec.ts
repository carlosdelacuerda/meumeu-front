import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmatedRegisterComponent } from './confirmated-register.component';

describe('ConfirmatedRegisterComponent', () => {
  let component: ConfirmatedRegisterComponent;
  let fixture: ComponentFixture<ConfirmatedRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmatedRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmatedRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
