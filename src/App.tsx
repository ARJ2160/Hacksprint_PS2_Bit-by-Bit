import { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Register from './components/Register';

function App() {
  return (
    <div className='bg-bgColor'>
      <Navbar />
      <Hero />
      <Register />
    </div>
  );
}

export default App;
