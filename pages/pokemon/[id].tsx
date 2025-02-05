import { pokeApi } from '@/api';
import { Layout } from '@/components/layouts';
import { Pokemon } from '@/interfaces';
import { getPokemonInfo, localFavorites } from '@/utils';
import { Card, Grid, Text, Button, Container, Image } from '@nextui-org/react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useEffect, useState } from 'react';

import confetti from 'canvas-confetti';

interface Props {
  pokemon: Pokemon;
}


const PokemonPage: NextPage<Props> = ( { pokemon } ) => {

  
  const [isInFavorites, setIsInFavorites] = useState( false );

  const onToggleFavorite = () => {
      
    localFavorites.toggleFavorite( pokemon.id );

    if(!isInFavorites){
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0
        }
      })
    }

    setIsInFavorites( localFavorites.existInFavorites(pokemon.id) );  
    
  }
  
  useEffect( () => {
    
    console.log(localFavorites.existInFavorites(pokemon.id))
    setIsInFavorites( localFavorites.existInFavorites(pokemon.id) );  

  }, [])




  return (
    <Layout title={ pokemon.name } pokemonId={pokemon.id}>
      
      <Grid.Container css={{ marginTop: '5px'}} gap={2}>
        <Grid xs={ 12 } sm={ 4 }>
          <Card isHoverable={true} css={{padding: '30px'}}>
            <Card.Body>
              <Card.Image 
                src={ pokemon.sprites.other?.dream_world.front_default || '/no-image.png' }
                alt={ pokemon.name }
                width="100%"
                height={ 200 }
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={ 12 } sm={ 8 }>

          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform='capitalize'> { pokemon.name } </Text>

              <Button color='gradient' ghost={ isInFavorites } onPress={onToggleFavorite}>
                { isInFavorites ? 'En Favoritos' : 'Guardar en favoritos' } 
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}> Sprites: </Text>

              <Container display='flex' direction='row'>
                <Image 
                  src={ pokemon.sprites.front_default }
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />

                <Image 
                  src={ pokemon.sprites.back_default }
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />

                <Image 
                  src={ pokemon.sprites.front_shiny }
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />

                <Image 
                  src={ pokemon.sprites.back_shiny }
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
              </Container>
            </Card.Body>
          </Card>

        </Grid>
      </Grid.Container>

    </Layout>
  )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemons151 = [...Array(151)].map((value, index) => `${ index + 1 }`);
  
  return {
    paths: pokemons151.map( id => ({
      params: { id }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ( { params }) => {
  
  const { id } = params as { id: string };

  return {
    props: {
      pokemon: await getPokemonInfo(id)
    }
  }
}

export default PokemonPage
