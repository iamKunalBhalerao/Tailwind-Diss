import "./App.css";
import Container from "./components/Container";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="layout">
        <Container>
          <div className="left-line" />
          <div className="right-line" />
          <Navbar />
          <Hero />
          <div className="hero-img-container">
            <img src="/heroimg.webp" alt="Hero Image" className="hero-img" />
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
