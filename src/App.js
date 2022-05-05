import Landing from "./views/Landing";
import Navbar from "./views/Navbar";
import About from "./views/About";
import Services from "./views/Services";
import Contact from "./views/Contact";
import Products from "./views/Products";
import "./App.css";

function App() {
  return (

      <div>
        <div className="landing" id="landing">
          <Navbar />
          <Landing />
        </div>
        <div className="about" id="about">
          <About />
        </div>
        <div className="products" id="products">
          <Products />
        </div>
        <div className="services" id="services">
          <Services />
        </div>
        <div className="contact" id="contact">
          <Contact />
        </div>
      </div>

  );
}

export default App;

// <Navbar></Navbar>
// <Landing></Landing>
// <About></About>
// <Products></Products>
// <Services></Services>
// <Contact></Contact>
