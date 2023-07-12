import React from "react";
import backgroundImage from "../components/images/background.jpg";
import reza from "../components/images/Reza/reza.png";
import ghavio from "../components/images/Ghavio/ghavio2.png";

const home = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="w-max-screen h-screen" style={containerStyle}>
      {
        <div className="grid grid-cols-3 my-auto items-center justify-center">
          <div className="w-[27rem] h-[580px] ml-10 group relative mt-24 hover:shadow-2xl shadow-white rounded-3xl group border-2">
            <a className="absolute w-full h-full top-0 left-0 z-10" href="/reza">
              <span></span>
            </a>
            <img className="bg-cover transition duration-200 group-hover:scale-125 my-56 rounded-full" src={reza} alt="" />
            <p className="opacity-0 font-caveat group-hover:opacity-100 transition absolute top-0 mx-24 text-9xl text-white">Reza</p>
          </div>

          <div>
            <p className="text-center text-8xl font-bold text-white pt-10 font-caveat">Welcome To Our Website</p>
          </div>

          <div className="w-[27rem] h-[580px] ml-10 group relative mt-24 hover:shadow-2xl shadow-white rounded-3xl group border-2">
            <a className="absolute w-full h-full top-0 left-0 z-10" href="/ghavio">
              <span></span>
            </a>
            <img className="w-[20rem] bg-cover transition duration-200 group-hover:scale-125 my-40 ml-10" src={ghavio} alt="" />
            <p className="opacity-0 font-caveat group-hover:opacity-100 transition absolute top-0 ml-[3rem] text-9xl text-white">Ghavio</p>
          </div>
        </div>
      }
    </div>
  );
};

export default home;
