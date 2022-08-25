import React from 'react'
import { BsLinkedin, BsGithub } from "react-icons/bs";
import {SiLeetcode} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/pradeep-konda-447ba01b5/"
        target="_blank"
      ><BsLinkedin/></a>
      <a href="https://github.com/pradeeptrain9" target="_blank"><BsGithub/></a>
      <a href="https://leetcode.com/pradeeptrain9/" target="_blank"><SiLeetcode/></a>
    </div>
  );
}

export default HeaderSocials
