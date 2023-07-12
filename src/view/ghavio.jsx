import React, { useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import Slide1 from "../components/images/Ghavio/ghavio.jpg";
import Slide2 from "../components/images/pnj.png"

function Reza() {
  const slides = [
    {
      title: "Introduction",
      image: Slide1,
      quote:
        "Halo, perkenalkan nama saya Ghavio Rizky Ananda. Saya lahir di Jakarta, 21 Agustus 2004. Saat ini saya sedang berkuliah di Politeknik Negeri Jakarta angkatan 2022 jurusan Teknik Informatika dan Komputer dengan Prodi Teknik Informatika.",
    },
    {
      title: "Education",
      image: Slide2,
      quote:
        "Saat ini saya sedang berkuliah di Politeknik Negeri jakarta. Saya mulai masuk ke Politeknik Negeri Jakarta pada tahun 2022, sehingga saat ini saya sedang menjalani semester 2. Di PNJ saya mengikuti UKM Sahabat PNJ dan masuk di divisi website.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="container">
      <div className="container h-screen pt-28 bg-blue-500">
        <div className="relative group bg-slate-800 p-24 mx-20 mb-3 rounded-3xl w-max-[1400px] h-[550px]">
          <div className="absolute top-0 pl-4 my-10 left-1/2 text-white text-4xl mb-4 font-mono">{slides[currentIndex].title}</div>
          <div className="grid grid-cols-2 grid-rows-1 w-full h-full gap-10">
            <div style={{ backgroundImage: `url(${slides[currentIndex].image})` }} className="w-full h-full duration-500 bg-center bg-cover rounded-3xl"></div>
            <div className="text-white justify-center items-center my-auto text-left text-xl font-mono">{slides[currentIndex].quote}</div>
            <div name="arrow-left">
              <button className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y[-50%] left-5 text-2xl rounded-full p-2 bg-gray-700 text-white cursor-pointer">
                <svg onClick={prevSlide} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
              </button>
            </div>
            <div name="arrow-right">
              <button className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y[-50%] right-5 text-2xl rounded-full p-2 bg-gray-700 text-white cursor-pointer text-center">
                <svg onClick={nextSlide} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className={`text-xl cursor-pointer ${slideIndex === currentIndex ? "text-white" : "text-gray-700"}`}>
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reza;
