import { TestBed } from '@angular/core/testing';

import { DenotationService } from './denotation.service';

describe('DenotationService', () => {
  let service: DenotationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DenotationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
