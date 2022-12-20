import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesceComponent } from './pesce.component';

describe('PesceComponent', () => {
  let component: PesceComponent;
  let fixture: ComponentFixture<PesceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
