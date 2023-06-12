import React, { useState } from 'react';
import { SlArrowDown, SlArrowLeft } from "react-icons/sl";

function Accordion() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleAccordion() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`accordion ${isOpen ? 'open' : ''}`}>
      <p className="accordion__button" onClick={toggleAccordion}>
        About me <SlArrowLeft className={`accordion-arrow ${isOpen ? 'rotate' : ''}`} />
      </p>
      <div className="accordion__content">
        <p>I love to create clean designs and fun apps that I can use in my every day life. I'm currently in school and looking for an internship from 27th november - 4th april.
          So far I've learned basic HTML, CSS, SASS, JavaScript, React, UI/UX and backend development using NodeJS, express and mongoose.
        </p>
      </div>
    </div>
  );
}

export default Accordion;

