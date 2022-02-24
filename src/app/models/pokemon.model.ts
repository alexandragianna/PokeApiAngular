export interface Pokemon {
    id: number;
    name: string;
    weight: number;
    height: number;
    types: PokemonTypeSlot[];
    sprites: PokemonSprite;
}

export interface PokemonSprite {
    front_default: string;
}

export interface PokemonTypeSlot {
    slot: number,
    type: PokemonType
}

export interface PokemonType {
    name: string;
    url: string;
}
