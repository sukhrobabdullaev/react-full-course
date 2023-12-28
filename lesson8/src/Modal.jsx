import { useState } from "react";

const Modal = ({ setIsModal, events, setEvents }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  const newEvent = {
    id: new Date().getTime(),
    name: name,
    location: location,
    date: date,
  };

  const handleCancel = () => {
    setIsModal((prev) => !prev);
  };
  const hanldeSave = (e) => {
    e.preventDefault();
    if (name && location && date) {
      setEvents([...events, newEvent]);
    }
    setIsModal((prev) => !prev);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" role="button" onClick={handleCancel}>
          &times;
        </span>
        <form className="form">
          <div>
            <label htmlFor="name">Event Name: </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="location">Location: </label>
            <input
              type="text"
              name="location"
              placeholder="location"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="date">DATE: </label>
            <input
              type="date"
              name="date"
              placeholder="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <button type="submit" onClick={hanldeSave}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
