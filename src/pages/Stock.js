import { useEffect, useState } from "react"
import { Container } from "../Styles/Containers"

const Stock = (props) => {

    // state to hold the stock data
    const [currentStock, setCurrentStock] = useState(null)

    // A function to find the matching stock in the props.data array and pass it through the setCurrentStock() state funciton
    const getStock = () => {
        // grabbing the symbol from the url via router props
        const symbol = props.match.params.symbol
            
        // filtering through the props.data array to find the current one
        const stock = props.data.filter((item) => {
            return item.symbol === symbol
        })[0]

        // set the stock state to the stock the matching stock
        setCurrentStock(stock)
    }

    // Set the initial value of currentStock to the data passed in through getStock()
    useEffect(() => {
        getStock()
    }, [])

    const loaded = () => {
        return(
            <Container>
                <h1>{currentStock.name} ({currentStock.symbol})</h1>
                <h2>{currentStock.lastPrice}</h2>
                <h2>{currentStock.change}</h2>
            </Container>  
        )
    }

    const loading = () => {
        return (
            <h2>Loading...</h2>
        )
    }

    return currentStock ? loaded() : loading()
}

export default Stock