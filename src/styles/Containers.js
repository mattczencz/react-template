import styled from "styled-components"

const handleFlexJustify = fj => {
    // If there is no flex justify defined, set it to initial
    if(fj.toLowerCase === undefined){
        return 'initial';
    }

    switch(fj.toLowerCase()){
        // Justify by locatj
        case 'start':
            return 'flex-start';
        case 'end':
            return 'flex-end';
        case 'center':
            return 'center';
        // Justify by space
        case 'between':
            return 'space-between';
        case 'around':
            return 'space-around';
        case 'evenly':
            return 'space-evenly';
        // Justify stretch
        case 'stretch':
            return 'stretch';
        // Justify by inheritance
        case 'inherit':
            return 'inherit';
        // Defaut & Undefined: Set to initial
        default:
            return 'initial';
    }
}

// Containers
export const Container = styled.div`
    display: flex;
    padding: 30px clamp(15px, 5%, 50px);
    flex-wrap: wrap;
    justify-content: ${({fj}) => handleFlexJustify(fj)}
`

