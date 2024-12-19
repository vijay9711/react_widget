import React, { useEffect, useState, useRef} from "react";
import { Image } from 'semantic-ui-react';
import NoUser from "../assets/nouser.png";

const Cast = ({ movieCast, movieCrew, creditsTitle }) => {
  const [active, setActive] = useState('Acting');
  return (
    <div>
      <div className="w-full mt-3">
        <div className="flex gap-4 overflow-x-auto content-end bg-textColor bg-opacity-50 rounded-lg text-white ">
          {
            creditsTitle && creditsTitle.map((title, index) => {
              return (
                <p key={index} className={`${active === title ? 'bg-white text-main font-bold' : ''}  transition-all hover:[transform:rotateX(180deg)] opacity-100 cursor-pointer p-2 rounded-lg text-md h-fit items-baseline inline`} onClick={() => { setActive(title) }}>{title}</p>
              )
            })
          }
        </div>
      </div>
      <div class="flex flex-col  m-auto p-auto no-scrollbar">
        <div
          class="flex overflow-x-scroll  no-scrollbar"
        >

          <div class="flex mt-2">
            {
              movieCast && movieCast.map((res, index) => {
                return (
                  res.known_for_department == active ?
                    <div key={index} className={`${res.id} relative w-52 group mr-5 flex bg-white rounded-lg h-80 transition-all duration-300 overflow-hidden text-center hover:rounded-lg`}>
                      { res.profile_path ? <Image className="group-hover:rounded-lg" src={process.env.REACT_APP_IMAGE_URL + res.profile_path} onError={i => i.target.style.display='none'} /> : 
                        <Image className="group-hover:rounded-lg bg-white m-auto opacity-20" src={NoUser} />
                       }
                      <div className="absolute text-left bottom-0 w-full p-1 bg-opacity-40 duration-300 bg-gradient-to-t from-black to-none">
                        <p className="text-lg font-bold text-white mb-0">{res.name}</p>
                        <p className="text-cardBG text-md group-hover:hidden duration-300 transition-all">{res.character}</p>
                      </div>
                    </div>
                    : null
                )
              })
            }
          </div>
        </div>
      </div>

    </div>
  )
};

export default Cast;