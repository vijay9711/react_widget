import React from 'react'
import styled from "styled-components";

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
            VJ
        </LogoWrapper>
    )
}
export default Logo;