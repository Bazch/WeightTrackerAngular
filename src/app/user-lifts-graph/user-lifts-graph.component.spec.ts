import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLiftsGraphComponent } from './user-lifts-graph.component';

describe('UserLiftsGraphComponent', () => {
  let component: UserLiftsGraphComponent;
  let fixture: ComponentFixture<UserLiftsGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLiftsGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLiftsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
