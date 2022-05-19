import { TestBed } from '@angular/core/testing';

import { CanActivateAuthguardService } from './can-activate-authguard.service';

describe('CanActivateAuthguardService', () => {
  let service: CanActivateAuthguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanActivateAuthguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
