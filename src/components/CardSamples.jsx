import { useState } from 'react'

const CardSamples = ({ card }) => {
  return (
    <div className='card'>
      <a href={card.link} className='image-container'>
        <img className='image' src={card.image} alt='MTG Counting App' />
      </a>
      <div className='description'>
        <p className='span-2'>{card.desc}</p>
        <span className='line span-2'></span>
        <div className='made-with'>
          <img className='lang-logo' src={card.logo[0]} />
          <img className='lang-logo' src={card.logo[1]} />
          <img className='lang-logo' src={card.logo[2]} />
          <img className='lang-logo' src={card.logo[3]} />
        </div>
        <div className='demo-container'>
          <a href="#">DEMO HERE</a>
        </div>
      </div>
    </div>
  )
}

export default CardSamples