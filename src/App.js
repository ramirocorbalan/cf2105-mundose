import Landing from "./views/Landing";

import About from "./views/About";
import Services from "./views/Services";
import Contact from "./views/Contact";
import Products from "./views/Products";
//import "./App.css";
import "./styles/app.css";

function App() {
  return (
    <>
<div className="container-fluid">
  <div className="row" style={{border: "1px solid red", margin: "164px 0px", position: "relative"}}>
    <div style={{ top: "912px",
left: "0px",width: "32px", height: "384px", background: "var(--unnamed-color-e0752f) 0% 0% no-repeat padding-box",background:" #E0752F 0% 0% no-repeat padding-box",
opacity: "1"}}></div>
    <div className="col-md-2"></div>
    <div className="col-md-10 col-sm-12" >
        <div style={{border: "1px solid pink",marginBottom:"44px"}}>
          <h1>We Help Businesses Grow and Innovate</h1>
          <h2>We Help Businesses Grow and Innovate</h2>
        </div>
        <div style={{border: "1px solid green", width:"768px"}}>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
        </div>
    </div>
  </div>

<div className="row" style={{border: "1px solid red", margin: "164px 0px"}}>
    <div className="col-md-12" style={{border: "1px solid pink",marginBottom:"44px"}}>
      <h1>We Help Businesses Grow and Innovate</h1>
      <h2>We Help Businesses Grow and Innovate</h2>
    </div>
    <div className="col-md-12" style={{border: "1px solid green"}}>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
    </div>
  </div>
</div>

    <div className="principal">
      <section className="landing" id="landing">
        <Landing />
      </section>
      <section className="about" id="about">
        <About />
      </section>
      <section className="products" id="products">
        <Products />
      </section>
      <section className="services" id="services">
        <Services />
      </section>
      <section className="contact" id="contact">
        <Contact />
      </section>
      <footer>{/* {aca va el footer} */}</footer>
    </div>
    </>
  );
}

export default App;

// <Navbar></Navbar>
// <Landing></Landing>
// <About></About>
// <Products></Products>
// <Services></Services>
// <Contact></Contact>
