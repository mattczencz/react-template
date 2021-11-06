import styled from "styled-components"
import {handleFlexJustify} from '../js/container-logic'


// Containers
export const Container = styled.div`
    display: flex;
    padding: 30px clamp(15px, 5%, 50px);
    flex-wrap: wrap;
    justify-content: ${({fj}) => handleFlexJustify(fj)}
`

