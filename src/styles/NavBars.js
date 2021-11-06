import { Link } from "react-router-dom"
import styled from "styled-components"
import { handleNavType } from "../js/nav-logic"
import * as Color from '../js/colors'

// Navigation Bars
export const Navbar = styled.nav `
    display: flex;
    padding: 30px clamp(15px, 5%, 50px);
    flex-wrap: wrap;
    box-shadow: ${Color.lightShadow};
    font-family: 'Gothic A1', sans-serif;
    text-decoration: none;
    justify-content: space-between;
    align-items: center;

    ${({type}) => handleNavType(type)};
`

// Navigation Logo & Items
export const NavLogoText = styled(Link) `
    font-weight: 700;
    font-size: 24px;
    text-decoration: none;
    &:visited{
        color: inherit;
    }
`

export const NavItems = styled.div `
    display: flex;
    justify-content: space-between;
`

export const NavItem = styled(Link) `
    text-decoration: none;
    margin: 0 10px;
    &:visited{
        color: inherit;
    }
    &:active {
        color: grey;
    }
`