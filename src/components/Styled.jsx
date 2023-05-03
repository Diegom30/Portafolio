import React from "react";
import background from "../assets/img/bg.jpeg";
import styled from "styled-components";


// Estilos del NavBar/ 

export const Container = styled.div`
  color: #fff;
  height: 100vh;
  background: url(${background});
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
    animation: animate 2s infinite ease alternate;
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
    padding: 8px 0;
`
// Boton del modo oscuro//




export default styled;
