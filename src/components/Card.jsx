import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion"
function Card({data, reference}) {
  return (
    <motion.div 
    drag 
    dragConstraints={reference}
    whileDrag={{scale:1.2}}
    dragTransition={{bounceStiffness:100, bounceDamping:30}} 
    className="relative flex-shrink-0 w-60 h-72 overflow-hidden rounded-[40px] px-10 pt-5 bg-zinc-900/90 text-white">
        <FaRegFileAlt/>
        <p className='text-xs mt-5 font-semibold leading-tight'>{data.desc} </p>
        <div className="footer text-white absolute left-0 bottom-0 mb-0 w-full h-15 pt-3 ">
          <div className=" flex mt-2 items-center px-8 mb-3 justify-between">
          <h5>{data.filesize} </h5>
            
            <span className='w-7 h-7 bg-zinc-600 mb-3 p-1 rounded-full'> {data.close ? <IoCloseOutline/> :  <MdOutlineFileDownload/> }   </span>
          </div>
          {
            data.tag.isOpen && (
              <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600":"bg-green-600"} flex items-center justify-center`}>
              <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
            </div>
            ) 
          }
           
        </div>
        </motion.div >
  )
}

export default Card