import * as S from '../styles/NavBars'

function Nav(props) {
    return (
        <S.Navbar type="dark">
            <S.NavLogoText to="/">React Template</S.NavLogoText>
            <S.NavItems>
                <S.NavItem to="/overview">Components Overview</S.NavItem>
                <S.NavItem to="/about">About</S.NavItem>
                <S.NavItem to="/code" target="_blank" rel="noopener noreferrer">View Code</S.NavItem>
            </S.NavItems>
        </S.Navbar>
    )
}

export default Nav