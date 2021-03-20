import React, { useState } from 'react'
import styled from "styled-components";
import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import Hamburger from './HamBurger/Hamburger';

const FixedWrapper = styled.div`
    position: fixed;
    background-color: var(--color-main);
    top: 0; 
    left: 0;
    width: 100%;
    z-index:10;
    height: 6rem;
    display:none;
    padding: 0rem 2rem;
    @media ${props => props.theme.mediaQueries.small}{
        display:flex;
    }
`;
const Wrapper = styled.div`
    display:flex;
    justify-content: space-between;
    height:100%;
    align-items: center;
    width:100%;
`
const Menu = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;    
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-mainDark);
    height: 100vh;
    visibility: ${props => props.opened ? 'visible' : 'hidden'};
    transform: translateY(${props => props.opened ? '0%' : '-100%'});
    transition: all .3s cubic-bezier(0.61, 1, 0.88, 1);
    margin-top: 6rem;
    display:none;
    @media ${props => props.theme.mediaQueries.small}{
        display:flex;
    }
    
`;
const SideDrawer = () => {
    const [isOpened, setIsOpened] = useState(false)
    return (
        <>
            <FixedWrapper>
                <Wrapper>
                    <Logo />
                    {/* <NavItems /> */}
                    <Hamburger opened={isOpened} clicked={() => setIsOpened(!isOpened)} />
                </Wrapper>
            </FixedWrapper>
            <Menu opened={isOpened}>
                <NavItems mobile clicked={() => setIsOpened(false)} />
            </Menu>
        </>
    )
}
export default SideDrawer;
