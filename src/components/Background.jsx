import React from 'react'

const Background = () => {
  return (
    <div className='w-full h-screen fixed z-[2]'>
      <div className='absolute top-[5%] w-full flex justify-center text-xl text-zinc-500 py-9'>Documents.</div>
      <h1 className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tight font-semibold text-zinc-900'>DOCS.</h1>
    </div>
  )
}

export default Background
