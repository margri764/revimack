import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoSkfComponent } from './promo-skf.component';

describe('PromoSkfComponent', () => {
  let component: PromoSkfComponent;
  let fixture: ComponentFixture<PromoSkfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoSkfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromoSkfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
