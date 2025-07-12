import { Component } from '@angular/core';
import { Pokemon } from '../services/pokemonApi/pokemonApi.service';
import { PokemonApiService } from '../services/pokemonApi/pokemonApi.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';
import { LocalStorageService } from '../services/localStorage/local-storage.service';
const NUMBER_OF_POKEMON = 1026;
@Component({
  selector: 'app-safari',
  imports: [],
  templateUrl: './safari.html',
  styleUrl: './safari.css'
})
export class Safari {
  wildPokemon : Pokemon[] = [];
  pokeBallCount : number = 0;
  private pokemonService = inject(PokemonApiService)
  private localStorageService = inject(LocalStorageService)
  ngOnInit (){this.generateWildPokemon()}
  generateWildPokemon(){
    this.pokeBallCount = 5
    this.wildPokemon = [];
    for (let i = 0; i < 4; i++) {
      let poke_id = Math.floor(Math.random() * NUMBER_OF_POKEMON) + 1

      
      const observable = this.pokemonService.getPokemon(poke_id);
      observable.subscribe({
        next: (pokemon : Pokemon) => {
          console.log(pokemon)
          this.wildPokemon.push(pokemon);
        },
        error: (err : string | null) => {
          console.log(err);
        }
      })
    }
  }

  catchPokemon(pokemon : Pokemon){
    if (this.pokeBallCount === 0){
      return;
    }
    const catchPower = Math.floor(Math.random() * 100) + 1
    if (catchPower > 20){
      console.log("Pokemon capturado")
      this.localStorageService.setCaughtPokemon(pokemon)
    }
    this.pokeBallCount--;
  }
}
