import type { NextPage } from 'next'
import Lenguajes from '../components/lenguajes';
import NavBar from '../components/navBar'
import Presentacion from '../components/presentacion';
import TimeTable from '../components/atoms/timeTable'
import BotonToTop from '../components/atoms/botonToTop'





const Home: NextPage = () => {



  return (
    <div className=" bg-gradient-to-b from-slate-700 to-black flex flex-col  bg-teal-400">
      <NavBar />
      <Presentacion />
      <Lenguajes/>
      <TimeTable />
      <BotonToTop/>
    </div>
  );
}

export default Home
