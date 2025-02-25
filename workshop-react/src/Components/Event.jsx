import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

const Event = ({ event, onBook }) => {
  const [liked, setLiked] = useState(false);
  const image = import.meta.glob('../assets/*', { eager: true });

  function getImagePath(img) {
    return image[`../assets/${img}`]?.default;
  }

  const handleLikeDislike = () => {
    setLiked((prev) => !prev);
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img src={getImagePath(event.img)} alt={event.title} />
      <Card.Body>
        {/* Encapsulez le titre dans un Link */}
        <Link to={`/events/${event.name}`}>
          <Card.Title>{event.name}</Card.Title>
        </Link>
        <Card.Text>
          {event.description}
          <br />
          Participants: {event.nbParticipants}
          <br />
          Available Tickets: {event.nbTickets}
        </Card.Text>
        <Button
          variant={liked ? 'danger' : 'secondary'}
          onClick={handleLikeDislike}
        >
          {liked ? 'Dislike' : 'Like'}
        </Button>
        <Button onClick={onBook} disabled={event.nbTickets <= 0}>
          Book an Event
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Event;