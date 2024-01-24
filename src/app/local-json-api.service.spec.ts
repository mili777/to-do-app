import { TestBed } from '@angular/core/testing';

import { LocalJsonApiService } from './local-json-api.service';

describe('LocalJsonApiService', () => {
  let service: LocalJsonApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalJsonApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
