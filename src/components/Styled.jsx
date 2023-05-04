import React from "react";
import background from "../assets/img/bg.jpeg";
import styled from "styled-components";

// Estilos del NavBar/

export const Container = styled.div`
  color: white;
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  background: url(${background});

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const NavBarr = styled.div`
  width: 1400px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  font-family: "Lexend", sans-serif;
  font-size: 18px;
`;

export const Button = styled.button`
  background-color: #da4ea2;
  width: 10rem;

  height: 2.75rem;
  border-radius: 6px;
`;

export const Link = styled.a`
  align-items: center;
  justify-content: center;
  padding: 8px 0;
`;

// Boton del modo oscuro//

// Banner //

export const Section = styled.section`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  scroll-snap-align: center;
`;

export const Containerr = styled.div`
  height: 100vh;
  width: 1400px;
  display: flex;
  align-items: center;

  justify-content: space-between;
`;
export const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

export const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding-top: 25px;
`;

export const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

export const Right = styled.div`
  flex: 3;
  position: relative;
`;

export const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;
// About me Section //

export const Up = styled.div`
  padding-top: 15px;
  display: flex;
  align-items: center;
`;
export const Below = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;

  margin-bottom: 15px;
`;

export const Abount = styled(Desc)`
  width: 1200px;
  padding-left: 300px;
  padding-top: 40px;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 147.5%;

  line-height: 2rem;
`;

export const Buttonn = styled(Button)`
  font-weight: 500;

  width: 170px;
  padding: 10px;
  margin: 25px;
  margin-left: 300px;
  display: flex;
  align-items: flex-start;
  gap: 15px;
  border-radius: 5px;
`;

export const Vector = styled.img`
  height: 250px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

export const Contain = styled.div`
  position: relative;
`;

export const Avatar = styled(Vector)`
  padding-bottom: 25px;
  padding-right: 40px;
  width: 300px;
  z-index: 1;
`;
// Skills //

export const Banner = styled.div`
  background: rgba(66, 74, 92, 0.25);
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(15px);
  position: ;
  height: 450px;
  width: 1250px;
  box-shadow: 0px 12px 28px rgba(0, 0, 0, 0.2), 0px 2px 4px rgba(0, 0, 0, 0.1),
    inset 0px 0px 0px 1px rgba(255, 255, 255, 0.05);
`;
export default styled;
