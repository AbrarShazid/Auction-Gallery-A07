import React from "react";

const Banner = () => {
  return (
    <div className="bg-[url('/Banner-min.jpg')] min-h-[90vh] text-white   bg-cover bg-center  px-[5%] flex flex-col justify-center">
      <h1 className="text-5xl font-semibold max-w-[631px]">
        Bid on Unique Items from Around the World
      </h1>
      <p className="text-2xl font-light opacity-80 max-w-[642px] mt-4 mb-7">
        Discover rare collectibles, luxury goods, and vintage treasures in our
        curated auctions
      </p>
      <button className="hover:bg-[#FFD337]  w-fit bg-[#FFF]  py-4 px-8 text-[#010000] text-xl rounded-[35px] font-medium">
        Explore Auctions
      </button>
    </div>
  );
};

export default Banner;
