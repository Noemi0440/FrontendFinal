import { TestBed } from '@angular/core/testing';

import { InsertTeacherServiceService } from './insert-teacher-service.service';

describe('InsertTeacherServiceService', () => {
  let service: InsertTeacherServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertTeacherServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
