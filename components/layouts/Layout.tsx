import Head from "next/head"
import { Navbar } from '../ui/Navbar';
import { useRouter } from 'next/router';

interface Props {
    children?: React.ReactNode,
    title: string;
};

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: React.FC<Props> = ({ children, title }) => {

  return (
    <>
        <Head>
            <title>{title || 'PokemonApp'}</title>
            <meta name="autor" content="Pablo Angeles"/>
            <meta name="description" content={`Información sobre el pokémon ${ title }`}/>
            <meta name="keywords" content={`${title}, pokemon, pokedex`}/>
            <meta property="og:title" content={`Información sobre ${title}`} />
            <meta property="og:description" content={`Esta es la página sobre ${ title }`}/>
            <meta property="og:image" content={`${origin}/img/banner.png`} />
        </Head>

        <Navbar/>

        <main style={{
            padding: '0px 20px'
        }}>
            { children }
        </main>
    </>
  )
}
