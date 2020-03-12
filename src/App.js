import React from "react";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Advantages from "./components/Advantages/Advantages";
import Scalability from "./components/Scalability/Scalability";
import Description from "./components/Description/Description";
import Responsiveness from "./components/Responsiveness/Responsiveness";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Advantages />
      <Scalability />
      <Description />
      <Responsiveness />
      <Footer />
    </div>
  );
}

export default App;
