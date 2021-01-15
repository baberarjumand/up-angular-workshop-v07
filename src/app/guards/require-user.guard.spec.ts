import { TestBed } from '@angular/core/testing';

import { RequireUserGuard } from './require-user.guard';

describe('RequireUserGuard', () => {
  let guard: RequireUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RequireUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
