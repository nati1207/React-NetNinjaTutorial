import{Link} from 'react-router-dom';

const Navbar = () => {
    return ( <nav className="navbar">
        <h1>the dojo blog</h1>
        <div className="links">
            <Link to="/Home">Home</Link>
            <Link to="/create">New blog</Link>
        </div>
    </nav> );
}
 
export default Navbar;