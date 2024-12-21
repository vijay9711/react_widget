import React, { useEffect, useState } from "react";
import { gsap } from 'gsap';
import TvService from "../Services/MoviesServices/TvService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const tvService = new TvService;
const SeasonsAndEpisodes = ({ item }) => {
  const [selectedSeason, setSeason] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  const seasonEpisodeTimeLine = gsap.timeline();
 
  // useEffect(() => {
  //   animateSeason();
  // }, []);

  useEffect(() => {
    if (selectedSeason !== null) {
      animateEpisode();
    } else {
      animateSeason();
    }
  }, [selectedSeason,episodes]);

  const selectSeason = (season) => {
    console.log("season ", selectedSeason, " ", season)
    if (season != null) {
      // hide seasons and show episodes
      setSeason(season);
      getEpisodes(season);
      animateEpisode();
    } else {
      // hide episodes and show season
      animateSeason();
    }
  }

  const getEpisodes = (season) => {
    tvService.getEpisodesBySeriesIdAndSeasonNo(item.id, season.season_number).then((res) => {
      setEpisodes(res.data.episodes);
    })
  };
  const animateSeason = () => {
    seasonEpisodeTimeLine
    .fromTo(".episode-cards",
      {
        display: "flex"
      },
      {
        display: "none",
      }
    ).fromTo(".season-cards",
      {
        x: -30,
        opacity: 0,
        display: "flex"
      },
      {
        x: 0,
        opacity: 1,
        stagger: .2,
        duration: .8,
        ease: "power2.out"
      }
    )
  }
  const animateEpisode = () => {
    console.log("episodes ", episodes);
    seasonEpisodeTimeLine
    .to(".season-cards",
      {
        display: "none",
      }
    )
    // .fromTo(".all-episodes",
    //   {
    //     display: "none"
    //   },
    //   {
    //     display: "flex"
    //   }
    // )
      .fromTo(".episode-cards",
        {
          display: "none",
          x: -30,
          opacity: 0,
        },
        {
          display: "flex",
          x: 0,
          stagger: .2,
          opacity: 1,
          duration: .8,
          ease: "power2.out"
        }
      )
  }
  const seasonAndEpisode = (item, id, type) => {
    let poster = type == 'season' ? item.poster_path : item.still_path;
    let url = process.env.REACT_APP_BG_IMAGE_URL;
    let width = type == 'season' ? '20rem' : '40rem';
    let height = '30rem';
    return (
      <div key={id} className={`relative group ${type}-cards bg-cover  bg-no-repeat m-3 ml-0 rounded-lg overflow-hidden cursor-default flex`}
        style={{ backgroundImage: `url(${url + poster})`, height: `${height}`, minWidth: `${width}` }}
      >
        <p className="text-center absolute text-white flex transition-all text-xl font-bold mt-auto bg-mainDarkOpacity group-hover:hidden m-5">{item.name}</p>
        <div className="bg-black bg-opacity-70 h-full absolute bottom-0 w-full opacity-0 p-5  group-hover:opacity-100 transition-all duration-500">
          <p className="text-center text-white transition-all text-xl font-bold h-28">{item.name}
            {type == 'season' ? <div className="text-black text-md bg-cardBackground rounded-lg p-2 cursor-pointer" onClick={() => { selectSeason(item) }}>All Episode</div> : null}
          </p>
          <div className="text-white text-md h-80 overflow-y-auto no-scrollbar">
            {item.overview}
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="w-100 " style={{ minHeight: '30rem'}}>
      <div className="bg-main bg-opacity-40 mt-4 text-lg text-white font-semibold rounded-lg py-2 px-5 w-full">{item.number_of_seasons} Seasons & {item.number_of_episodes} Episodes</div>
        <div className="flex overflow-x-auto w-full h-auto flex-row no-scrollbar">
        {/* All episodes */}
          {/* <div className="all-episodes hidden overflow-x-auto w-full h-auto flex-row no-scrollbar"> */}
            <div className="bg-mainDarkOpacity bg-cover bg-no-repeat episode-cards m-3 rounded-lg flex flex-col text-center text-lg text-black" style={{ backgroundImage: `url(${process.env.REACT_APP_BG_IMAGE_URL + selectedSeason?.poster_path})`, height: '30rem', minWidth: '20rem' }}>
              <div className="m-auto bg-black rounded-lg bg-opacity-70 p-5 h-full w-full flex flex-col text-white justify-center">
                <p className="text-xl font-bold">{selectedSeason?.name}</p>
                <p className="text-xl font-bold">{episodes.length} Episodes</p>
                <button className="text-xl w-fit bg-white text-black py-1 px-4 rounded-lg w-fit" onClick={() => { selectSeason(null) }}>  <FontAwesomeIcon icon={faArrowLeft} className="mr-5 animate-fadeIn" />All season</button>
              </div>
            </div>
            {
              episodes?.map((episode, id) => {
                return (
                  seasonAndEpisode(episode, id, 'episode')
                )
              })
            }
          {/* </div> */}
        </div>
        {/* All season */}
        <div className="flex overflow-x-auto w-full h-auto flex-row no-scrollbar" >
          {
            item?.seasons?.map((season, id) => {
              return (
                seasonAndEpisode(season, id, 'season')
              )
            })
          }
        </div>
    </div>
  )
}

export default SeasonsAndEpisodes;