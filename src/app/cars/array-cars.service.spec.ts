import { TestBed, inject } from '@angular/core/testing';

import { ArrayCarsService } from './array-cars.service';

describe('ArrayCarsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArrayCarsService]
    });
  });

  it('should be created', inject([ArrayCarsService], (service: ArrayCarsService) => {
    expect(service).toBeTruthy();
  }));
});
