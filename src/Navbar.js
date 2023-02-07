import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Cook Book</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Task</Link>
            </div>
        </nav>
    );
}

export default Navbar;