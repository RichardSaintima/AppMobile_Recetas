import { TestBed } from '@angular/core/testing';

import { BasesdatosService } from './basesdatos.service';

describe('BasesdatosService', () => {
  let service: BasesdatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasesdatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
