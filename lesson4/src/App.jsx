import Buttons from "./components/Buttons";
import Header from "./components/Header";
import List from "./components/List";
import "./App.css";

export default function App() {
  const text = "Tugilg'an  kunlar  ro'yati";
  const name="Shoxrux - 16.11"
  const isDone=true;
  return (
    <div>
      <Header text={text} />
      <List name={name} isDone={isDone}/>
      <Buttons />
    </div>
  );
}
