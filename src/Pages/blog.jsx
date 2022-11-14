import React from 'react'
import Navbar from '../Components/Navbar'
import one from '../Components/img/one.jpeg'
import two from '../Components/img/two.jpeg'
import three from '../Components/img/three.jpeg'
import four from '../Components/img/four.jpeg'
import './Css/Blog.css'

function Blog() {
  return (
    <div>
    <div className="container column">
       <div className="content"> 
            <div className="center">
                <h3>Welcome to my Blog</h3>
                <h3>I post any random Photo i took while on the streets</h3>
            </div> 
        </div>
        <div className="content">
            <img src={one}/>
            <img src={two}/>
            <img src={three}/>
            <img src={four}/>
        </div>
        
    </div>
    </div>
  )
}

export default Blog