import { TestBed, inject } from '@angular/core/testing';

import { AccountGenerationService } from './account-generation.service';

describe('AccountGenerationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountGenerationService]
    });
  });

  it('should be created', inject([AccountGenerationService], (service: AccountGenerationService) => {
    expect(service).toBeTruthy();
  }));
});
