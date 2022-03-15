import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotoplasComponent } from './rotoplas.component';

describe('RotoplasComponent', () => {
  let component: RotoplasComponent;
  let fixture: ComponentFixture<RotoplasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotoplasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotoplasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
