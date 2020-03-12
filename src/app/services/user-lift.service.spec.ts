import { TestBed } from '@angular/core/testing';

import { UserLiftService } from './user-lift.service';

describe('UserLiftService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserLiftService = TestBed.get(UserLiftService);
    expect(service).toBeTruthy();
  });
});
