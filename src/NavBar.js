import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">HomePage</Link>
                </li>
                
                

                <li>
                    <Link to="/alljobs">Job Postings</Link>
                </li>

                
            </ul>
        </nav>
    )
}

export default NavBar;