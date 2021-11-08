import { Container } from "../styles/Containers";
import { SpacerLarge, SpacerSmall } from "../styles/Extras";

function Containers(props) {
    return(
        <>
        <h2>fj="Start"</h2>
        <Container fj="start" bgColor="alt">
            <div className="box"></div>
            <div className="box"></div>
        </Container>
        
        <SpacerSmall/>
    
        <h2>fj="Center"</h2>
        <Container fj="center" bgColor="alt">
            <div className="box"></div>
            <div className="box"></div>
        </Container>

        <SpacerSmall/>
    
        <h2>fj="End"</h2>
        <Container fj="end" bgColor="alt">
            <div className="box"></div>
            <div className="box"></div>
        </Container>

        <SpacerSmall/>
    
        <h2>fj="Between"</h2>
        <Container fj="between" bgColor="alt">
            <div className="box"></div>
            <div className="box"></div>
        </Container>

        <SpacerSmall/>
    
        <h2>fj="Around"</h2>
        <Container fj="around" bgColor="alt">
            <div className="box"></div>
            <div className="box"></div>
        </Container>

        <SpacerSmall/>
    
        <h2>fj="Evenly"</h2>
        <Container fj="evenly" bgColor="alt">
            <div className="box"></div>
            <div className="box"></div>
        </Container>

        <SpacerSmall/>
    
        <h2>fj="Stretch"</h2>
        <Container fj="stretch" bgColor="alt">
            <div className="box" style={{maxWidth: '150px'}}>I am taller than the other.</div>
            <div className="box">I match </div>
        </Container>
        
        </>
    )
}

export default Containers