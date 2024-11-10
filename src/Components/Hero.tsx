import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="hero" className="min-h-screen bg-no-repeat bg-[url(/images/SKY-BLUE.jpg)] bg-left lg:bg-[15%] bg-cover"
    style={{backgroundSize: "20%"}}
    >
      <Navbar/>
      <div className="container grid lg:grid-cols-2 h-[calc(100hv-60px)]">
        <div className="hidden lg:block"></div>
        <div className="text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center">
          <div>
            <p  data-aos="flip-up">I'am </p>
            <p  data-aos="flip-up">Nazia</p>
            <p  data-aos="flip-up">Naseer</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
