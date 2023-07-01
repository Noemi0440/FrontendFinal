import { TestBed } from '@angular/core/testing';

import { InsertStudentServiceService } from './insert-student-service.service';

describe('InsertStudentServiceService', () => {
  let service: InsertStudentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertStudentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
