import React, { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';
import { useGSAP, GSAPContext } from '@gsap/react';
import TvService from "../Services/MoviesServices/TvService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Timeline } from "gsap/gsap-core";

const tvService = new TvService;
const SeasonsAndEpisodes = ({ item }) => {
  const container = useRef(null);
  const [selectedSeason, setSeason] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {

  }, [])
  const selectSeason = (season) => {
    console.log("season ", selectedSeason, " ", season)
    let seasonEpisodeTimeLine = gsap.timeline();
    if (season != null) {
      seasonEpisodeTimeLine.fromTo(".cards",
        {
          x: 0,
          opacity: 1,
        },
        {
          x: -30,
          opacity: 0,
          display: "none",
          stagger: .1,
          duration: .5,
          ease: "power2.out"
        }
      ).fromTo(".all-episodes",
        {
          display: "none",
          x: -30,
          opacity: 0,
        },
        {
          display: "flex",
          x: 0,
          stagger: .1,
          opacity: 1,
          duration: .5,
          ease: "power2.out"
        }
      )
      // gsap.fromTo("")
      setSeason(season.id);
      getEpisodes(season);
    } else {
      console.log("null val")
      setSeason(null);
      seasonEpisodeTimeLine.fromTo(".all-episodes",
        {
          display: "flex"
        },
        {
          display: "none",
        }
      ).fromTo(".cards",
        {
          x: -30,
          opacity: 0,
          display: "flex"
        },
        {
          x: 0,
          opacity: 1,
          // display:"none",
          stagger: .2,
          duration: .8,
          ease: "power2.out"
        }
      )
    }
  }

  const getEpisodes = (season) => {
    tvService.getEpisodesBySeriesIdAndSeasonNo(item.id, season.season_number).then((res) => {
      console.log(res);
      setEpisodes(res.data);
    })
  };
  const seasonAndEpisode = (season, id) => {
    return (
      <div key={id} className={`relative group cards bg-cover  bg-no-repeat m-3 ml-0 rounded-lg cursor-pointer flex hover:bg-overlay`}
        style={{ backgroundImage: `url(${process.env.REACT_APP_BG_IMAGE_URL + season.poster_path})`, height: '30rem', width: '20rem' }}
        onClick={() => { selectSeason(season) }}
      >
        <p className="text-center text-white flex transition-all text-xl font-bold mt-auto bg-mainDarkOpacity group-hover:hidden ">{season.name}</p>
        <div className="bg-mainDarkOpacity h-full w-full hidden group-hover:flex flex-col transition-all duration-500">
          <p className="text-center text-white transition-all text-xl font-bold m-auto ">{season.name}</p>
          <div className="text-white">
            {season.overview}
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="w-100 ">
      <div className="bg-main bg-opacity-40 mt-4 text-lg text-white font-semibold rounded-lg py-2 px-5">{item.number_of_seasons} Seasons & {item.number_of_episodes} Episodes</div>
      {/* {
        selectedSeason ?
           :null
          
      } */}
      <div className="all-episodes hidden">
        <div className="episodes">

        </div>
        <div className="episodes" >
          <div className="bg-cardBackground m-3 rounded-lg flex flex-col text-center text-lg text-black" style={{ height: '30rem', width: '20rem' }}>
            <div className="m-auto">
              <p className="m-auto">Season</p>
              <button className="text-xl w-fit m-auto" onClick={() => { selectSeason(null) }}>  <FontAwesomeIcon icon={faArrowLeft} className="mr-5 animate-fadeIn" />All season</button>
            </div>

          </div>
        </div>
      </div>
      <div className="flex overflow-x-auto w-auto h-auto flex-row season-cards" >
        {
          item?.seasons?.map((season, id) => {
            return (
              seasonAndEpisode(season, id)
            )
          })
        }
      </div>
      <div>

      </div>
    </div>
  )
}

export default SeasonsAndEpisodes;