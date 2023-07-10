import { TestBed } from '@angular/core/testing';

import { HelpRequestServiceService } from './help-request-service.service';

describe('HelpRequestServiceService', () => {
  let service: HelpRequestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelpRequestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
