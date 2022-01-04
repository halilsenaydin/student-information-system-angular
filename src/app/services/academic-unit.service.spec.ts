import { TestBed } from '@angular/core/testing';

import { AcademicUnitService } from './academic-unit.service';

describe('AcademicUnitService', () => {
  let service: AcademicUnitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcademicUnitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
