import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CortiComponent } from './corti.component';

describe('CortiComponent', () => {
  let component: CortiComponent;
  let fixture: ComponentFixture<CortiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CortiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CortiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
