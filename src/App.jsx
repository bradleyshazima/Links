import React from 'react'
import { useState } from 'react'
import './App.css'
import { Logo, Logo1, Logo2, Hero2 } from './assets'

function App() {

  return (
    <>
      <section className='w-full h-[150vh] bg-[#131313]'>
        <div className='w-full h-[50vh] flex justify-center relative '>
          <video
            className="absolute top-0 left-0 w-full h-full object-cover object-center"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://res.cloudinary.com/dxblluwy9/video/upload/v1742050344/Visualizer_pacjyu.mp4" type="video/mp4" />
          </video>
          <img src={Logo1} alt="logo" className='z-[999] h-32 w-auto absolute bottom-[-80px]' />
        </div>

        <div className='w-full flex flex-row gap-10 mt-14 space'>
        <div className='w-2/3 flex flex-row gap-10'>
            <div className='w-1/2 h-full overflow-hidden rounded-lg'>
              <img src={Hero2} alt="acense" className='w-full h-full object-cover object-top' />
            </div>
            <div className='w-1/2 h-60 overflow-hidden'>
              <h2 className='text-white text-5xl surf'>ACENSE</h2>
              <p className='text-white text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet corporis architecto atque repellendus. Quisquam ipsa autem totam nemo! Voluptates totam ullam repellat! Minima molestiae ut culpa soluta similique quis ipsa cumque, cum itaque praesentium nobis, iusto temporibus esse numquam nam impedit dicta repellat a in quae quia earum, atque ipsam!</p>
            </div>
          </div>

          <div className='w-1/3 flex flex-row'>
            <div className='w-full h-full space-sm flex flex-col gap-4 bg-[#009fe2] rounded-2xl'>
              <a className='w-full'>
                <div className='w-full h-20 rounded-lg bg-[#131313] text-white flex items-center justify-center text-center'>INSTAGRAM</div>
              </a>
              <a className='w-full'>
                <div className='w-full h-20 rounded-lg bg-[#131313] text-white flex items-center justify-center text-center'>SPOTIFY</div>
              </a>
              <a className='w-full'>
                <div className='w-full h-20 rounded-lg bg-[#131313] text-white flex items-center justify-center text-center'>YOUTUBE</div>
              </a>
              <a className='w-full'>
                <div className='w-full h-20 rounded-lg bg-[#131313] text-white flex items-center justify-center text-center'>BOOMPLAY</div>
              </a>
              <a className='w-full'>
                <div className='w-full h-20 rounded-lg bg-[#131313] text-white flex items-center justify-center text-center'>DEEZER</div>
              </a>
            </div>
          </div>

        </div>

      </section>
    </>
  )
}

export default App
