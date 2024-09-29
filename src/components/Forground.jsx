import React, { useRef, useState } from 'react'
import Card from './Card'
// import { motion } from "framer-motion"
// import { useState } from 'react'
function Forground() {
  const ref = useRef(null);
  const data = [
    {desc :"Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close:true,
      tag:{
        isOpen :true,
        tagTitle :"Download now",
        tagColor :'green'
      }
    },
    {desc :"Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close:true,
      tag:{
        isOpen :true,
        tagTitle :"Download now",
        tagColor :'green'
      }
    },
    {desc :"Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close:true,
      tag:{
        isOpen :false,
        tagTitle :"Download now",
        tagColor :'green'
      }
    },
    {desc :"Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close:true,
      tag:{
        isOpen :true,
        tagTitle :"Download now",
        tagColor :'blue'
      }
    },
  ]

  return (
    <div>
        <div ref={ref} className="w-full flex gap-10 p-5 flex-wrap fixed top-0 z-[3] left-50 h-full ">
          {
            data.map((item,index)=>(
              <Card data={item} reference={ref}/>
            ))
          }
        </div>
    </div>
  )
}

export default Forground