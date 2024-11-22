import React from 'react';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='bg-lilac-500 text-logan-900'>
      <Navbar />
      <section id="home" className="p-8">
        <h1 className="text-3xl font-bold">osu! Chennai Beachside Showdown</h1>
      </section>
      <section id="info" className="p-8">
        <h1 className="text-3xl font-bold">Tournament Info</h1>
      </section>
      <section id="mappools" className="p-8">
        <h1 className="text-3xl font-bold">Mappools</h1>
      </section>
      <section id="staff" className="p-8">
        <h1 className="text-3xl font-bold">Staffge</h1>
      </section>
    </div>
  );
};

export default App;
