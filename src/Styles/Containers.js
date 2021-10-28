import styled from "styled-components"

export const VerticleFlexBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.alignLeft ? 'flex-start' : props.alignRight ? 'flex-end' : 'center'};
`

export const HorizontalFlexBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.alignLeft ? 'flex-start' : props.alignRight ? 'flex-end' : 'center'};
`