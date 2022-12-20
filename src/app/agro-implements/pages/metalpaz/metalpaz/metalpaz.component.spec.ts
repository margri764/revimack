import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalpazComponent } from './metalpaz.component';

describe('MetalpazComponent', () => {
  let component: MetalpazComponent;
  let fixture: ComponentFixture<MetalpazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetalpazComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalpazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
