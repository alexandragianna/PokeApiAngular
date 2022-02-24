import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import {Pokemon} from '../models/pokemon.model';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {

    baseUrl: string = environment.baseUrl;

    constructor(private http: HttpClient) {
    }

    // Obtiene pokemon
    // FIXME: rename to 'getPokemon'
    getPokemons(index: number): Observable<Pokemon> {
        return this.http.get<Pokemon>(`${this.baseUrl}/pokemon/${index}`);
    }
}
