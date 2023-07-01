import { TestBed } from '@angular/core/testing';

import { InsertParentsServiceService } from './insert-parents-service.service';

describe('InsertParentsServiceService', () => {
  let service: InsertParentsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertParentsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
