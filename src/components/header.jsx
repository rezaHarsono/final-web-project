import React from "react";

function Header() {
  return (
    <div className="absolute top-0 w-screen">
      <nav className=" p-5 bg-slate-800 justify-between">
        <a className=" text-right mr-5 text-blue-100 font-caveat font-bold text-3xl hover:text-white" href="/">
          Ghaza
        </a>
        <a className=" text-right text-blue-100 font-bold text-xl hover:text-white mr-4" href="/ghavio">
          Ghavio
        </a>
        <a className=" text-right text-blue-100 font-bold text-xl hover:text-white mr-4" href="/reza">
          Reza
        </a>
        <a className=" text-right text-blue-100 font-bold text-xl hover:text-white" href="/Contact">
          Contact Us
        </a>
      </nav>
    </div>
  );
}

export default Header;
