import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMoreUsedComponent } from './view-more-used.component';

describe('ViewMoreUsedComponent', () => {
  let component: ViewMoreUsedComponent;
  let fixture: ComponentFixture<ViewMoreUsedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMoreUsedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMoreUsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
