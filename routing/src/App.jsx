import React from 'react'
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Header from './component/Header';
import { Error } from './pages/Error';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App
