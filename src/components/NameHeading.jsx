import React from 'react'
import { FaAngleDown, FaRegEnvelope } from "react-icons/fa";
import { BsArrow90DegRight } from "react-icons/bs";


const NameHeading = () => {
  return (
    <div className='name-heading'>
      <div>
        <h1>alexander fogelmark</h1>
        <a href="mailto: alexander.fogelmark@gmail.com"><FaRegEnvelope className='envelope-icon' size={30} /></a>
      </div>
      <div className="info-text">
        <div className="student-info">
          <p>Frontend Developer Student | KYH Stockholm</p>
        </div>
        <div className='samples'>
          <p>Check out some samples</p>
          {/* <FaAngleDown className='arrow-icon' /> */}
          <BsArrow90DegRight size={30} className='arrow-icon' />
        </div>
      </div>
    </div>
  )
}

export default NameHeading