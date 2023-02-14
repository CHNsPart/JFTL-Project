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
import Example from './components/Example'
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
    <main className="h-[100%] w-[100%]">
      <Landing />
      <About />
      <ProductStart />
      <ValueChain />
      <ValueDetails />
      <CrabFarming />
      <CompanyBar />
      <ShortNotes />
      <Footer />
      {/* <Example/> */}
    </main>
  );
}
