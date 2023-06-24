import React from "react";
import backgroundImage from "./images/laptop.jpg";

const background = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="w-screen h-screen container bg-blue-500 sm:bg-red-500" style={containerStyle}>
      {
        <div className="m-1">
          <p className="text-center text-3xl font-bold">Welcome!</p>
          <p className="text-center text-gray-400 pt-5">Halo</p>
          <p>
            {" "}
            <img className="w-56 inline-block mr-28 my-20 rounded-full" src="https://awsimages.detik.net.id/community/media/visual/2019/02/19/3fc2caf6-118c-457d-8a28-8868c1753fda.jpeg?w=600&q=90" alt="" />
            <img className="w-56 inline-block my-20 rounded-full" src="https://awsimages.detik.net.id/community/media/visual/2019/02/19/3fc2caf6-118c-457d-8a28-8868c1753fda.jpeg?w=600&q=90" alt="" />
          </p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae placeat, dolore quae accusamus quod suscipit ad sunt deserunt aspernatur praesentium, incidunt saepe quos neque ab qui ipsum possimus aut necessitatibus.</p>
        </div>
      }
    </div>
  );
};

export default background;
