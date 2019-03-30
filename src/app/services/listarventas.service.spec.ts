import { TestBed } from '@angular/core/testing';

import { ListarventasService } from './listarventas.service';

describe('ListarventasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListarventasService = TestBed.get(ListarventasService);
    expect(service).toBeTruthy();
  });
});
