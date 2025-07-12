import { Component , inject} from '@angular/core';
import { Pokemon } from '../services/pokemonApi/pokemonApi.service';
import { LocalStorageService } from '../services/localStorage/local-storage.service';
import { PokemonCard } from '../pokemon-card/pokemon-card';
@Component({
  selector: 'app-pokedex',
  imports: [PokemonCard],
  templateUrl: './pokedex.html',
  styleUrl: './pokedex.css'
})
export class Pokedex {
  caughtPokemon : Pokemon[] = [];
  caughtShinyPokemon : Pokemon[] = [];
  private localStorageService = inject(LocalStorageService)
  ngOnInit(){
    this.caughtPokemon = this.localStorageService.getCaughtPokemon();
    this.caughtShinyPokemon = this.localStorageService.getCaughtShinyPokemon();
    console.log(this.caughtPokemon)
  }
  clearAllCaughtPokemon(){
    this.localStorageService.clearAllCaughtPokemon();
    this.caughtPokemon = [];
    this.caughtShinyPokemon = [];
  }
}
