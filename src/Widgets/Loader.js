import React from "react";
import LoaderGif from "../assets/loader.gif";

const Loader = () =>{
  return (
    <div className="w-screen h-screen bg-overlay flex fixed z-10">
    <div className=""></div>
      {/* <img src={LoaderGif} className="m-auto"/> */}
      {/* <iframe className="m-auto w-100 " src="https://lottie.host/embed/4737606a-bbe0-4f7b-b5d8-c9570bf6d32f/tHQMlYexCr.json"></iframe> */}
      <div className="bg-main w-5 h-5 ">
          Loading...
      </div>
    </div>
  )
}

export default Loader;