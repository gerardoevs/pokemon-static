import { Layout } from '@/components/layouts'
import { NoFavorites } from '@/components/ui'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { localFavorites } from '@/utils';
import { Card, Grid } from '@nextui-org/react';
import { FavoritesPokemons } from '@/components/ui/FavoritesPokemons';

const Favorites = () => {

  const [favoritesPokemons, setfavoritesPokemons] = useState<number[]>([]);

  useEffect( () => {
    
    setfavoritesPokemons( localFavorites.pokemons() );

  }, []);

  return (
    <Layout title='Pokemons - Favoritos'>
        {
          favoritesPokemons.length === 0 
          ? <NoFavorites/>
          : (
            <FavoritesPokemons pokemons={favoritesPokemons} />
          )
        }
    </Layout>
  )
}

export default Favorites