import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTractorsComponent } from './home-tractors.component';

describe('HomeTractorsComponent', () => {
  let component: HomeTractorsComponent;
  let fixture: ComponentFixture<HomeTractorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTractorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTractorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
