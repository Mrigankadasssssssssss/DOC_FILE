import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} className='w-60 h-72 rounded-[45px] bg-zinc-900/80 text-white py-8 px-9 relative overflow-hidden'>
      <FaRegFileAlt/>
      <p className='text-sm font-semibold mt-6'>
       {data.description} 
      </p>
      <div className='absolute footer bottom-0 left-0  w-full  '>
        <div className='flex justify-between items-center mb-3 py-4 px-9'>
            <h5>{data.fileSize}</h5>
            <span className='flex items-center justify-center w-7 h-7 rounded-full bg-zinc-600'>
                {data.close ? <IoClose/> : <GoDownload size="0.8rem" color='#fff' />}
            </span>
        </div>
        {data.tag.isOpen ? (
          <div className={`tag w-full py-4 ${data.tag.tagColor === "green"?"bg-green-600":"bg-blue-600"}`}>
            <h3 className='text-sm font-semibold text-center'>{data.tag.tagTitle}</h3>
          </div>
        ):null
        }
        
      </div>
    </motion.div>
  )
}

export default Card
