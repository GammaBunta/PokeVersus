import { TestBed } from '@angular/core/testing';

import { EfficaciteService } from './efficacite.service';

describe('EfficaciteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EfficaciteService = TestBed.get(EfficaciteService);
    expect(service).toBeTruthy();
  });
});
