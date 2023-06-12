
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
          <img className='lang-logo' src={card.logo[0]} loading="lazy" />
          <img className='lang-logo' src={card.logo[1]} loading="lazy" />
          <img className='lang-logo' src={card.logo[2]} loading="lazy" />
          <img className='lang-logo' src={card.logo[3]} loading="lazy" />
        </div>
      </div>
    </div>
  )
}

export default CardSamples