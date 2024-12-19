import React, { useEffect, useState } from "react";
import { TvService } from "../../Services/MoviesServices/TvService.js";
import Anime from "animejs";
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faClock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { getRatingBG } from "../../utils/getRatingBg.js";
import Rating from "../Rating/Rating.js";
import ProviderCard from "../ProviderCard.js";
import { useRegionContext } from "../../utils/RegionContext.js";
import SeasonsAndEpisodes from "../seasonsAndEpisodes.js";


const anime = Anime;
const tvShowService = new TvService;
const TvDetails = () => {
    const { state, dispatch } = useRegionContext();
    const [item, setItem] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();
    const [watcher, setWatcher] = useState('');
    useEffect(() => {
        getTvDetails();
        getTvWatcherDetails();
        anime({
            targets: '.genre-anime',
            keyframes: [
                // { translateX: 0 },
                { translateX: 10, opacity: 0 },
                { translateX: 0, opacity: 1 }
            ],
            duration: 1500,
            delay: anime.stagger(100),
            easing: 'easeOutElastic(1, .8)',
        });
    }, []);

    const getTvDetails = () => {
        tvShowService.getTvShowDetailById(id).then(res => {
            if (res.status == 200) {
                let data = res.data;
                console.log(data, " tvDetails ");
                data.spoken_languages?.map((lang) => {
                    if (lang.iso_639_1 == data.original_language) {
                        data.original_language = lang.name;
                    }
                })
                setItem(res.data);
            } else {
                console.log("something wrong");
            }
        })
    }
    const getTvWatcherDetails = () => {
        tvShowService.getTvWatchProviderById(id).then((res) => {
            // console.log(res," tv details");
            if (res.data && res.data.results && res.data.results[state.countryCode]) {
                let data = [res.data.results[state.countryCode].flatrate, res.data.results[state.countryCode].buy, res.data.results[state.countryCode].rent]
                data = data.flat().filter((item) => { return item });
                setWatcher(data);
            }
        })
    }
    function time_convert(num) {
        var hours = Math.floor(num / 60);
        var minutes = num % 60;
        return (hours + "h " + minutes + "m");
    }
    return (
        
        <div className="Note p-5" key={id}>
            <div className="grid lg:grid-cols-1 pb-5 p-5 m-auto">
                <div className="grid justify-end">
                    <button className="text-xl w-fit" onClick={() => { navigate(-1) }}>  <FontAwesomeIcon icon={faArrowLeft} className="mr-5 animate-fadeIn" />Back</button>
                </div>
                <div className="grid xs:grid-col-2 xs:grid-row-1 lg:grid-col-1 lg:grid-row-2 shadow-mainColorShadow relative rounded">
                    <div className="bg-cover bg-no-repeat rounded" style={{ backgroundImage: `url(${process.env.REACT_APP_BG_IMAGE_URL + item.backdrop_path})` }}>
                        <div className="overflow-hidden bg-textColor bg-opacity-50 md:flex md:flex-row xs:flex xs:flex-col p-5 ">
                            <div className="md:row-span-1 md:col-span-1 rounded-tl rounded-tr h-fit">
                                <div className="flex flex-col md:pr-5">
                                    <img className="rounded-lg z-0 w-full" src={process.env.REACT_APP_IMAGE_URL + item.poster_path} alt="poster" />
                                    <div className="">
                                        <div className="flex justify-between items-center w-full">
                                            <div className="mr-3 text-xl font-bold text-white">
                                                {(item && item.vote_average && (item.vote_average.toFixed(1)))}/10
                                            </div>
                                            <ThemeProvider theme={getRatingBG(item.vote_average)}>
                                                <Rating id={item.id + 'rating'} />
                                            </ThemeProvider>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-row-2 grid-cols-1 w-full overflow-y-scroll no-scrollbar" style={{height:'60rem'}}>
                                <div className="bg-main row-span-1 bg-opacity-40 w-full rounded-lg xs:m-0 p-5 h-full">
                                    <div className="flex justify-start items-center flex-wrap">
                                        <div className="w-full d-flex">
                                            <p className="lg:text-title sm:text-4xl  text-white font-bold align-baseline d-flex h-full">{item && item.name} <span className="border rounded-md px-1 text-md d-flex items-center h-full my-auto w-fit">{item && item.original_language}</span> </p>
                                        </div>
                                        <div className="xs:flex md:flex xs:flex-row xs:items-start xs:flex-col md:flex-row xs:start md:items-center md:align-middle md:divide-x md:justify-between w-fit h-fit">
                                            <div className="text-white flex flex-none h-full mr-2">
                                                <p className="text-lg text-white font-normal ml-2">First on air {item.first_air_date}</p>
                                            </div>
                                            <div className="pr-2 flex align-middle text-center items-center text-white flex-none h-full">
                                                <p className="text-lg text-white font-normal ml-2">Last on air {item.last_air_date}</p>
                                            </div>
                                            <div className="text-white flex flex-none">
                                                <p className="text-lg text-white font-normal ml-2">{item.original_language}</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-start mt-3 items-center w-full flex-wrap pr-5 xs:my-3">
                                            {item && item.genres && item.genres.map((genre, index) => {
                                                return (
                                                    <span key={index} className={` bg-white border-1 border-textColor rounded-full text-main tracking-wide w-fit px-2 py-0 text-md ${index == 0 ? 'mr-1' : 'mx-1'}`}>{genre.name}</span>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 grid-row-1">
                                        <div className="col-span-1">
                                            <div className="xs:flex-col md:flex-row text-white">
                                                <p className="font-bold text-xl">Description</p>
                                                <p className="text-lg text-white font-normal">{item && item.overview}</p>
                                            </div>
                                            <div className=" text-white md:grid xs:grid grid-row-1 grid-flow-col grid-cols-4  h-fit items-baseline">
                                                <div className="col-span-2">
                                                    <p className="font-bold text-xl mb-0">Languages</p>
                                                    <p className="">{item && item.spoken_languages && item.spoken_languages.map((lang, langIndex) => {
                                                        return (
                                                            <span className={`${langIndex == 0 ? '' : 'ml-2'} text-md text-white font-normal`} key={langIndex}>{lang && lang.english_name} <span className="text-white bg-white bg-opacity-30 font-bold rounded-md px-1 py-0 uppercase">{lang && lang.iso_639_1 && lang.iso_639_1}</span>,</span>
                                                        )
                                                    })}
                                                    </p>
                                                </div>
                                                <div className="col-span-2">
                                                    <p className="font-bold text-xl mb-0">Watch on</p>
                                                    {watcher ?
                                                        <div className="flex">
                                                            <ProviderCard watcher={watcher} />
                                                        </div>
                                                        : <p>No OTT</p>}

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-1"></div>
                                    </div>
                                </div>
                                <div>
                                    {/* <div className="bg-main bg-opacity-40 mt-4 text-lg text-white font-semibold rounded-lg py-2 px-5">{item.number_of_seasons} Seasons & {item.number_of_episodes} Episodes</div> */}
                                    <SeasonsAndEpisodes item={item}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default TvDetails;