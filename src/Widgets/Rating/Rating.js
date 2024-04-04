import React from 'react';
import styled from "styled-components";

const RatingWrapper = styled.div`
    display: inline-block;
    font-size: 1.5rem;
    font-family: 'Roboto', sans-serif;
    line-height: 1;
    
    &::before {
      content: '★★★★★';
      letter-spacing: 3px;
      background: ${props => props.theme.bg};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
`

const Rating = () =>{
    return(
        <RatingWrapper className="Stars" aria-label="Rating of this product is 2.3 out of 5."></RatingWrapper>
    )
}

export default Rating;