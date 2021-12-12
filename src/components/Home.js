import Feed from './Feed';
import { Link } from 'react-router-dom';
const Home = ({tasks}) => {
    return (
        <main className="Home">
            {tasks.length ? (
                <Feed tasks={tasks} />
            
            ) : (
                <p style={{marginTop:"2rem"}}>
                    No tasks for today. 
                    <br />
                    <Link to="/task">Create one!</Link>
                </p>
            )
            }
        </main>
    )
}

export default Home
