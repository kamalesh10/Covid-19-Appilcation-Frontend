import { TestBed } from '@angular/core/testing';

import { PassRegistrationService } from './pass-registration.service';

describe('PassRegistrationService', () => {
  let service: PassRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
