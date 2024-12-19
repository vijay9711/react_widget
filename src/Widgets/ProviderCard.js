import React from "react";

const ProviderCard = ({ watcher }) => {
  return (
    <div className="z-10 flex group bg-opacity-20 h-auto cursor-pointer rounded-lg  transition-all  hover:bg-opacity-0 relative">
      <span className=" flex ">
        {watcher && watcher.slice(0, 3
        ).map((item, index) => {
          return (
            <div key={index} className={`${index == 0 ? '' : '-ml-6'} w-12 rounded-full z-10 bg-cover h-12 group-hover:opacity-0`} style={{ backgroundImage: `url(${process.env.REACT_APP_IMAGE_URL + item.logo_path})` }}></div>
          )
        })}
      </span>
      <span className="hidden group-hover:block px-3 absolute left-0 top-0 duration-700 transition-[display] flex-col bg-textColor rounded-lg bg-opacity-100 shadow-lg max-h-96 w-96 overflow-y-auto text-lg no-scrollbar xs:bottom-0">
        {watcher && watcher.map((item, index) => {
          return (
            <div key={index}  className="flex items-center text-center text-white divide-y-0">
              {/* <div  className={`w-16 rounded-full z-10 h-16 my-5 bg-cover bg-no-repeat`} style={{ backgroundImage: `url(${process.env.REACT_APP_IMAGE_URL + item.logo_path})` }}></div> */}
              <img className="w-12 h-12 z-10 rounded-full my-5" src={process.env.REACT_APP_IMAGE_URL + item.logo_path}></img>
              <p className="ml-3 text-md text-left">{item.provider_name}</p>
            </div>
          )
        })}
      </span>
      <div className="text-white h-12 block rounded-full z-10 content-center group-hover:hidden ml-1 text-lg">{watcher.length <= 3 ? '' : `+${watcher.length - 3}`}</div>
    </div>
  )
};

export default ProviderCard;