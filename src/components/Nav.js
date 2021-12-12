import {Link} from 'react-router-dom';



const Nav = ({ search, setSearch} ) => {
    return (
        <nav className="Nav">
            <form   
                    className="searchForm" 
                    onSubmit={(e) => e.preventDefault()}>
                <label  htmlFor="search">Search Tasks</label>
                <input  
                    id="search" 
                    type="text" 
                    placeholder="Search Tasks" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}/>
            </form>

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/task">New</Link></li>
                <li><Link to="/About">About</Link></li>
            </ul>
        </nav>
    )
}

export default Nav