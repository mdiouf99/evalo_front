import { TestBed } from '@angular/core/testing';

import { RubriqueServiceService } from './rubrique-service.service';

describe('RubriqueServiceService', () => {
  let service: RubriqueServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RubriqueServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
