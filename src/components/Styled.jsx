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
  width: 100%;


  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  font-family: "Lexend", sans-serif;
  font-size: 18px;
  
  @media only screen and (max-width: 600px) {
    align-items: center;
    justify-content: center;
    
  }
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
  height: 100%;

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
scroll-snap-align: center;
@media only screen and (max-width: 768px) {
    height: 200vh;
  }
    

`;

export const Containerr = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
padding-left: 6rem;
    padding-right: 6rem;
  justify-content: space-between;
  

  
`;
export const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  @media only screen and (max-width: 900px) {
    flex: 1;
    align-items: center;
    
  }
  
`;
export const TitleBanner = styled.h1`
  font-size: 4.5rem;
    line-height: 1;

    @media only screen and (max-width: 600px) {
      
      justify-content: center;
  }
`

export const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding-top: 25px;
`;

export const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 800px) {
      
      display: none;
    }

`;

export const Right = styled.div`
  flex: 3;
  height: 600px;

  position: relative;
  @media only screen and (max-width: 900px) {
    flex: 0;
    visibility: hidden;
    
  }
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
  @media only screen and (max-width: 850px) {
    width: 100%;
  }
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

   @media only screen and (max-width: 850px) {
    display: none;
  }
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
position: relative;
  height: 450px;
  width: 1250px;
  box-shadow: 0px 12px 28px rgba(0, 0, 0, 0.2), 0px 2px 4px rgba(0, 0, 0, 0.1),
    inset 0px 0px 0px 1px rgba(255, 255, 255, 0.05);
`;

// Projects //

export const ContainerGrid = styled.div`
height: 100vh;
display: grid;
grid-template-columns: repeat(6, 16.67%);
  grid-template-rows: repeat(4, 25%);
  gap: 5px;

scroll-snap-align: center;
@media only screen and (max-width: 768px) {
    height: 200vh;
  }
`

// Card, En este orden //
export const Card = styled.div`

  width: 430px;
  height: 310px;
  display: flex;
  flex-direction: column;

  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 15px;
  border-radius: 24px;
  background: radial-gradient(
    100% 100% at 50% 0%,
    rgba(255, 255, 255, 0.233) 0%,
    rgba(255, 255, 255, 0.055) 100%
  );
  box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.04),
    0px 1.5px 4px rgba(0, 0, 0, 0.12), 0px 4px 8px rgba(0, 0, 0, 0.6);
`;

export const LinkCard = styled.a``;

export const ImgCard = styled.img`
  padding: 10px;
  border-radius: 24px;
  height: 250px;
  width: 100%;
`;

export const DesCard = styled.div`
display: flex;
justify-content: space-between;
  margin-top: 5px;
  margin-left: 1.25rem;
  margin-right: 1.25rem;
`;

export const TitleCard = styled.h1`
padding-top: 8px;
`

export const Logo = styled.img`
  height: 2rem;
  border-radius: 1.5rem;
` 
export const Card1 = styled(Card)`
margin: 25px;
grid-column: 5 / 6;
  
`
export const Card2 = styled(Card)`
margin: 25px;
margin-left: 100px;
grid-column: 3 / 5;
grid-row: 1 / 2;
  @media only screen and (max-width: 1400px) {
    display: none;
  }
  
`
export const Card3 = styled(Card2)`
margin: 25px;
margin-left: 100px;
grid-column: 3 / 5;
grid-row: 3 / 4;
  
`
export const Card4 = styled(Card)`
margin: 25px;
grid-column: 5 / 6;
grid-row: 3 / 4;
  
`
export const Title = styled.h1`
font-weight: 600;
font-size: 48px;
line-height: 60px;
margin-top: 45px;
`

export const DescProjets = styled(Desc)`
margin-left: 30px;
margin-top: 25px;
  grid-column: 1 / 3;
 grid-row: 2 / 3;
`


// Contact //
export const Contacto = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`
export const LeftContact = styled.div`
    flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const TitleContact = styled.h1`
  font-weight: 500;
  font-size: 25px;
`;

export const Form = styled.form`
width: 500px;
  display: flex;
  color: #fff;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

export const InputContact = styled.input`
   padding: 20px;
  color: #000;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

export const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  color: #000;
  background-color: #e8e6e6;
`;

export const ButtonContact = styled.button`
 background-color: #da4ea2;
  color: #fff;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px; `

export const RightContact = styled.div`
flex: 1;



  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export default styled;
