import { useState } from 'react'
import NameHeading from './components/NameHeading'
import CardSamples from './components/CardSamples'

import leonImage from './assets/leon-portfolio.png'
import todoImage from './assets/todo-portfolio.jpg'
import weatherImage from './assets/weather-narrow.png'
import mtgCounter from './assets/counter-rotated.jpg'
import jsLogo from './assets/js-logo.png'
import cssLogo from './assets/css-logo.png'
import htmlLogo from './assets/html-logo.png'
import sassLogo from './assets/sass-logo.png'
import Socials from './components/Socials'
import Accordion from './components/Accordion'

const App = () => {

  const [cards, setCards] = useState([
    {
      id: 1,
      image: weatherImage,
      logo: [
        htmlLogo,
        cssLogo,
        jsLogo
      ],
      desc: 'Weather app with geo location.',
      link: 'https://fogel-weather-app.netlify.app'
    },
    {
      id: 2,
      image: mtgCounter,
      logo: [
        htmlLogo,
        cssLogo,
        jsLogo,
        sassLogo
      ],
      desc: 'Life points tracking mobile app.',
      link: 'https://stalwart-bavarois-e87624.netlify.app'
    },
    {
      id: 3,
      image: leonImage,
      logo: [
        htmlLogo,
        cssLogo,
        jsLogo,
        sassLogo
      ],
      desc: 'Unofficial LÉON artist page.',
      link: 'https://chipper-selkie-03c0b3.netlify.app'
    },
    {
      id: 4,
      image: todoImage,
      logo: [
        htmlLogo,
        cssLogo,
        jsLogo,
        sassLogo
      ],
      desc: 'Todo list with local storage.',
      link: 'https://alextodolist.netlify.app'
    },
  ])

  return (
    <div className='content'>
      <NameHeading />
      <div className="container">
        {
          cards.map(card => (
            <CardSamples card={card} key={card.id} />
          ))
        }
      </div>
      <Socials />
      {/* <Accordion /> */}
    </div>
  )
}

export default App