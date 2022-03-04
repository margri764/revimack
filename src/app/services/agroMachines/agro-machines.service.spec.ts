import { TestBed } from '@angular/core/testing';

import { AgroMachinesService } from './agro-machines.service';

describe('AgroMachinesService', () => {
  let service: AgroMachinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgroMachinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
