import { TestBed } from '@angular/core/testing';

import { OpenLectureService } from './open-lecture.service';

describe('OpenLectureService', () => {
  let service: OpenLectureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenLectureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
