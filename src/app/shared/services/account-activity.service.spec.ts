import { TestBed, inject } from '@angular/core/testing';

import { AccountActivityService } from './account-activity.service';

describe('AccountActivityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountActivityService]
    });
  });

  it('should be created', inject([AccountActivityService], (service: AccountActivityService) => {
    expect(service).toBeTruthy();
  }));
});
