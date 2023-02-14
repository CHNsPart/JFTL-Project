"use client"
import './globals.css';
import NavBar from './NavBar';
import { useState } from 'react';

//let mode = "light"
export default function RootLayout({ children }) {
  let [mode, setMode] = useState("light")
  const modeChange = (data) => {
    setMode(data)
  }

  return (
    <html data-theme={mode} lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
      <head />
      <body>
       {/*  <button onClick={modeChange}>Dark Mode</button> */}
        <div
          id="bg-pattern"
          className="w-full h-screen top-[100%] absolute -z-20 bg-white opacity-60"
        />
        <NavBar modeChange={modeChange} />
        {children}
      </body>
    </html>
  );
}
