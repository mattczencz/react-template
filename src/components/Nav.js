import * as S from '../styles/NavBars'

function Nav(props) {
    return (
        <S.Navbar type="dark">
            <S.NavLogoText to="/">Navigation</S.NavLogoText>
            <S.NavItems>
                <S.NavItem to="#">Components Overview</S.NavItem>
                <S.NavItem to="#">About</S.NavItem>
                <S.NavItem to="#">Support</S.NavItem>
            </S.NavItems>
        </S.Navbar>
    )
}

export default Nav