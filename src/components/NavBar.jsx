import React from "react";
import { Button, Link, NavBarr} from "./Styled";
import Logo from "../assets/img/logo.jpeg";
import github from '../assets/img/github.svg'
import linkedin from '../assets/img/linkedin.svg'
import telegram from '../assets/img/telegram.svg'

function NavBar() {
  return (
    <NavBarr>
      <div className="flex items-center gap-12">
        <img src={Logo} alt="Logo" className="h-12 bg-slate-500 rounded-full" />
        <ul className="flex gap-5 list-none ">
          <li>
            <Link href="#">Home</Link>
            </li>
          <li>
            <Link href="#">Skills</Link>
          </li>
          <li>
            <Link href="#">Projects</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="flex center gap-4">

        <Link href="https://github.com/Diegom30" target="_black">
        <img src={github} alt="Github-logo" className=" border-2 rounded-md" />
        </Link>
        <Link href="https://t.me/Diemr3" target="_blank" >
            <img src={telegram} alt="Telegram-logo" className=" border-2 rounded-md"/></Link>
            <Link href="https://www.linkedin.com/in/diegomorin30/" target="_blank"> 
            <img src={linkedin} alt="Linkedin-logos" className="  border-2 rounded-md "/></Link>

            <Button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Let's Connect</Button>
           
      </div>


    </NavBarr>
  );
}

export default NavBar;
