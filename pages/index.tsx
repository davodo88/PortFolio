import type { NextPage } from 'next'
import NavBar from '../components/navBar'
import Presentacion from '../components/presentacion';
import BotonToTop from '../components/atoms/botonToTop'
import { classNames } from '../utils/utils';
import Head from 'next/head'






const Home: NextPage = () => {


  return (
    <>
    <Head>
      <title>David.SR 🌎 🧘 </title>
    </Head>
    <div >
        <NavBar />
      <body >
        <Presentacion />
        <BotonToTop/>
      </body>
      <footer >
      </footer>
    </div>
    </>
  );
}

export default Home
