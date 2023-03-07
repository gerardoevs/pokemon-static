import { Link, Spacer, Text, useTheme } from "@nextui-org/react";
import NextLink from 'next/link';
import Image from "next/image";
import { FC } from "react";


interface Props {
  pokemonId?: number
}

export const Navbar: FC<Props> = ( { pokemonId } ) => {

    const { theme } = useTheme();

  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0x 20px',
        backgroundColor: theme?.colors.gray50.value,
        color: theme?.colors.black.value
    }}>

        <Image src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png` } alt="icono de la app" width={70} height={70} />

        <Link href="/">
          <Text color="white" h2>P</Text>
          <Text color="white">okemon</Text>
        </Link>

        <Spacer css={{
            flex:1
        }} />

        <Link href="/favorites" css={{ marginRight: '10px' }}>
          <Text color="white">Favoritos</Text>
        </Link>
    </div>
  )
}
