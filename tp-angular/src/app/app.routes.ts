import { Routes } from '@angular/router';
import { Home } from './home/home';
import { PokemonDetail } from './pokemon-detail/pokemon-detail';
import { Safari } from './safari/safari';
import { Pokedex } from './pokedex/pokedex';
import { Form } from './form/form';
export const routes: Routes = [
    {
        path: 'pokemon/:pokemon_id',
        component: PokemonDetail
    },
    {
        path: 'safari',
        component: Safari
    },
    {
        path: 'pokedex',
        component: Pokedex
    },
    {
        path: 'form',
        component: Form
    },
    {
        path: '',
        component: Home
    }
];
