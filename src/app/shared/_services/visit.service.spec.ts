/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VisitService } from './visit.service';

describe('Service: Data', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisitService]
    });
  });

  it('should ...', inject([VisitService], (service: VisitService) => {
    expect(service).toBeTruthy();
  }));
});
