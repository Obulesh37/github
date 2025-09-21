import React from "react";
import Header from "./Components/header";
import "./App.css";
import Hero from "./pages/Hero";  
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./Components/Footer";
import Myskills from "./pages/Myskills";
import Resume from "./pages/Resume";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <About /> 
      <Myskills />
      <Resume/>
      <Contact />
      <Footer />
    </>
  );
}
export default App;