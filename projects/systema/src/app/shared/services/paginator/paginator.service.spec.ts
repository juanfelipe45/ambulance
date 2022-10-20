import { TestBed } from '@angular/core/testing';

import { Paginator } from './paginator.service';

describe('PaginatorService', () => {
  let service: Paginator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Paginator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
