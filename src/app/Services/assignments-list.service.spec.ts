import { TestBed } from '@angular/core/testing';

import { AssignmentsListService } from './assignments-list.service';

describe('AssignmentsListService', () => {
  let service: AssignmentsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignmentsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
