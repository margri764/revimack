import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantiumComponent } from './plantium.component';

describe('PlantiumComponent', () => {
  let component: PlantiumComponent;
  let fixture: ComponentFixture<PlantiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantiumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
