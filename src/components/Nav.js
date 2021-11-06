import * as S from '../styles/NavBars'

function Nav(props) {
    return (
        <S.Navbar>
            <S.NavLogoText>Navigation</S.NavLogoText>
            <S.NavItems>
                <S.NavItem>Components Overview</S.NavItem>
                <S.NavItem>About</S.NavItem>
                <S.NavItem>Support</S.NavItem>
            </S.NavItems>
        </S.Navbar>
    )
}

export default Nav