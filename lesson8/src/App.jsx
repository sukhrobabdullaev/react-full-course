import { useState } from "react";
import "./App.css";
import Controls from "./Controls";
import EventList from "./EventList";
import Modal from "./Modal";

const mt = {
  marginTop: 20,
};

const App = () => {
  const [isModal, setIsModal] = useState(false);
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "TechGenius",
      location: "Tashkent",
      date: "24.12.2023",
    },
  ]);
  const hanldeModal = () => {
    console.log("modal ochiladi");
    setIsModal(true);
  };

  return (
    <div style={mt} className="wrapper">
      <h1>EVENTS</h1>
      <EventList events={events} />
      <Controls hanldeModal={hanldeModal} />
      {isModal && (
        <Modal setIsModal={setIsModal} events={events} setEvents={setEvents} />
      )}
    </div>
  );
};

export default App;
