import React from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Advantages from "./components/Advantages";
import Scalability from "./components/Scalability";
import Description from "./components/Description";
import Responsiveness from "./components/Responsiveness";
import Displays from "./components/Displays";
import Platforms from "./components/Platforms";
import Information from "./components/Information";
import Footer from "./components/Footer";
import GoTop from "./components/GoTop";
import Gear from "./components/Gear";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Advantages />
      <Scalability />
      <Responsiveness />
      <Description />
      <Displays />
      <Platforms />
      <Information />
      <Footer />
      <GoTop />
      <Gear />
    </div>
  );
}

export default App;
