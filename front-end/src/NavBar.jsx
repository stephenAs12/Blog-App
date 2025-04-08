import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <nav>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/articles-list">Articles List</Link>
            </ul>
        </nav>
    )
}