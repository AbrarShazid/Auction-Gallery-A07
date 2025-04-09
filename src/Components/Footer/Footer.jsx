import React from 'react';

const Footer = () => {
  return (
    <div className='flex flex-col  items-center mt-[5.5%] mb-[3.5%]'>
        <h1
        style={{ fontFamily: "Poppins, Helvetica, Arial, sans-serif" }}
        className="text-[#003EA4] text-4xl font-bold mb-3"
      >
        Auction<span className="text-[#FFD337]">Gallery</span>
      </h1>



          <ul className='flex gap-4 text-xl'>
            <li>Bid.</li>
            <li>Win.</li>
            <li>Own.</li>
          </ul>

          <ul style={{ fontFamily: "Poppins, Helvetica, Arial, sans-serif" }} className='flex gap-10 text-lg mt-5 mb-7'>
            <li>Home</li>
            <li>Auctions</li>
            <li>Categories</li>
            <li>How to works</li>
          </ul>
          <h4 className='text-lg'>© 2025 AuctionHub. All rights reserved.</h4>

   
    </div>
  );
};

export default Footer;