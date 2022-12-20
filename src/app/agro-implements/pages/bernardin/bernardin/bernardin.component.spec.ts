import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BernardinComponent } from './bernardin.component';

describe('BernardinComponent', () => {
  let component: BernardinComponent;
  let fixture: ComponentFixture<BernardinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BernardinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BernardinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
