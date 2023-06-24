// Write your code here
import './index.css'

const EventItem = props => {
  const {event, onRegister} = props
  const {id, imageUrl, name, location} = event
  const onClickBtn = () => {
    onRegister(id)
  }
  return (
    <li className="event-list-item">
      <button type="button" className="image-button" onClick={onClickBtn}>
        <img alt="event" src={imageUrl} className="event-image" />
      </button>
      <p className="event-item-title">{name}</p>
      <p className="event-item-location">{location}</p>
    </li>
  )
}
export default EventItem
