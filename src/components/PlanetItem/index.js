// Write your code here
import './index.css'

const PlanetsItem = props => {
  const {data} = props
  const {name, imageUrl, description} = data
  console.log(`planet${name}`)
  return (
    <div className="planet-container">
      <img src={imageUrl} alt={`planet ${name}`} className="image-size" />
      <h1 className="planet-name">{name}</h1>
      <p className="planet-description">{description}</p>
    </div>
  )
}

export default PlanetsItem
