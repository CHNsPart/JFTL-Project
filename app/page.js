import Image from 'next/image'
//import { Inter } from '@next/font/google'
import Landing from './components/Landing'
import About from './components/About'
import ShortNotes from './components/ShortNotes'
import Footer from './components/Footer'
import Example from './components/Example'
import CompanyBar from './components/CompanyBar'
import ValueChain from './components/ValueChain'
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
      <Landing/>
      <About/>
      <ValueChain/>
      <CompanyBar/>
      <ShortNotes/>
      <Footer/>
      {/* <Example/> */}
    </main>
  )
}
