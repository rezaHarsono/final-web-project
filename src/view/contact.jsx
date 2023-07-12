import React from "react";
import backgroundImage from "../components/images/background.jpg";
import instagram from "../components/images/instagram.png";
import facebook from "../components/images/facebook.png";
import gmail from "../components/images/gmail.png";

const contact = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="w-max-screen h-screen" style={containerStyle}>
      {
        <div className="container pt-14">
          <h1 className="font-caveat text-8xl text-white mt-16">CONTACT US</h1>
          <div className="grid grid-cols-2 my-auto items-center justify-center">
            <div className="container w-96 h-96 border-2 mx-auto mt-10 rounded-xl bg-blue-600">
              <div className="mt-10"><a className="font-caveat text-5xl text-white" href="/reza">Reza</a></div>
              <ul>
                <li className="hover:scale-110 transition-[150]">
                  <a className="ml-32 mt-10 gap-3 flex text-white font-caveat text-2xl" href="">
                    <img className="w-10" src={instagram} alt="" />
                    Instagram
                  </a>
                </li>
                <li className="hover:scale-110 transition-[150]">
                  <a className="ml-32 mt-10 gap-3 flex text-white font-caveat text-2xl" href="">
                    <img className="w-10" src={facebook} alt="" />
                    Facebook
                  </a>
                </li>
                <li className="hover:scale-110 transition-[150]">
                  <a className="ml-32 mt-10 gap-3 flex text-white font-caveat text-2xl" href="">
                    <img className="w-10" src={gmail} alt="" />
                    Gmail
                  </a>
                </li>
              </ul>
            </div>

            <div className="container w-96 h-96 border-2 mx-auto mt-10 rounded-xl bg-blue-600">
              <div className="mt-10"><a className="font-caveat text-5xl text-white p-3 rounded-full hover:border-2" href="/ghavio">Ghavio</a></div>
              <ul>
                <li className="hover:scale-110 transition-[150]">
                  <a className="ml-32 mt-10 gap-3 flex text-white font-caveat text-2xl" href="">
                    <img className="w-10" src={instagram} alt="" />
                    Instagram
                  </a>
                </li>
                <li className="hover:scale-110 transition-[150]">
                  <a className="ml-32 mt-10 gap-3 flex text-white font-caveat text-2xl" href="">
                    <img className="w-10" src={facebook} alt="" />
                    Facebook
                  </a>
                </li>
                <li className="hover:scale-110 transition-[150]">
                  <a className="ml-32 mt-10 gap-3 flex text-white font-caveat text-2xl" href="">
                    <img className="w-10" src={gmail} alt="" />
                    Gmail
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default contact;
