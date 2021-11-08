import Containers from "../clusters/Containers";
import Navs from "../clusters/Navs";
import { Column, Container } from "../styles/Containers";
import { SpacerSmall, SpacerLarge } from "../styles/Extras";

function Overview(props) {
    return (
        <Container>
            <Column>
                <SpacerLarge/>
                <h1>Navigation Bars:</h1>
                <SpacerSmall/>
                <Navs/>

                <SpacerLarge/>
                <h1>Containers:</h1>
                <SpacerSmall/>
                <Containers/>
            </Column>
            
        </Container>
    )
}

export default Overview