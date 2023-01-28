// Write your code here
import Slider from 'react-slick'

import PlanetsItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="planetSlider" data-testid="planets">
      <h1 className="name">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(each => (
          <PlanetsItem data={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
