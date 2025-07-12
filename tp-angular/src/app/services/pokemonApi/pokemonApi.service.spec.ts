import { TestBed } from '@angular/core/testing';

import { PokemonApiService } from './pokemonApi.service';

describe('PostsService', () => {
  let service: PokemonApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
