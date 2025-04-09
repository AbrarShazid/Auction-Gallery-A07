import React, { useEffect, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Auction from "./Components/Active Auction And Fav/Auction";
import Footer from "./Components/Footer/Footer";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <div className="min-h-screen">
        <Navbar></Navbar>
        <Banner></Banner>
      </div>

    


      <Auction data={data}></Auction>
     

    


      <Footer></Footer>
    </>
  );
}

export default App;