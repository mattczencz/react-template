import { Link } from 'react-router-dom'


const Dashboard = (props) => {  
    return props.data.map((stock, index) => {
        return (
            <Link to={`/stocks/${stock.symbol}`} key={index}>
                <div className="stock">
                    <h1>{stock.name} ({stock.symbol})</h1>
                    <h2>{stock.lastPrice}</h2>
                    <p>{stock.change}</p>
                </div>
            </Link>
        )
    })
}

export default Dashboard