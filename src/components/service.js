import React from 'react'
import serviceimage from '../assets/service/service1.png'
const Service = () => {
  return (
    <>
    
    <div className="relative group">
    <a href="properties-details.html" className="block">
        <img src={serviceimage} className="w-full h-full block mx-auto rounded-[6px_6px_0px_0px]" loading="lazy" width="270" height="290" alt="@@title"/>
        <div className="drop-shadow-[0px_2px_15px_rgba(0,0,0,0.1)] hover:drop-shadow-[0px_8px_20px_rgba(0,0,0,0.15)] bg-[#FFFDFC] rounded-[0px_0px_6px_6px] px-[25px] py-[25px]">
            <h3 className="font-recoleta font-normal text-[24px] xl:text-lg text-primary group-hover:text-secondary transition-all mb-[5px]">Buy property<span className="text-secondary group-hover:text-primary">.</span> </h3>
            <p className="font-light text-tiny">Provide prorpery Sale options opportunity to find the best</p>
        </div>
    </a>
    </div>
    
    </>
  )
}

export default Service