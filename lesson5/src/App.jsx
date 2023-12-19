import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./App.css";
import Lists from "./components/Lists/Lists";

const App = () => {
  const footer = "Footer";
  const royxat = ["Olma", "gilos", "yog", "non", "Gurgut"];

  return (
    <div className="wrapper">
      <Header />
      <Main royxat={royxat}>
        <Lists />
      </Main>
      <Footer footer={footer} />
    </div>
  );
};

export default App;
