import React from "react";

const EventItem = ({ events }) => {
  return (
    <>
      {events.map((el) => {
        return (
          <div className="event-item" key={el.id}>
            <h3>
              <span>Name: </span>
              <span>{el.name}</span>
            </h3>
            <h3>
              <span>Location: </span>
              <span>{el.location}</span>
            </h3>
            <h3>
              <span>DATE: </span>
              <span>{el.date}</span>
            </h3>
            <div className="btns">
              <button type="button">❌</button>
              <button type="button">✏️</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default EventItem;
