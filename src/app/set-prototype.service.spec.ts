import { TestBed } from '@angular/core/testing';

import { SetPrototypeService } from './set-prototype.service';

describe('SetPrototypeService', () => {
  let service: SetPrototypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetPrototypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
