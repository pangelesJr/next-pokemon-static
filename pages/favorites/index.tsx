import React, { useEffect, useState } from 'react'
import { Card, Container, Grid, Text } from '@nextui-org/react';
import { Layout } from '../../components/layouts'
import { NoFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';
import { FavoritePokemons } from '../../components/pokemon';

const FavoritesPage = () => {

  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setfavoritePokemons(localFavorites.pokemons());
  }, [])
  

  return (
    <Layout title='Favoritos'>
      {
        favoritePokemons.length === 0
          ? (<NoFavorites />)
          : (<FavoritePokemons pokemons={favoritePokemons} />)
      }

        
    </Layout>    
  )
}

export default FavoritesPage;
