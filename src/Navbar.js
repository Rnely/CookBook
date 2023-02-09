import { Link } from "react-router-dom";
import { useAPI } from "./apiContext";

const Navbar = () => {
    const { setQuery } = useAPI()

    return (
        <nav className="navbar">
            <h1>Cook Book</h1>
            <div className="search">
                <label>Search: </label>
                <input placeholder="Enter Recipe Title" onChange={(e) => setQuery(e.target.value)} />
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Recipe</Link>
            </div>
        </nav>
    );
}

export default Navbar;