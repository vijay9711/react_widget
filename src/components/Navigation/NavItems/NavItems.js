import React from 'react'
import NavItem from "./NavItem/NavItem";
import styled from 'styled-components';


const Nav = styled.nav`
    display:flex;
    margin-top: ${props => (props.mobile ? '6rem' : null)};
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
                <NavItem mobile={mobile} clicked={clicked} link="/">Home</NavItem>
                <NavItem mobile={mobile} clicked={clicked} link="/todo">To-do List</NavItem>
                <NavItem mobile={mobile} clicked={clicked} link="/about">About</NavItem>
                <NavItem mobile={mobile} clicked={clicked} link="/project">Project</NavItem>
                <NavItem mobile={mobile} clicked={clicked} link="/contact">Contact</NavItem>
            </Ul>
        </Nav>
    )
}
export default NavItems;
