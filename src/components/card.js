import React from 'react'
import {Link} from 'react-router-dom'
import camera from "../assets/icon/camera.png"
import video from "../assets/icon/video.png"
import propertyimage from "../assets/properties/properties1.jpg"
const Card = () => {
  return (
    <>
            
    <div className="overflow-hidden rounded-md drop-shadow-[0px_2px_15px_rgba(0,0,0,0.1)] bg-[#FFFDFC] text-center transition-all duration-300 hover:-translate-y-[10px]">
        <div className="relative">
            <Link to ="/propertiesdetails" className="block">
                <img src={propertyimage} className="w-full h-full" loading="lazy" width="370" height="266" alt="propertyimage"/>
            </Link>
            <div className="flex flex-wrap flex-col absolute top-5 right-5">
                <button className="flex flex-wrap items-center bg-[rgb(1,97,78,0.8)] p-[5px] rounded-[2px] text-white mb-[5px] text-xs"><img className="mr-1" src={camera} loading="lazy" width="13" height="10" alt="camera icon"/>07</button>
            <button className="flex flex-wrap items-center bg-[rgb(1,97,78,0.8)] p-[5px] rounded-[2px] text-white text-xs"><img className="mr-1" src={video} loading="lazy" width="14" height="10" alt="camera icon"/>08</button>
            </div>
            <span className="absolute bottom-5 left-5 bg-[#FFFDFC] p-[5px] rounded-[2px] text-secondary leading-none text-[14px] font-normal capitalize">for Sale</span>
        </div>

            <div className="py-[20px] px-[20px]">
                <h3><Link to ="/propertiesdetails" className="font-recoleta leading-tight text-[22px] xl:text-lg text-primary">Elite Garden Resedence.</Link></h3>
                <h4><Link to ="/propertiesdetails" className="font-light text-tiny text-secondary underline">253 Montril Street, South Town, Lalitpur</Link></h4>
                <span className="font-light text-sm">Added: 25 janurary, 2023</span>
                <div className="before:block before:absolute before:top-1/2 before:-translate-y-1/2 before:h-[1px] before:w-full before:z-[-1] before:bg-[#E0E0E0] relative"><span className="font-recoleta text-base text-primary px-[15px] bg-white">Price: 15000000</span></div>
                <p className="font-light">1230 Sq.fit - 4 Bed - 3 Bath - 2 Garage</p>
            </div>
        

    </div>        
    </>
  )
}

export default Card