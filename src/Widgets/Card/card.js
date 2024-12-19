import React, { useEffect, useState, useRef } from "react";
import Rating from "../Rating/Rating";
import { ThemeProvider } from "styled-components";
import Anime  from "animejs";
import { useNavigate } from "react-router-dom";
import {Image} from "semantic-ui-react";
const anime = Anime;
const Card = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
       anime({
        targets: `.card-animation`,
        keyframes: [
          {translateY: -40, opacity:0},
          {translateY: 0, opacity:1},
        ],
        delay: anime.stagger(100),
        duration: 500,
        easing: 'easeOutElastic(5, .8)',
        loop: false
      });
  }, [props.item.id])
  const selectedItem = (item) => {
    // props.getSelectedItem(item);
    navigate(`/${item.media_type ? item.media_type : props.parent}/${item.id}/details`);
  }
  const getRatingBG = (rating) => {
    return {
      bg: `linear-gradient(90deg, var(--color-starBackground) calc(${rating} / 10 * 100%), var(--color-ratingBg) calc(${rating} / 10 * 100%))`
    }
  }
  return (
        <div key={props.index} onClick={() => selectedItem(props.item)} className={`group bg-main text-white rounded-xl  shadow:lg border-1 overflow-hidden m-5 cursor-pointer hover:shadow-mainColorShadow duration-500 z-0 card-animation min-h-5/6`}>
          {/* <img className="w-full h-5/6" src={process.env.REACT_APP_IMAGE_URL + props.item.poster_path} alt="poster" /> */}
          <Image className="w-full h-5/6" src={process.env.REACT_APP_IMAGE_URL + props.item.poster_path} onError={i => i.target.style.display='none'} />
          
          <div className="px-5 py-3">
            <ThemeProvider theme={getRatingBG(props.item.vote_average)}>
              <Rating id={props.index + 'rating'} />{props.item.media_type ? <span className="border px-2 py-1 bg-white text-main font-bold rounded-lg">{props.item.media_type ? props.item.media_type : ""}</span> : ""} 
            </ThemeProvider>
            <span className="text-lg float-right font-bold text-white  group-hover:text-xl group-hover:font-bold">{(props.item && props.item.vote_average && (props.item.vote_average.toFixed(1)))}/10</span>
          </div>
          <p className="px-5 py-2 font-bold text-lg truncate text-white  group-hover:text-xl group-hover:font-bold" >{props.item && props.item.original_title ? props.item.original_title : props.item.original_name}</p>
        </div>
  );
}

export default Card;