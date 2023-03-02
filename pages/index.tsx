import type { NextPage } from 'next'
import NavBar from '../components/navBar'
import Presentacion from '../components/presentacion';
import BotonToTop from '../components/atoms/botonToTop'
import Head from 'next/head'
import Hero from '../components/hero'
import Templates from '../components/templates'






const Home: NextPage = () => {


  return (
    <>
    <Head>
      <title>David.SR 🌎 🧘 </title>
    </Head>
    <NavBar />
    <Presentacion />
    <Hero />
    <Templates />
    <BotonToTop/>
    </>
  );
}

export default Home
