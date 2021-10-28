import { Link } from "react-router-dom"
import styled from "styled-components"


// Root Variables
const mainBlack = '#040404'
const mainWhite = '#fff'
const lightShadow = '0px 2px 10px rgba(0,0,0,.2)'

// Function to handle the changing of nav colors based on prop
const handleNavType = type => {
    switch(type.toLowerCase()){
        case 'light':
            return `background-color: ${mainWhite}; color: ${mainBlack};`;
        case 'dark':
            return `background-color: ${mainBlack}; color: ${mainWhite};`;
        default:
            return "background-color: #f9f9f9; color: #000;";
    }
}
// Navigation Bars
export const Navbar = styled.nav `
    display: flex;
    padding: 30px clamp(15px, 5%, 50px);
    flex-wrap: wrap;
    box-shadow: ${lightShadow};
    font-family: 'Roboto Mono', monospace;
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