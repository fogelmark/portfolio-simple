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
        {/* <p>I love to create clean designs and fun apps that I can use in my every day life.</p>
        <p>I'm currently in school and looking for internship from 27th november - 4th april.</p>
        <p>So far I've learned basic HTML, CSS, SASS, JavaScript, React, UI/UX and backend development using NodeJS, express and mongoose.</p> */}
        {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, delectus ullam eum alias beatae officiis cumque. Fugiat blanditiis incidunt qui ipsa sapiente iusto harum inventore quaerat veniam reiciendis eos cumque, quam aut necessitatibus a, nesciunt dolorem autem amet pariatur dicta ea molestiae. Cumque aut amet dicta mollitia eum tenetur illo?</p> */}
        <p>I love to create clean designs and fun apps that I can use in my every day life. I'm currently in school and looking for an internship from 27th november - 4th april.
          So far I've learned basic HTML, CSS, SASS, JavaScript, React, UI/UX and backend development using NodeJS, express and mongoose.
        </p>
      </div>
    </div>
  );
}

export default Accordion;

