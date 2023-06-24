// Write your code here
import './index.css'

const registrationStatusConstants = {
  registered: 'REGISTERED',
  closed: 'REGISTRATIONS_CLOSED',
  open: 'YET_TO_REGISTER',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventId, eventsList} = props
  const activeEvent = eventsList.filter(
    eachItem => eachItem.id === activeEventId,
  )[0]

  if (activeEventId === '') {
    return (
      <p className="empty-active">
        Click on an event, to view its registration details
      </p>
    )
  }
  switch (activeEvent.registrationStatus) {
    case registrationStatusConstants.registered:
      return (
        <div className="active-container">
          <img
            alt="registered"
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png "
            className="register-image"
          />
          <h1 className="active-event-title">
            You have already registered for the event
          </h1>
        </div>
      )

    case registrationStatusConstants.closed:
      return (
        <div className="active-container">
          <img
            alt="registrations closed"
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
            className="register-image"
          />
          <h1 className="active-event-title">Registrations Are Closed Now!</h1>
          <p className="active-event-desc">
            Stay tuned. We will reopen registrations soon!
          </p>
        </div>
      )

    case registrationStatusConstants.open:
      return (
        <div className="active-container">
          <img
            alt="yet to register"
            src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
            className="register-image"
          />

          <p className="active-event-desc">
            A live performance brings so much to your relationship with dance.
            Seeing dance live can often make you fall totally in love with this
            beautiful art form
          </p>
          <button type="button" className="register-button">
            Register Here
          </button>
        </div>
      )

    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
