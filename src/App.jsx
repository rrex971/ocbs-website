import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import Mappools from './screens/Mappools'
import Info from './screens/Info'
import Staff from './screens/Staff'
import Footer from './components/Footer';
import Register from './screens/Register';

const App = () => {
  return (
    <Router>
      <div className='bg-logan-500 text-logan-900'>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/mappools" element={<Mappools />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
