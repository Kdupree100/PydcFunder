import React, {useState, useEffect} from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import { money } from '../assets';

const About = () => {
  return (
    <div className="text-white font-bold mt-20 flex flex-col p-4 rounded-[10px]"
     style={{ background: 'linear-gradient(to bottom, #c32148, #871319)' }}>
  About
  
  {/* <div className="flex mt-2" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
  <div className="flex justify-between justify-center w-full">
    <div className="text-4xl font-bold flex-basis: calc(33.33% - 1rem)" style={{ marginRight: '1rem' }}>Coach:</div>
    <div className="text-2xl flex-basis: calc(33.33% - 1rem);" style={{ marginRight: '1rem' }}>Dedicated</div>
    <div className="text-2xl flex-basis: calc(33.33% - 1rem);" style={{ marginRight: '1rem' }}>Disciplined</div>
    <div className="text-2xl">Down to Earth</div>
  </div>
      </div> */}
      
      <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/rOrsAo1qV7k"
        title="YouTube video player"
        frameBorder=""
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="mt-4"
      ></iframe>
    </div>
  )
}

export default About



{/* <img src={money} alt="Money" /> */}
