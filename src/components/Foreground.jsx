import React, { useRef } from 'react';
import Card from './Card';


const Foreground = () => {

  const ref = useRef(null)

  const data = [{
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    fileSize:"0.9mb",
    close:true,
    tag:{isOpen:true,tagTitle:"Download Now",tagColor:"blue"}
  },{
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    fileSize:"0.9mb",
    close:false,
    tag:{isOpen:true,tagTitle:"Upload",tagColor:"green"}
  },{
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    fileSize:"0.9mb",
    close:true,
    tag:{isOpen:false,tagTitle:"Download Now",tagColor:"blue"}
  }]
  return (
    <div ref={ref} className='w-full h-full fixed top-0 left-0 z-[3] flex flex-wrap gap-11 p-7'>
        {data.map((item,index)=>(
          <Card data={item} reference={ref} />
        ))}
    </div>
  )
}

export default Foreground
