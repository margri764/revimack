import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMoreSimilarComponent } from './view-more-similar.component';

describe('ViewMoreSimilarComponent', () => {
  let component: ViewMoreSimilarComponent;
  let fixture: ComponentFixture<ViewMoreSimilarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMoreSimilarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMoreSimilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
