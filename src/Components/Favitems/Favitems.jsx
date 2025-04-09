import React from "react";
import { RxCross2 } from "react-icons/rx";
import { ToastContainer, toast } from "react-toastify";

const Favitems = ({ data, dltItem }) => {
  const { id, title, currentBidPrice, bidsCount, image } = data;

  // remove item function

  const removeFucntion = (id) => {
    removeItem();
    dltItem(id);
  };
  // remove item
  const removeItem = () =>
    toast.warning("Item Removed Successfully.", {
      position: "top-center",
      autoClose: 2000,
    });

  return (
    <div className="px-3">
      <div className="grid grid-cols-10 items-center py-3 ">
        <img className="w-20 h-20 object-cover col-span-2" src={image} alt="" />

        <div className="text-[#0E2954] col-span-7 ml-4 ">
          <h3 className="overflow-hidden">{title}</h3>
          <div className="flex gap-5  mt-2">
            <h4>${currentBidPrice}</h4>
            <p>Bids: {bidsCount}</p>
          </div>
        </div>

        <RxCross2
          onClick={() => removeFucntion(id)}
          className="w-6 h-6 col-span-1"
        />
      </div>
      <hr className="text-[#DCE5F3]" />
    </div>
  );
};

export default Favitems;
