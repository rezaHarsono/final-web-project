import React from "react";
import backgroundImage from "../components/images/laptop2.jpg";

const home = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="w-max-screen h-screen" style={containerStyle}>
      {
        <div>
          <p className="text-center text-3xl font-bold text-gray-300 pt-10">Welcome!</p>
          <p className="text-center text-gray-400">Halo</p>
          <p>
            {" "}
            <img className="w-56 inline-block mr-28 my-20 rounded-full shadow-[4px_4px_4px_4px] shadow-slate-300" src="https://awsimages.detik.net.id/community/media/visual/2019/02/19/3fc2caf6-118c-457d-8a28-8868c1753fda.jpeg?w=600&q=90" alt="" />
            <img className="w-56 inline-block my-20 rounded-full shadow-[4px_4px_4px_4px] shadow-slate-100" src="https://awsimages.detik.net.id/community/media/visual/2019/02/19/3fc2caf6-118c-457d-8a28-8868c1753fda.jpeg?w=600&q=90" alt="" />
          </p>
          <p className="text-gray-100">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae placeat, dolore quae accusamus quod suscipit ad sunt deserunt aspernatur praesentium, incidunt saepe quos neque ab qui ipsum possimus aut necessitatibus.</p>
        </div>
      }
    </div>
  );
};

export default home;
