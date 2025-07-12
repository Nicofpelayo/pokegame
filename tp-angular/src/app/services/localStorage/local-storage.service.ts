import { Injectable } from '@angular/core';
import { Pokemon } from '../pokemonApi/pokemonApi.service';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  caughtPokemon : Pokemon[] = []
  caughtShinyPokemon : Pokemon[] = []
  constructor() { }
  ngOnInit(){
    this.getCaughtShinyPokemon();
    this.getCaughtPokemon();
  }
  setCaughtPokemon(pokemon : Pokemon){
    if (pokemon.isShiny){
      this.caughtShinyPokemon.push(pokemon);
      localStorage.setItem("caughtShinyPokemon", JSON.stringify(this.caughtShinyPokemon));
    } else {
      this.caughtPokemon.push(pokemon);
      localStorage.setItem("caughtPokemon", JSON.stringify(this.caughtPokemon));
    }
    
  }
  getCaughtPokemon() : Pokemon[] {
    const pokemon = localStorage.getItem("caughtPokemon") ? JSON.parse(localStorage.getItem("caughtPokemon") || "") : [];
    this.caughtPokemon = pokemon;
    return pokemon;
  }
  getCaughtShinyPokemon() : Pokemon[] {
    const pokemon = localStorage.getItem("caughtShinyPokemon") ? JSON.parse(localStorage.getItem("caughtShinyPokemon") || "") : [];
    this.caughtShinyPokemon = pokemon;
    return pokemon;
  }
  clearAllCaughtPokemon(){
    this.caughtPokemon = [];
    this.caughtShinyPokemon = [];
    localStorage.removeItem("caughtPokemon");
    localStorage.removeItem("caughtShinyPokemon");
  }
}
