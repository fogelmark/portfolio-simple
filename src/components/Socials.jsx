import React from 'react'

import { BsGithub } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";


const Socials = () => {
  return (
    <div className="socials">
      {/* <a href="https://github.com/fogelmark" target="_blank"><i className="fi-snsux3-github-alt"></i></a>
      <a href="https://www.linkedin.com/in/alexander-fogelmark-aa020524a/" target="_blank"><i className="fi-snsux3-linkedin"></i></a>
      <a href="https://discord.com/users/142662228917747713"><i className="fi-snsux3-discord-alt" target="_blank"></i></a> */}
      {/* <BsDiscord className='icon' size={50} /> */}
      <a href="https://github.com/fogelmark" target='_blank'>
        <BsGithub className='icon' size={50} />
      </a>
      <a href="https://www.linkedin.com/in/alexander-fogelmark-aa020524a/" target='_blank'>
        <GrLinkedinOption className='icon' size={50} />
      </a>
    </div>
  )
}

export default Socials