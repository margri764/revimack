import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeImplementsComponent } from './home-implements.component';

describe('HomeImplementsComponent', () => {
  let component: HomeImplementsComponent;
  let fixture: ComponentFixture<HomeImplementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeImplementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeImplementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
