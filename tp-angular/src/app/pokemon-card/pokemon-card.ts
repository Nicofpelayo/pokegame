import { Component, Input } from '@angular/core';
import { Pokemon } from '../services/pokemonApi/pokemonApi.service';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-card.html',
  styleUrl: './pokemon-card.css'
})
export class PokemonCard {
  @Input() pokemon : Pokemon = {
    id: 0,
    sprite: '',
    isShiny: false,
    name: '',
    type: [],
    caught: false
  }
}
