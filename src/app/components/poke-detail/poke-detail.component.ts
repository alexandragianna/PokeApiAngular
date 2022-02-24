import {Component, OnDestroy, OnInit} from '@angular/core';
import {PokemonService} from 'src/app/services/pokemon.service';
import {ActivatedRoute} from '@angular/router';
import {Pokemon} from '../../models/pokemon.model';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-poke-detail',
    templateUrl: './poke-detail.component.html',
    styleUrls: ['./poke-detail.component.scss']
})
export class PokeDetailComponent implements OnInit, OnDestroy {

    pokemon: Pokemon | null = null;
    pokemonImg: string | null = null;
    pokemonType: string | null = null;

    subscription = new Subscription();

    constructor(private activatedRouter: ActivatedRoute,
                private pokemonService: PokemonService) {

        // for every subscribe, we need to unsubscribe
        this.subscription.add(
            this.activatedRouter.params.subscribe(
                params => {
                    this.getPokemon(params['id']);
                }
            )
        );
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    // FIXME: Remove empty onInit
    ngOnInit(): void {
    }

    getPokemon(id) {
        // FIXME: for every subscribe, we need to unsubscribe
        this.pokemonService.getPokemons(id).subscribe(
            res => {
                console.log(res);
                this.pokemon = res;
                this.pokemonImg = this.pokemon.sprites.front_default;
                this.pokemonType = res.types[0].type.name;
            },
            err => {
                console.log(err);
            }
        );
    }

}
