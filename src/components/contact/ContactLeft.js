import React from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Asma Youssef</h3>
        <p className="text-lg font-normal text-gray-400">Artist</p>
        <p className="text-base text-gray-400 tracking-wide">
          🎨 Artist | Explorer of colors | Creator of imaginary worlds | Based
          in Nabeul 🌍 | Inspired by life and nature | International exhibitions
          | Join me on my artistic journey! #Artist #Painter #Creativity 🖼️✨
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+216 58958363</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">asma.yoousef@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
          <a href="https://www.instagram.com/asma.ysf/" target="_blank" rel="noopener noreferrer"> <FaInstagram /></a> 
          </span>
          <span className="bannerIcon">
          <a href="https://www.tiktok.com/@asmaaajoseph?_t=8jdmax54nwb&_r=1" target="_blank" rel="noopener noreferrer"> <FaTiktok/></a> 
          </span>
 
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
