import { TestBed } from '@angular/core/testing';

import { UserWeightService } from './user-weight.service';

describe('UserWeightService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserWeightService = TestBed.get(UserWeightService);
    expect(service).toBeTruthy();
  });
});
