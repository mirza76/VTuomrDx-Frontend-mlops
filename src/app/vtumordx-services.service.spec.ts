import { TestBed } from '@angular/core/testing';

import { VtumordxServicesService } from './vtumordx-services.service';

describe('VtumordxServicesService', () => {
  let service: VtumordxServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VtumordxServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
