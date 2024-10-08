import Image from "../assets/img/Background.jpg";
import logo from "../assets/img/logo.png"
import image1 from "../assets/img/about_image/image-1.png"
import image2 from "../assets/img/about_image/image-2.png"
import image3 from "../assets/img/about_image/image-3.png"
import image4 from "../assets/img/about_image/image-4.png"
import image5 from "../assets/img/about_image/image-5.png"
import image6 from "../assets/img/about_image/image-6.jpg"
import image7 from "../assets/img/about_image/image-7.jpg"
import image8 from "../assets/img/about_image/image-8.jpg"
import React from "react";
const About = () => {
  return (
    <>
      <div className="border-2 w-full h-[40rem] relative">
        <img className="h-full w-full opacity-50" src={Image} alt="" />
        <div className="absolute top-[40%] left-[20%] flex items-center  w-[60%] text-gray-800 text-lg gap-4 ">
          <img className="h-32 " src={logo} alt="" />
          <h1 className="w-[70%]">We build innovative products & solutions that deliver unparalleled convenience to urban consumers.
            The best part? Every bit of your work at Swiggy will help elevate the lives of our users across India.</h1>
        </div>
      </div>
      <div className="flex items-center flex-col justify-center mt-28">
        <div className="text-2xl mb-5 md:text-3xl">"Empowering Futures, Together & Partnering for Progress!</div>
        <div className="flex flex-wrap justify-center gap-10 w-[70%] border-2 ">
          <img  className="grayscale hover:grayscale-0 transition-all ease-linear duration-200 w-56" src={image1} alt="" />
          <img  className="grayscale hover:grayscale-0 transition-all ease-linear duration-200 w-56" src={image2} alt="" />
          <img  className="grayscale hover:grayscale-0 transition-all ease-linear duration-200 w-56" src={image3} alt="" />
          <img  className="grayscale hover:grayscale-0 transition-all ease-linear duration-200 w-56" src={image4} alt="" />
          <img  className="grayscale hover:grayscale-0 transition-all ease-linear duration-200 w-56" src={image5} alt="" />
          <img  className="grayscale hover:grayscale-0 transition-all ease-linear duration-200 w-56" src={image6} alt="" />
          <img  className="grayscale hover:grayscale-0 transition-all ease-linear duration-200 w-56" src={image7} alt="" />
          <img  className="grayscale hover:grayscale-0 transition-all ease-linear duration-200 w-56" src={image8} alt="" />
        </div>
      </div>
      
    </>
  )
};

export default About;
