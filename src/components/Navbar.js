import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-navbar-bg bg-cover p-5 rounded-b-xl">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-banana-mania-100 text-2xl font-head">o!CBS</div>
        <ul className="flex space-x-8 font-head text-logan-800">
          <li><a href="#home" className="">Home</a></li>
          <li><a href="#info" className="">Info</a></li>
          <li><a href="#mappools" className="">Mappools</a></li>
          <li><a href="#staff" className="">Staff</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
