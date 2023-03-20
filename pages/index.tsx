import type { NextPage } from 'next'
import NavBar from '../components/navBar'
import Presentacion from '../components/presentacion';
import BotonToTop from '../components/atoms/botonToTop'
import Head from 'next/head'
import Hero from '../components/hero'
import Tecnologies from '../components/tecnologies'
import Templates from '../components/templates'
import Contact from '../components/contact'
import AnimateLeng from '../components/animateLeng'




const Home: NextPage = () => {


  return (
    <section className='p-0 m-0'>
    <Head>
      <title>David.SR 🌎 🧘 </title>
    </Head>
    <NavBar />
    <Presentacion />
    <Hero />
    <Tecnologies />
    <AnimateLeng />
    <Templates />
    <Contact />
    <BotonToTop/>
    </section>
  );
}

export default Home
