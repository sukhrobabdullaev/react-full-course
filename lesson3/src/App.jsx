import Header from "./Header";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";
import "./App.css";

const App = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <div className="flex">
          <MainLeft />
          <MainRight />
        </div>
      </div>
    </div>
  );
};

export default App;
