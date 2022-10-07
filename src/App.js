import React from 'react'
import "./App.css";
import Aboutus from "./components/Aboutus";
import Aim from "./components/Aim";
import Communities from "./components/Communities";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Objectives from "./components/Objectives";
import Spacer from "./components/Spacer";
import Team from "./components/Team";

export default function App() {
  return (
    <div className="">
      <Hero />
      <Spacer />
      <Aboutus />
      <Spacer />
      <Aim />
      <Spacer />
      <Objectives />
      <Spacer />
      <Events />
      <Spacer />
      <Team />
      <Spacer />
      <Communities />
      <Spacer />
      <Footer />
    </div>
  );
}

