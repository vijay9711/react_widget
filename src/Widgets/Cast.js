import React, { useState } from "react";

const Cast = ({ movieCast, movieCrew, creditsTitle }) => {
  const [active, setActive] = useState(creditsTitle[0]);
  return (
    <div>
      <p>Cast</p>
      <div className="w-full ">
        <div className="flex">
          {
            creditsTitle && creditsTitle.map((title, index) => {
              return (
                <p key={index} className={`${active === title ? 'bg-white text-main ml-2': ''} ml-2  opacity-100`}>{title}</p>
              )
            })
          }
        </div>
      </div>

      {
        movieCast && movieCast.map((res, index) => {
          return (
            <p className="text-white" key={index}>{res.name}</p>
          )
        })
      }
    </div>
  )
};

export default Cast;