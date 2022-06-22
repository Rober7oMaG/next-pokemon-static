import React, { PropsWithChildren } from 'react'    ;
import { FavoritePokemonCard } from './FavoritePokemonCard';
import { Grid } from '@nextui-org/react';

interface Props {
    pokemons: number[]
}

export const FavoritePokemons: React.FC<PropsWithChildren<Props>> = ({pokemons}) => {
    return (
        <Grid.Container gap={2} direction='row' justify='flex-start'>
            {
                pokemons.map(id => (
                    <FavoritePokemonCard
                        key={id}
                        pokemonId={id}
                    />
                ))
            }
        </Grid.Container>
    );
}
