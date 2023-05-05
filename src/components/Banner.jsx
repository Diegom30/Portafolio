import React, { Suspense, useEffect, useState } from "react";
import NavBar from "./NavBar";
import Line from "../assets/img/line.png";
import Avatar from "../assets/img/Avatar.png";

import {
  Buttonn,
  Containerr,
  Desc,
  Img,
  Left,
  Right,
  Section,
  WhatWeDo,
} from "./Styled";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { DirectionalLight } from "three";


function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDelting, SetIsDeleting] = useState(false);
  const toRotate = [
    "Web Developer",
    "Front-End Developer",
    "Back-End Developer",
    "Full-Stack Developer",
  ];

  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[1];
    let updatedtext = isDelting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedtext);

    if (isDelting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDelting && updatedtext === fullText) {
      SetIsDeleting(true);
      setDelta(period);
    } else if (isDelting && updatedtext === "") {
      SetIsDeleting(false);
      setLoopNum(setLoopNum + 1);
      setDelta(500);
    }
  };

  return (
    <Section>
      <NavBar />
      <Containerr>
        <Left>
          <h1 className=" text-7xl">Hi! {text}</h1>

          <WhatWeDo>
            <img src={Line} alt="" className="h-2 " />
            <h2 className=" text-[#da4ea2]">Welcomw to my Portfolio</h2>
          </WhatWeDo>
          <Desc>
            I take pleasure in crafting enchanting digital experiences that
            captivate and delight users at every touchpoint. Let me bring your
            most innovative ideas to life!
          </Desc>
        </Left>
        <Right>
        <Canvas>
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={1}/>
            <directionalLight position={[3, 2, 1]}/>
            <Sphere args={[1, 100, 200]} scale={2.5}>
              <MeshDistortMaterial
              color="#3d1c56"
              attach="material"
              distort={0.5}
              speed={2}/>
            </Sphere>
          </Suspense>

        </Canvas>
          <Img src={Avatar} />
        </Right>
      </Containerr>
    </Section>
  );
}

export default Banner;
