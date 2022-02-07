import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderUpComponent } from './slider-up.component';

describe('SliderUpComponent', () => {
  let component: SliderUpComponent;
  let fixture: ComponentFixture<SliderUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
