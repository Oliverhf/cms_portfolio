import React from 'react'
import Image from 'next/image'

const Author = ({author}) => {
  return (
    <div className='text-center mt-20 p-12 top-3 relative rounded-lg bg-blueSecondary'>
        <div className='absolute left-0 right-0 -top-14'>
        <Image 
          alt={author.name}
          unoptimized
          height="100px"
          width="100px"
          className='align-middle rounded-full'
          src={author.photo.url}
        />
        </div>
        <h3 className='text-white my-4 text-xl font-bold'>{author.name}</h3>
        <p className='text-white text-lg'>{author.bio}</p>      
    </div>
  )
}

export default Author