// import useFetch from './hooks/useFetch';
import { Hero, Navbar, SignIn, SignUp, BooksPage } from './components/index.ts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route exact path='/signin' element={<SignIn />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/books' element={<BooksPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
