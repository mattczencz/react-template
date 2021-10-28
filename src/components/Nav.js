import { Link } from "react-router-dom"

const Nav = (props) => {
    return(
        <header>
            <nav>
                <div className="nav-logo">
                    <Link to="/">uStocks</Link>
                </div>
                <div className="nav-items">
                    <div className="nav-item">
                        <Link to="/about">About</Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/stocks">Stocks</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Nav