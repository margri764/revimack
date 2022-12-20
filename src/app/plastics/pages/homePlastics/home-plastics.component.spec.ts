import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePlasticsComponent } from './home-plastics.component';

describe('HomePlasticsComponent', () => {
  let component: HomePlasticsComponent;
  let fixture: ComponentFixture<HomePlasticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePlasticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePlasticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
