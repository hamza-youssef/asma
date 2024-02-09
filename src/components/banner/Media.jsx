import React from 'react'
import { FaInstagram, FaTiktok } from "react-icons/fa";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            
            <span className="bannerIcon">
              
              <a href="https://www.instagram.com/asma.ysf/" target="_blank"rel="noopener noreferrer"> <FaInstagram /></a> 
            </span>
            <span className="bannerIcon">
              
               <a href="https://www.tiktok.com/@asmaaajoseph?_t=8jdmax54nwb&_r=1" target="_blank" rel="noopener noreferrer" > <FaTiktok/></a> 
            </span>
          </div>
        </div>

      </div>
  )
}

export default Media