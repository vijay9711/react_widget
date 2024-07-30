import React from "react";

const ProviderCard = ({ watcher }) => {
  return (
    <div className=" flex group bg-white bg-opacity-20 h-auto cursor-pointer rounded-lg p-2  transition-all  hover:bg-opacity-0">
      <span className=" flex ">
        {watcher && watcher.slice(0, 3
        ).map((item, index) => {
          return (
            <div key={index} className={`${index == 0 ? '' : '-ml-6'} w-16 rounded-full z-10 bg-cover h-16 group-hover:opacity-0`} style={{ backgroundImage: `url(${process.env.REACT_APP_IMAGE_URL + item.logo_path})` }}></div>
          )
        })}
      </span>
      <span className="hidden group-hover:block px-5 absolute duration-700 transition-[display] flex-col bg-main rounded-lg bg-opacity-80 h-3/6 w-96 overflow-y-scroll text-lg no-scrollbar xs:bottom-0">
        {watcher && watcher.map((item, index) => {
          return (
            <div key={index}  className="flex items-center text-center text-white divide-y-0">
              <div  className={`w-16 rounded-full z-10 bg-cover h-16 my-5`} style={{ backgroundImage: `url(${process.env.REACT_APP_IMAGE_URL + item.logo_path})` }}></div>
              <span className="ml-3">{item.provider_name}</span>
            </div>
          )
        })}
      </span>
      <div className="text-white h-16 block rounded-full z-10 text-md content-center group-hover:hidden">+{watcher.length - 3}</div>
    </div>
  )
};

export default ProviderCard;