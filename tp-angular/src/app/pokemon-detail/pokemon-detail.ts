import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon, PokemonApiService } from '../services/pokemonApi/pokemonApi.service';
import { map } from 'rxjs';
@Component({
  selector: 'app-pokemon-detail',
  imports: [],
  templateUrl: './pokemon-detail.html',
  styleUrl: './pokemon-detail.css'
})
export class PokemonDetail {
  pokemon : Pokemon = {
    id: 0,
    sprite: '',
    isShiny: false,
    name: '',
    type: [],
    caught: false
  }
  description : string = ''
  private pokemonService = inject(PokemonApiService)
  constructor(private route: ActivatedRoute) {
    
  }
  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('pokemon_id'));
      const observable = this.pokemonService.getPokemon(id);
      observable.subscribe({
        next: (pokemon : Pokemon) => {
          console.log(pokemon)
          this.pokemon = pokemon;
        },
        error: (err : string | null) => {
          console.log(err);
        }
      })
      const description = this.pokemonService.getDescription(id);
      description.subscribe({
        next: (description : string) => {
          console.log(description)
          this.description = description;
        },
        error: (err : string | null) => {
          console.log(err);
        }
      })
    });

  }
}
