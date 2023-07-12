import React from "react";
import backgroundImage from "../components/images/background.jpg";
import instagram from "../components/images/instagram.png";
import github from "../components/images/github.png";
import threads from "../components/images/threads.png";

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
              <div className="mt-10">
                <a className="font-caveat text-5xl text-white p-3 rounded-full hover:border-2" href="/reza">
                  Reza
                </a>
              </div>
              <ul>
                <li className="hover:scale-110 transition-[150]">
                  <a className="ml-28 mt-10 gap-3 flex text-white font-caveat text-2xl" href="https://www.instagram.com/reza_sadja/">
                    <img className="w-10" src={instagram} alt="" />
                    @reza_sadja
                  </a>
                </li>
                <li className="hover:scale-110 transition-[150]">
                  <a className="ml-28 mt-10 gap-3 flex text-white font-caveat text-2xl" href="https://github.com/rezaHarsono">
                    <img className="w-10" src={github} alt="" />
                    rezaHarsono
                  </a>
                </li>
                <li className="hover:scale-110 transition-[150]">
                  <a className="ml-28 mt-10 gap-3 flex text-white font-caveat text-2xl" href="https://www.threads.net/@reza_sadja">
                    <img className="w-10" src={threads} alt="" />
                    @reza_sadja
                  </a>
                </li>
              </ul>
            </div>

            <div className="container w-96 h-96 border-2 mx-auto mt-10 rounded-xl bg-blue-600">
              <div className="mt-10">
                <a className="font-caveat text-5xl text-white p-3 rounded-full hover:border-2" href="/ghavio">
                  Ghavio
                </a>
              </div>
              <ul>
                <li className="hover:scale-110 transition-[150]">
                  <a className="ml-28 mt-10 gap-3 flex text-white font-caveat text-2xl" href="https://www.instagram.com/ghavio_rzky._/">
                    <img className="w-10" src={instagram} alt="" />
                    @ghavio_rzky._
                  </a>
                </li>
                <li className="hover:scale-110 transition-[150]">
                  <a className="ml-28 mt-10 gap-3 flex text-white font-caveat text-2xl" href="https://github.com/Ghavio1516">
                    <img className="w-10" src={github} alt="" />
                    ghavio1516
                  </a>
                </li>
                <li className="hover:scale-110 transition-[150]">
                  <a className="ml-28 mt-10 gap-3 flex text-white font-caveat text-2xl" href="https://www.threads.net/@ghavio_rzky._">
                    <img className="w-10" src={threads} alt="" />
                    ghavio1516
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
