import React from "react";
import { Abount, Avatar, Below, Buttonn, Contain, Containerr, Desc, Section, Up, Vector } from "./Styled";
import Vector1 from "../assets/img/Vector1.png";
import Vector2 from "../assets/img/Vector2.png";
import Avatar2 from '../assets/img/Avatar2.png'
import Download from '../assets/img/download.svg'
import CV from "../assets/img/CV-Frontend.pdf";
import Skills from "./Skills";

function AbountMe() {
  return (
    <Section>
     
      <Containerr className=" flex-col">
        

      <Up className="pb-0 mb-0">
       

        <div className="relative">
        <Vector src={Vector1} className="" />
        <Vector src={Vector2} />
        <Avatar src={Avatar2} className=""/>

        <Abount className="">
        Hello! I'm Diego Morin, a web designer/developer focused on creating great web experiences. Design and coding have been my passion since the days I started working with computers, but I found myself in web design/development since 2016. I enjoy creating beautifully designed, intuitive and functional websites.
        </Abount>
        <Buttonn>Download CV
            <a href={CV} target="_black">
              
              <img src={Download} alt="" style={{ fill: "#fff" }} />
              
              </a>
        </Buttonn>
        </div>
        
      </Up>
      
      <Below >
      <Skills/>
      </Below>
      </Containerr>
    </Section>
  );
}

export default AbountMe;
