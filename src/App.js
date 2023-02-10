import "./App.css";
import Nav from "./components/Nav/Nav";
import Banner from "./components/Banner/Banner";
import Serv from "./components/Serv/Serv";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Serv />
      <About />
      <Contact />
    </div>
  );
}

export default App;
