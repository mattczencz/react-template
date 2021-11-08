import { SpacerLarge } from "../styles/Extras";
import * as S from "../styles/NavBars";

function Navs(props) {
    return(
        <>
        <h2>type="Light"</h2>
        <S.Navbar type="light">
            <S.NavLogoText to="#">Your Brand</S.NavLogoText>
            <S.NavItems>
                <S.NavItem to="#">Item 1</S.NavItem>
                <S.NavItem to="#">Item 2</S.NavItem>
                <S.NavItem to="#">Item 3</S.NavItem>
            </S.NavItems>
        </S.Navbar>

        <SpacerLarge/>
    
        <h2>type="Dark"</h2>
        <S.Navbar type="dark">
            <S.NavLogoText to="#">Your Brand</S.NavLogoText>
            <S.NavItems>
                <S.NavItem to="#">Item 1</S.NavItem>
                <S.NavItem to="#">Item 2</S.NavItem>
                <S.NavItem to="#">Item 3</S.NavItem>
            </S.NavItems>
        </S.Navbar>
        </>
    )
}

export default Navs