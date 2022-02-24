import {Component, OnInit, ViewChild} from '@angular/core';
import {PokemonService} from 'src/app/services/pokemon.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';


@Component({
    selector: 'app-poke-table',
    templateUrl: './poke-table.component.html',
    styleUrls: ['./poke-table.component.scss']
})
export class PokeTableComponent implements OnInit {

    displayedColumns: string[] = ['position', 'image', 'name'];
    // FIXME: Use an interface instead of any
    data: any[] = [];

    // FIXME: Use an interface instead of any
    dataSource = new MatTableDataSource<any>(this.data);


    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

    // define array type
    pokemons = [];

    constructor(private pokemonService: PokemonService, private router: Router) {
    }

    ngOnInit(): void {
        this.getPokemons();
    }

    // FIXME: Add return type (void)
    getPokemons() {
        let pokemonData;

        for (let i = 1; i <= 150; i++) {
            // FIXME: for every subscribe, we need to unsubscribe
            this.pokemonService.getPokemons(i).subscribe(
                res => {
                    pokemonData = {
                        position: i,
                        image: res.sprites.front_default,
                        name: res.name
                    };

                    this.data.push(pokemonData);
                    this.dataSource = new MatTableDataSource<any>(this.data);
                    this.dataSource.paginator = this.paginator;
                },
                err => {
                    console.log(err);
                }
            );
        }
    }

    // FIXME: Add return type (void)
    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }


    // FIXME: Add return type (void)
    // FIXME: Use async/await to handle promise
    getRow(row) {
        //console.log(row);
        this.router.navigateByUrl(`/pokeDetail/${row.position}`);
    }

}
