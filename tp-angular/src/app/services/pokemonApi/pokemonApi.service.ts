import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { LocalStorageService } from '../localStorage/local-storage.service';

export interface Pokemon {
  id: number;
  sprite: string;
  isShiny: boolean;
  name: string;
  type: string[];
  caught: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {
  private API_URL = 'https://pokeapi.co/api/v2/pokemon/';
  private API_URL_DESCRIPTION = 'https://pokeapi.co/api/v2/pokemon-species/';
  private localStorageService = inject(LocalStorageService);
  constructor(private http: HttpClient) { }

  getPokemon(poke_id : number) : Observable<Pokemon>{
    return this.http.get<any>(this.API_URL + poke_id).pipe(
      map(res => this.transformPokeResponse(res)))
    ;
  }
  getDescription(poke_id : number) : Observable<string>{
    return this.http.get<any>(this.API_URL_DESCRIPTION + poke_id).pipe(
      map(res => res.flavor_text_entries.find((flavor : any)=> flavor.language.name === 'en').flavor_text)
    );
  }
  transformPokeResponse(pokemon : any) : Pokemon {
    const isShiny = (Math.floor(Math.random() * 100) + 1) === 1
    let caught
    if (isShiny){
      pokemon.sprites.front_default = pokemon.sprites.front_shiny
      caught = this.localStorageService.getCaughtShinyPokemon().find(myPoke => myPoke.id === pokemon.id) !== undefined
    }
    else {
      caught = this.localStorageService.getCaughtPokemon().find(myPoke => myPoke.id === pokemon.id) !== undefined
    }
    return {
      id: pokemon.id,
      sprite: pokemon.sprites.front_default,
      isShiny: isShiny,
      name: pokemon.name,
      type: pokemon.types.map((type: any) => type.type.name),
      caught: caught,
  } as Pokemon
}
}
