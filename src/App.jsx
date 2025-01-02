import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './screens/Home'
import Mappools from './screens/Mappools'
import Info from './screens/Info'
import Staff from './screens/Staff'
import Footer from './components/Footer';
import Register from './screens/Register';
import Login from './screens/Login';
import Players from './screens/Players';
import Payment from './screens/Payment';
import PaymentConfirmation from './screens/PaymentConfirmation';
import NotFound from './screens/NotFound';
import { ToastContainer } from 'react-toastify';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const location = useLocation();
  return (
      <div className='bg-logan-500 text-logan-900'>
        <Navbar />
        <ToastContainer />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="/mappools" element={<Mappools stage={0}/>} />
            <Route path="/mappools/qualifiers" element={<Mappools stage={0}/>} />
            <Route path="/mappools/grandfinals" element={<Mappools stage={1}/>} />
            <Route path="/mappools/testing" element={<Mappools stage={2}/>} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/register" element={<Register />} />
            <Route path="/register/payment" element={<Payment />} />
            <Route path="/register/payment/confirmation" element={<PaymentConfirmation />} />
            <Route path="/players" element={<Players />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
        <footer>
          <Footer className="absolute bottom-0 left-0"/>
        </footer>
      </div>
  );
};

export default App;

