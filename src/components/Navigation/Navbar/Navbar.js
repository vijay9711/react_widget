import React from 'react'
import styled from "styled-components";
import Logo from "../../Logo/Logo";
import Container from "../../../hoc/layout/container/Container";
import NavItems from "../NavItems/NavItems";

const FixedWrapper = styled.div`
    position: fixed;
    background-color: var(--color-main);
    top: 0; 
    left: 0;
    width: 100%;
    height: 6rem;
    @media ${props => props.theme.mediaQueries.small}{
        display:none;
    }
`;
const Wrapper = styled.div`
    display:flex;
    justify-content: space-between;
    height:100%;
    align-items: end;
`
const Navbar = () => {
    return (
        <FixedWrapper className='z-50'>
            <Container>
                <Wrapper>
                    <Logo />
                    {/* <p className='text-white'>Srivatsav</p> */}
                    <NavItems />
                </Wrapper>
            </Container>
        </FixedWrapper>
    )
}
export default Navbar;
