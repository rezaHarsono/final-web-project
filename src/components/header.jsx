import React from "react";
import _tailwind from "./tailwind.png";

function Header() {

  return (
    <div className="absolute top-0 w-screen">
      <nav className=" text-right pr-11 py-2 bg-slate-800">
        <a href="https://tailwindcss.com/docs/ ">
          <img src={_tailwind} className="object-scale-down h-12 w-12 inline mr-5 hover:scale-105 " />
        </a>
        <a className="mr-5 text-blue-100 font-bold hover:text-white" href="/">
          Home
        </a>
        <a className="text-blue-100 font-bold hover:text-white mr-4" href="/nama">
          Nama
        </a>
        <a className="text-blue-100 font-bold hover:text-white mr-4" href="/reza">
          Reza
        </a>
        <a className="text-blue-100 font-bold hover:text-white mr-4" href="/ghavio">
          Ghavio
        </a>
        <a className="text-blue-100 font-bold hover:text-white" href="/about">
          About Us!
        </a>
      </nav>
    </div>
  );
}

export default Header;
