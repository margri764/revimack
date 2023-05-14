import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupInviteComponent } from './signup-invite.component';

describe('SignupInviteComponent', () => {
  let component: SignupInviteComponent;
  let fixture: ComponentFixture<SignupInviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupInviteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
