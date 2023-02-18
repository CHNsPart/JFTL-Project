//import Image from 'next/image';
import Landing from './components/Landing';
import About from './components/About';
import ShortNotes from './components/ShortNotes';
import Footer from './components/Footer';
import CompanyBar from './components/CompanyBar';
import ValueChain from './components/ValueChain';
import ProductStart from './components/ProductStart';
import ValueDetails from './components/ValueDetails';
import CrabFarming from './components/CrabFarming';
import CrabProcessing from './components/CrabProcessing';
import Example from './components/Example';
/* import localFont from '@next/font/local'

const local = localFont({
  src: '../public/fonts/ArsencaTrial-Bold.tff',
  variable: '--font-arsenica-bold',
  name: 'Arsenica',
  weight: [200,500,700]
}) */

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="h-screen w-full">
      <div className="h-screen min-w-fit">
        <Landing />
      </div>
        <About />
     {/*  <ProductStart /> */}

      <ValueChain />

      <ValueDetails />

      <CrabFarming />

      <CrabProcessing />

      <ShortNotes />
      <div className="h-auto mt-10 w-full">
        <CompanyBar />
      </div>


      <Footer />

      {/* <Example/> */}
    </main>
  );
}
