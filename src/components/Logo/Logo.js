import React from 'react'
import styled from "styled-components";
import logo from "../../assets/logo/VijayWhite.svg";

const LogoWrapper = styled.div`
    color: var(--color-white);
    height:100%;
    display: flex;
    align-items:center;
    font-size: 1.6rem;
    padding: 1rem;
    font-weight: 900;
`

const Logo = () => {
    return (
        <LogoWrapper>
            {/* VJ */}
            <img src={logo} alt="vj's logo" />
        </LogoWrapper>
    )
}
export default Logo;