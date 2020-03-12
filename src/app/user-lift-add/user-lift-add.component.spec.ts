import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLiftAddComponent } from './user-lift-add.component';

describe('UserLiftAddComponent', () => {
  let component: UserLiftAddComponent;
  let fixture: ComponentFixture<UserLiftAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLiftAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLiftAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
