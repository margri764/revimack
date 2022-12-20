import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTecnoComponent } from './home-tecno.component';

describe('HomeTecnoComponent', () => {
  let component: HomeTecnoComponent;
  let fixture: ComponentFixture<HomeTecnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTecnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTecnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
