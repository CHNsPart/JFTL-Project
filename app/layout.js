import './globals.css'
import NavBar from "./NavBar"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div id='bg-pattern' className='w-full h-screen top-[100%] absolute -z-20 bg-white opacity-60' />
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
