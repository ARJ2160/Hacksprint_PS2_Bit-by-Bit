// import useFetch from './hooks/useFetch';
import { Hero, Navbar, SignIn, SignUp, BooksPage, BookDesc } from './components/index.ts';
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
          <Route exact path="/book/:isbn" element={<BookDesc />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
