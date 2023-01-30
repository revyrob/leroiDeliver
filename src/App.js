import "./App.css";
import Nav from "./components/Nav/Nav";
import Banner from "./components/Banner/Banner";
import Serv from "./components/Serv/Serv";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Serv />
      <Contact />
    </div>
  );
}

export default App;
