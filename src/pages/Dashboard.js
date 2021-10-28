import { Link } from 'react-router-dom'
import { Container } from '../Styles/Containers'


const Dashboard = (props) => {  
    return props.data.map((stock, index) => {
        return (
            <Link to={`/stocks/${stock.symbol}`} key={index}>
                <Container>
                    <h1>{stock.name} ({stock.symbol})</h1>
                    <h2>{stock.lastPrice}</h2>
                    <p>{stock.change}</p>
                </Container>
            </Link>
        )
    })
}

export default Dashboard