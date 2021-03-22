import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPublishComponent } from './nav-publish.component';

describe('NavPublishComponent', () => {
  let component: NavPublishComponent;
  let fixture: ComponentFixture<NavPublishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavPublishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavPublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
