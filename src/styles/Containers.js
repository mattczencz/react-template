import styled from "styled-components"
import {handleBgColor, handleFlexJustify} from '../js/container-logic'


// Containers
export const Container = styled.div`
    display: flex;
    padding: 30px clamp(15px, 5%, 50px);
    flex-wrap: wrap;
    justify-content: ${({fj}) => handleFlexJustify(fj)};
    width: 100%;
    background-color: ${({bgColor}) => handleBgColor(bgColor)};
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

