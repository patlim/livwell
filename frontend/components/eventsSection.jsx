import moment from 'moment';
import styled from 'styled-components';

const EventsSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  width: 100%;
  max-width: 650px;
  margin: auto;
`

const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const EventsSection = ({ events }) => {
  return (
    <EventsSectionContainer>
      {events.map((event, index) => (
        <div data-scroll-fade key={index}>
          <h3 className='h4'>{event.title}</h3>
          <DateContainer>
            <p>{moment(event.date).format('Do MMMM')}</p>
            <p>{event.location}</p>
          </DateContainer>
          <p>{moment(event.date).format('h:mm a')}</p>
          <p>{event.description}</p>
        </div>
      ))}
    </EventsSectionContainer>
  );
};

export default EventsSection;
