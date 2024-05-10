import React from 'react';
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";

const Li = styled.li`
    display:flex;
    height: 100%;
`
const StyledNav = styled(NavLink)`
    display: flex;
    text-transform: uppercase;
    align-items: center;
    border-bottom: ${props => props.mobile ? '1px solid transparent' : '2px solid transparent;'};
    font-size: 1.5rem;
    padding: ${props => (props.mobile ? '.5rem 1rem' : '1rem')};
    margin: ${props => (props.mobile ? '2rem 0' : '0 1rem')};
    font-weight: 600;
    color: var(--color-white);
    transition: all 0.2s;
    letter-spacing: .2px;
    &:hover {
        border-bottom: ${props => props.mobile ? '1px solid var(--color-white)' : '2px solid var(--color-white);'};
    }
    &.active {
        border-bottom: ${props => props.mobile ? '1px solid var(--color-white)' : '2px solid var(--color-white);'};
    }
`


const NavItem = ({ link, children, mobile, clicked }) => {
    const location = useLocation();
    const isActiveRoute = (routeName) => {
        return location.pathname.includes(routeName);
      };
    return (
        <Li>
            <StyledNav className={isActiveRoute(children) ? 'active' : ''} to={link} mobile={mobile ? 1 : 0} onClick={clicked}>{children}</StyledNav>
        </Li>
    )
}
export default NavItem;