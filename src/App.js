import React from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Advantages from "./components/Advantages";
import Scalability from "./components/Scalability";
import Description from "./components/Description";
import Responsiveness from "./components/Responsiveness";
import Footer from "./components/Footer";
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
