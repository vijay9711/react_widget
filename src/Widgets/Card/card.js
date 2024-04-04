import React from "react";
import Rating from "../Rating/Rating";
import { ThemeProvider } from "styled-components";

const Card = (props) => {

  const selectedItem = (event, item, index) =>{
    const data = {
      event, item, index
    }
    props.getSelectedItem(data);
  }
  const getRatingBG = (rating) => {
    return {
        bg: `linear-gradient(90deg, var(--color-starBackground) calc(${rating} / 10 * 100%), var(--color-white) calc(${rating} / 10 * 100%))`
    }
  }
  return (
    <div key={props.index} onClick={(event) => selectedItem(event, props.item, props.index)} className="group bg-main text-white rounded-xl shadow:lg border-1 overflow-hidden m-5 cursor-pointer hover:shadow-mainColorShadow duration-500">
      <img className="w-full rounded-lg" src={process.env.REACT_APP_IMAGE_URL + props.item.poster_path} alt="poster" />
      <div className="px-5 py-3">
        <ThemeProvider theme={getRatingBG(props.item.vote_average)}>
          <Rating id={props.index + 'rating'} />
        </ThemeProvider>
        <span className="text-lg float-right font-bold text-white  group-hover:text-xl group-hover:font-bold">{(props.item && props.item.vote_average && props.item.vote_average.toFixed(1))}/10</span>
      </div>
      <p className="px-5 py-2 font-bold text-lg truncate text-white  group-hover:text-xl group-hover:font-bold" >{props.item && props.item.original_title ? props.item.original_title : props.item.original_name}</p>
    </div>
  );
}

export default Card;