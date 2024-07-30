import React, { useEffect, useState } from "react";
import { TvService } from "../../Services/MoviesServices/TvService.js";
import Anime from "animejs";
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { getRatingBG } from "../../utils/getRatingBg.js";
import Rating from "../Rating/Rating.js";
const anime = Anime;
const tvShowService = new TvService;
const TvDetails = () => {
    const [item, setItem] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        getTvDetails();
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
                data.spoken_languages?.map((lang) => {
                    if (lang.iso_639_1 == data.original_language) {
                        data.original_language = lang.name;
                    }
                })
                setItem(res.data);
                // console.log(res.data);
            } else {
                console.log("something wrong");
            }

        })
    }
    return (
        <div className="Note p-5 pt-10" key={id}>
            <div className=" grid lg:grid-cols-1 pb-5  p-5 sm:w-5/6  md:w-3/6  m-auto">
                <div className="grid justify-end">
                    <button className="text-xl w-fit" onClick={() => { navigate(-1) }}>  <FontAwesomeIcon icon={faArrowLeft} className="mr-5 animate-fadeIn" />Back</button>
                </div>
                <div className="grid shadow-mainColorShadow m-auto rounded-lg  lg:grid-cols-4 lg:grid-rows-1 sm:grid-rows-2 sm:grid-cols-1 justify-between">
                    <div className="lg:col-span-1 sm:row-span-1 flex flex-col p-5">
                        <div>
                            <img className="rounded-lg" src={process.env.REACT_APP_IMAGE_URL + item.poster_path} alt="poster" />
                        </div>
                        <div className="">
                            <div className="flex  justify-between items-center w-full">
                                <div className="mr-3 text-xl font-bold">
                                    {(item && item.vote_average && (item.vote_average.toFixed(1)))}/10
                                </div>
                                <ThemeProvider theme={getRatingBG(item.vote_average)}>
                                    <Rating id={item.id + 'rating'} />
                                </ThemeProvider>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex justify-start items-center w-full flex-wrap">
                                {item && item.genres && item.genres.map((genre, index) => {
                                    return (
                                        <span key={index} className={` bg-cardBackground border-1 mb-3 border-textColor rounded-full text-main w-fit px-3 py-1 text-md ${index == 0 ? 'mr-1' : 'mx-1'}`}>{genre.name}</span>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-3 sm:row-span-3 text-xl lg:pl-0 lg:p-5 sm:p-10 ">
                        <div className="flex justify-start items-center flex-wrap">
                            <div className="w-full d-flex">
                                <p className="lg:text-title sm:text-4xl  text-textColor font-bold align-baseline d-flex h-full">{item && item.name} <span className="border border-cardBackground rounded-md px-1 text-md d-flex items-center h-full my-auto w-fit">{item && item.original_language}</span> </p>
                            </div>
                        </div>
                        <div>
                            <p className="text-textColor font-bold">Description:</p>
                            <p className="text-md text-textColor">{item && item.overview}</p>
                        </div>
                        <div className="text-lg text-mainLight">
                            {item && item.status == "Released" ? <p className=""> Released on {item.release_date}</p> : null}
                        </div>
                        <div className="flex items-center">
                            <p className="text-textColor font-bold mr-4">Language:</p>
                            {item && item.spoken_languages && item.spoken_languages.map((lang, langIndex) => {
                                return (
                                    <p className="text-md text-textColor" key={langIndex}>{lang && lang.name} <span className="border border-textColor rounded-md px-1 py-0">{lang && lang.iso_639_1 && lang.iso_639_1}</span></p>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default TvDetails;