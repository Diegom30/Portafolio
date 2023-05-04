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
    animation: animate 2s infinite ease alternate;

    @keyframes animate {
      to {
        transform: translateY(30px);
      }
    }
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

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Containerr = styled.div`
  height: 100%;
  width: 1400px;
  display: flex;
  
  
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

export const Buttonn = styled(Button)`
  font-weight: 500;
  width: 50px;
  padding: 10px;
  display: flex;
  align-items: flex-start;
  gap: 15px;
  border-radius: 5px;
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
`

export default styled;
