import Image from 'next/image'
import { Inter } from '@next/font/google'
import Landing from './components/Landing'
import About from './components/About'
import ShortNotes from './components/ShortNotes'
import Example from './components/Example'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='h-[100%] w-[100%]'>
      <Landing/>
      <About/>
      <ShortNotes/>
      {/* <Example/> */}
    </main>
  )
}
