import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Favitems from "../Favitems/Favitems";

const Auction = ({ data }) => {
  //  state for fav item and  their total price
  const [favItem, setFavItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // function to notify that item added and total price update also update state of favItem
  const itemClicked = (element) => {
    setFavItem([...favItem, element]);
    setTotalPrice((prev) => prev + element.currentBidPrice);
    addedNotify();
  };

  // notify function when items added first time
  const addedNotify = () =>
    toast.success("Item Added Successfully.", {
      position: "top-center",
      autoClose: 2000,
    });

 

  // delete fav item func

  const dltItem = (dltId) => {
    let priceTodeduct = 0;

    const rest = favItem.filter((element) => {
      if (element.id === dltId) {
        priceTodeduct = element.currentBidPrice;
      }

      return element.id !== dltId;
    });
    setFavItem(rest); 
    setTotalPrice((prev) => prev - priceTodeduct);//total price updata korsi when item get removed
  };
 

  return (
    <div className="px-[5%] py-[5%] bg-[#EBF0F5]">
      <ToastContainer />
      <h1 className="text-[#0E2954] text-3xl font-medium">Active Auctions</h1>
      <p className="text-xl text-[#000] opacity-80 mt-4">
        Discover and bid on extraordinary items
      </p>

      <div className="grid grid-cols-3 gap-5 mt-8">
        {/* table of items  */}

        <div className="overflow-x-auto bg-white rounded-3xl col-span-2 self-start">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-xl text-[#000] ">
                <th className="pt-8 pl-8">Items</th>
                <th className="pt-8  text-center ml-2">Current Bid</th>
                <th className="pt-8  text-center ml-2">Time Left</th>
                <th className="pt-8 pr-8 text-center ml-2">Bid Now</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {data.map((element) => (
                <tr key={element.id}>
                  <td>
                    <div className="flex items-center gap-5 ">
                      <img
                        className="w-20 h-20 object-cover"
                        src={element.image}
                        alt=""
                      />
                      <h3 className="text-lg text-[#0E2954]">
                        {element.title}
                      </h3>
                    </div>
                  </td>

                  <td className="text-[#0E2954] font-medium text-center">
                    ${element.currentBidPrice}
                  </td>
                  <td className="text-[#0E2954] font-medium text-center">
                    {element.timeLeft} left
                  </td>

                  <td>
                    <div className=" mx-auto cursor-pointer flex items-center justify-center">
                      {favItem.find((item) => item.id === element.id) ? (
                        <FaHeart
                         
                          className="text-red-600 w-7 h-7  cursor-not-allowed"
                        />
                      ) : (
                        <FaRegHeart
                          onClick={() => itemClicked(element)}
                          className="text-[#0E2954] w-7 h-7"
                        />
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* favourite items  */}

        <div className="bg-[#FFF] rounded-3xl self-start">
          <div className="flex items-center justify-center gap-3 px-8 pt-8 mb-4">
            <FaRegHeart className="w-7 h-7 " />
            <h2 className="text-[#0E2954] font-medium text-3xl">
              Favorite Items
            </h2>
          </div>

          <hr className="text-[#DCE5F3]" />

          {favItem.length === 0 ? (
            <div className="px-8 py-8 text-center">
              <h4 className="text-2xl font-medium">No favorites yet</h4>
              <p className="text-lg opacity-70 max-w[287px] mt-6">
                Click the heart icon on any item to add it to your favorites
              </p>
            </div>
          ) : (
            favItem.map((data) => (
              <Favitems key={data.id} data={data} dltItem={dltItem}></Favitems>
            ))
          )}

          <hr className="text-[#DCE5F3]" />

          <div className="flex justify-between px-8 py-8">
            <h4 className="text-2xl ">Total bids Amount</h4>
            <p className="text-2xl font-medium">
              $<span>{totalPrice}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auction;
