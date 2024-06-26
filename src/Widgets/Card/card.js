import React, { useEffect, useState } from "react";
import Rating from "../Rating/Rating";
import { ThemeProvider } from "styled-components";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import {getRatingBG} from "../../utils/getRatingBg";
const Card = (props) => {
  const [noOfCards, setNoOfCards] = useState(6);
  useEffect(() => {
    AOS.init();
    windowWidthForCard();
    window.addEventListener('resize', windowWidthForCard);
    return () => window.removeEventListener('resize', windowWidthForCard);
  }, [])
  const windowWidthForCard = () => {
    if (window.innerWidth <= 320) {
      setNoOfCards(1);
    } else if (window.innerWidth <= 768) {
      setNoOfCards(4);
    } else {
      setNoOfCards(6);
    }
  }
  const selectedItem = (item) => {
    props.getSelectedItem(item);
  }
  const getRatingBG = (rating) => {
    return {
      bg: `linear-gradient(90deg, var(--color-starBackground) calc(${rating} / 10 * 100%), var(--color-ratingBg) calc(${rating} / 10 * 100%))`
    }
  }
  const getDelayDuration = (index) => {
    if (noOfCards * 2 >= (index + 1)) {
      return (index + 1) * 100;
    } else {
      let duration = ((index + 1) % noOfCards) * 100;
      console.log(noOfCards, " cards ")
      return duration != 0 ? duration : noOfCards * 100;
    }
  }
  return (
    
      
        <div data-aos="fade-right" data-aos-delay={getDelayDuration(props.index)} key={props.index} onClick={() => selectedItem(props.item)} className="group bg-main  text-white rounded-xl shadow:lg border-1 overflow-hidden m-5 cursor-pointer hover:shadow-mainColorShadow duration-500 z-0">
          <img className="w-full rounded-lg" src={process.env.REACT_APP_IMAGE_URL + props.item.poster_path} alt="poster" />
          <div className="px-5 py-3">
            <ThemeProvider theme={getRatingBG(props.item.vote_average)}>
              <Rating id={props.index + 'rating'} />
            </ThemeProvider>
            <span className="text-lg float-right font-bold text-white  group-hover:text-xl group-hover:font-bold">{(props.item && props.item.vote_average && (props.item.vote_average.toFixed(1)))}/10</span>
          </div>
          <p className="px-5 py-2 font-bold text-lg truncate text-white  group-hover:text-xl group-hover:font-bold" >{props.item && props.item.original_title ? props.item.original_title : props.item.original_name}</p>
        </div>
    

  );
}

export default Card;