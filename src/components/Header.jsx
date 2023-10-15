import React from "react";
import NavBar from "./Navbar";
import Hero from "./Hero";

const Header = () => {
  return (
    <div className='header-bg min-h-[803px] w-full'>
      <NavBar />
      <Hero />
    </div>
  );
};

export default Header;
