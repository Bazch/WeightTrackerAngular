import { TestBed } from '@angular/core/testing';

import { UserLiftDetailsService } from './user-lift-details.service';

describe('UserLiftDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserLiftDetailsService = TestBed.get(UserLiftDetailsService);
    expect(service).toBeTruthy();
  });
});
