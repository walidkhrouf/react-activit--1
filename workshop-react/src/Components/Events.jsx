import React, { useEffect, useState } from 'react';
import Event from './Event';
import eventsData from '../Data/events.json';

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  const handleBookEvent = (index) => {
    setEvents((prevEvents) => {
      const updatedEvents = [...prevEvents];
      const event = { ...updatedEvents[index] };

      if (event.nbTickets > 0) {
        event.nbParticipants += 1;
        event.nbTickets -= 1;
        alert('Booked an event');
      } else {
        alert('No tickets available');
      }

      updatedEvents[index] = event;
      return updatedEvents;
    });
  };

  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {events.map((event, index) => (
          <Event
            key={index}
            event={event}
            onBook={() => handleBookEvent(index)}
          />
        ))}
      </div>
    </>
  );
}

export default Events;