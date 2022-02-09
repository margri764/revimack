import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMachinesComponent } from './home-machines.component';

describe('HomeMachinesComponent', () => {
  let component: HomeMachinesComponent;
  let fixture: ComponentFixture<HomeMachinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMachinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
