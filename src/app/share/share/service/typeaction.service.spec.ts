import { TestBed } from '@angular/core/testing';

import { TypeactionService } from './typeaction.service';

describe('TypeactionService', () => {
  let service: TypeactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
