import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLiftsComponent } from './user-lifts.component';

describe('UserLiftsComponent', () => {
  let component: UserLiftsComponent;
  let fixture: ComponentFixture<UserLiftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLiftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
