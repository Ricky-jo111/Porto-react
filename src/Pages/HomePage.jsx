import React from 'react'
import profile from '../Components/img/profile.png'
import Typed from 'typed.js'
import './Css/HomePage.css'
import { useEffect, useRef } from 'react'

function Homepage() {

  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings : ["Web Development", "Front-End Web Development"],
      startDelay : 300,
      backDelay  : 300,
      typeSpeed  : 300,
      backSpeed  : 300,
      smartBackspace : true,
      showCursor : false, 
      loop : true,
    } )
  })
  return (
    <div>
      <div className="container">
        <div className="content">
            <div className="left">
                <h1>Hi There,<br/> I'm Ricky Jonathan</h1>
                <h4>I'm Into <span ref={el}></span></h4>
            </div>
            <div className="right">
                <img src={profile} alt=""/>
                <svg width="500" height="470" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#3D75B9" d="M29.8,-52.9C39.7,-45.9,49.4,-40,53.1,-31.4C56.8,-22.8,54.4,-11.4,54.2,-0.1C54.1,11.2,56.2,22.4,52.7,31.5C49.3,40.6,40.4,47.5,30.6,55C20.9,62.6,10.5,70.8,-1.8,73.9C-14.1,77.1,-28.2,75.2,-36.6,66.9C-44.9,58.6,-47.5,43.7,-53.1,31.5C-58.6,19.3,-67.1,9.6,-70.5,-1.9C-73.8,-13.5,-71.9,-26.9,-66.9,-40.1C-61.9,-53.3,-53.7,-66.1,-42.1,-72.1C-30.4,-78.1,-15.2,-77.1,-2.6,-72.6C10,-68,20,-59.9,29.8,-52.9Z" transform="translate(130 100)" />
                </svg>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage