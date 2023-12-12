// Comonent - JSX code qaytaradi.
// JSX - bu javascript XML,
import Header from "./Header";
import Left from "./Left";
import Right from "./Right";
import "./App.css"


const App = () => {
  return (
    <div>
      <Header />
      <div style={{marginTop: 40}} className="main">
        <Left />
        <Right/>
      </div>
    </div>
  );
};

export default App;
