import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import eventsData from '../Data/events.json';

function EventDetails() {
  const { eventName } = useParams(); 
  const event = eventsData.find((e) => e.name === eventName); 
  const image = import.meta.glob('../assets/*', { eager: true });
  function getImagePath(img) {
    return image[`../assets/${img}`]?.default;
  }
  if (!event) {
    return <div>Événement non trouvé</div>;
  }

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img src={getImagePath(event.img)} alt={event.title} />
      <Card.Body>
        <Card.Title>{event.name}</Card.Title>
        <Card.Text>
          {event.description}
          <br />
          Participants: {event.nbParticipants}
          <br />
          Available Tickets: {event.nbTickets}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default EventDetails;