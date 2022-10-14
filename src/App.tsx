import { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  // useEffect(() => {
  //   axios.get("/register").then(res => console.log(res))
  // },[])
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

export default App;
