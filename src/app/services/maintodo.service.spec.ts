import { TestBed } from '@angular/core/testing';

import { MaintodoService } from './maintodo.service';

describe('MaintodoService', () => {
  let service: MaintodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaintodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
