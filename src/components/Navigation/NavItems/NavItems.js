import React from 'react'
import NavItem from "./NavItem/NavItem";
import styled from 'styled-components';


const Nav = styled.nav`
    display:flex;
    ${'' /* margin-top: ${props => (props.mobile ? '6rem' : null)}; */}
    padding: ${props => (props.mobile ? '3rem' : null)};
    height: fit-content;
`
const Ul = styled.ul`
    display:flex;
    align-items: center;
    flex-direction: ${props => props.mobile ? 'column' : 'row'};
    height: 100%;
`
const NavItems = ({ mobile, clicked }) => {
    return (
        <Nav mobile={mobile}>
            <Ul mobile={mobile}>
                <NavItem mobile={mobile} clicked={clicked} link="/trending">Trending</NavItem>
                <NavItem mobile={mobile} clicked={clicked} link="/movies">Movies</NavItem>
                <NavItem mobile={mobile} clicked={clicked} link="/tv">TV</NavItem>
                {/* <NavItem mobile={mobile} clicked={clicked} link="/about">About</NavItem> */}
                {/* <NavItem mobile={mobile} clicked={clicked} link="/project">Project</NavItem>
                <NavItem mobile={mobile} clicked={clicked} link="/contact">Contact</NavItem> */}
            </Ul>
        </Nav>
    )
}
export default NavItems;
