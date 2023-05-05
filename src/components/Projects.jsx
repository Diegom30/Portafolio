import React from "react";
import {
    
  Card,
  Card1,
  Card2,
  Card3,
  Card4,
  ContainerGrid,
  DesCard,
  Desc,
  DescProjets,
  ImgCard,
  Link,
  LinkCard,
  Logo,
  Section,
  Title,
  TitleCard,
} from "./Styled";
import Calculator from "../assets/img/calculator.jpg";
import Desing from "../assets/img/desing.png";
import JS from "../assets/img/Js-Logo.png";
import Dado from '../assets/img/Dado.png'
import Coming from '../assets/img/coming.svg'
import CommingSoon from '../assets/img/404.jpg'


function Projects() {
  return (
    <ContainerGrid>
        <DescProjets>Explore my latest creations and see the magic unfold. From web apps to design projects, this section showcases my passion for innovation and problem-solving. Take a look and let's bring your ideas to life</DescProjets>
        
        <Title className="text-center">Projects</Title>

        <Card1>
            <LinkCard href="https://diegom30.github.io/calculator/" target="_black">
                <ImgCard src={Calculator}/>
                <DesCard>
                    <TitleCard>Calculator JS</TitleCard>
                    <Logo src={JS}/>
                </DesCard>
            </LinkCard>
        </Card1>

        <Card2>
            <LinkCard href="#">
                <ImgCard src={CommingSoon}/>
                <DesCard>
                    <TitleCard>Coming Soon!</TitleCard>
                    <Logo src={Coming}/>
                </DesCard>
            </LinkCard>
        </Card2>

        <Card3>
            <LinkCard href="#">
                <ImgCard src={CommingSoon}/>
                <DesCard>
                    <TitleCard>Coming Soon!</TitleCard>
                    <Logo src={Coming}/>
                </DesCard>
            </LinkCard>
        </Card3>

        <Card4>
            <LinkCard href="https://diegom30.github.io/Dado-3D/" target="_black">
                <ImgCard src={Dado}/>
                <DesCard>
                    <TitleCard>Dado 3D</TitleCard>
                    <Logo src={JS}/>
                </DesCard>
            </LinkCard>
        </Card4>
    </ContainerGrid>
  );
}

export default Projects;
