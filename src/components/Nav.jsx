import { Link } from 'react-router-dom'

function Nav() {
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/users/ronaldo">Ronaldo</Link>
            <Link to="/users/messi">Messi</Link>
            <Link to="/users/bale">Bale</Link>
            <Link to="/about">About</Link>
            <Link to="/Contact">Contact</Link>
        </nav>
    );
}

export default Nav;