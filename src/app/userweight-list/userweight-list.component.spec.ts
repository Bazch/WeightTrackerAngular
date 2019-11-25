import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserweightListComponent } from './userweight-list.component';

describe('UserweightListComponent', () => {
  let component: UserweightListComponent;
  let fixture: ComponentFixture<UserweightListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserweightListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserweightListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
