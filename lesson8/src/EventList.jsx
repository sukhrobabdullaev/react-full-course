import EventItem from "./EventItem";

const EventList = ({ events }) => {
  return (
    <div className="app">
      <EventItem events={events} />
    </div>
  );
};

export default EventList;
