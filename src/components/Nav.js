import { Navbar, NavLogoText, NavItems, NavItem } from "../Styles/NavBars"

const Nav = (props) => {
    return(
        <header>
            <Navbar type="dark">
                <NavLogoText to="/">uStocks</NavLogoText>
                <NavItems>  
                    <NavItem to="/about">About</NavItem>
                    <NavItem to="/stocks">Stocks</NavItem>
                </NavItems>
            </Navbar>
        </header>
    )
}

export default Nav