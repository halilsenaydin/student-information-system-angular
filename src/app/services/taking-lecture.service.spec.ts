import { TestBed } from '@angular/core/testing';

import { TakingLectureService } from './taking-lecture.service';

describe('TakingLectureService', () => {
  let service: TakingLectureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TakingLectureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
