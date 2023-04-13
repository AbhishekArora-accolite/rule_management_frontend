import { TestBed } from '@angular/core/testing';

import { ApplicationsDataService } from './applications-data.service';

describe('ApplicationsDataService', () => {
  let service: ApplicationsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
