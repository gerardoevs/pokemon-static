import { Grid } from '@nextui-org/react'
import React, { FC } from 'react'
import { FavoriteCardPokemon } from './FavoriteCardPokemon'

interface Props {
    pokemons: number[];
}

export const FavoritesPokemons: FC<Props> = ( { pokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
        {
        pokemons.map( id => (
            <FavoriteCardPokemon id={id} key={id} ></FavoriteCardPokemon>
        ))
        }
    </Grid.Container>
  )
}
