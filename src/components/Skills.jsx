import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Banner } from "./Styled";

import Meter from "../assets/img/meter3.svg";
import Meter2 from "../assets/img/meter2.svg";
import Meter3 from "../assets/img/meter1.svg";
function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Banner className=" rounded-[64px] text-center p-[30px] ">
      <div className="flex justify-center">
        <div className="w-full max-w-screen-lg">
          
            <h2 className="text-3xl font-bold">Skills</h2>
            <p className="text-gray-300 text-lg tracking-wider leading-relaxed my-3 ">
            This section highlights my career skills, including programming languages and software, as well as soft skills like communication and problem solving. With my experience and skill set, I can be a valuable asset to any team or project.
            </p>
            <Carousel
              responsive={responsive}
              infinite={true}
              className="owl-carousel owl-theme skill-slider"
            >
              <div className="item flex flex-col items-center">
                <img
                  src={Meter}
                  alt="Image"
                  className=" w-2/4 mt-10"
                />
                <h5 className="text-xl font-semibold my-2">Web Development</h5>
              </div>
              <div className="item flex flex-col items-center">
                <img
                  src={Meter2}
                  alt="Image"
                  className=" w-2/4 mt-10"
                />
                <h5 className="text-xl font-semibold my-2">Brand Identity</h5>
              </div>
              <div className="item flex flex-col items-center">
                <img
                  src={Meter3}
                  alt="Image"
                  className=" w-2/4 mt-10"
                />
                <h5 className="text-xl font-semibold my-2">Front-End Design</h5>
              </div>
              <div className="item flex flex-col items-center">
                <img
                  src={Meter3}
                  alt="Image"
                  className=" w-2/4 mt-10"
                />
                <h5 className="text-xl font-semibold my-2">UI Desing</h5>
              </div>
             
            </Carousel>
          </div>
        </div>
      
    </Banner>
  );
}

export default Skills;
