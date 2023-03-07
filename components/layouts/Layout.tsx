import Head from "next/head"
import { FC } from "react"
import { Navbar } from '../ui';


interface Props {
    children: React.ReactNode;
    title?: string,
    pokemonId?: number
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout: FC<Props> = ( { children, title, pokemonId } ) => {
  return (
    <>
        <Head>
            <title>{ title || 'PokemonApp'}</title>
            <meta name="author" content="Gerardo Villalta"></meta>
            <meta name="description" content={`Informacion sobre el Pokemon ${ title }`}></meta>
            <meta name="keywords" content={`${ title }, pokemon, pokedex`} />

            <meta property="og:title" content={`Informacion sobre ${ title }`} />
            <meta property="og:description" content={`Esta pagina es sobre el pokemon ${title } `} />
            <meta property="og:image" content={`${origin}/img/banner.png`} />
        </Head>

        <Navbar pokemonId={ pokemonId || 1 } />

        <main style={{
            padding: '0px 20px'
        }}>
            { children }
        </main>
    </>
  )
}
