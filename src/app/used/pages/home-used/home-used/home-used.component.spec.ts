import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUsedComponent } from './home-used.component';

describe('HomeUsedComponent', () => {
  let component: HomeUsedComponent;
  let fixture: ComponentFixture<HomeUsedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeUsedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeUsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
