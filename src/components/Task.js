import { Link } from 'react-router-dom';

const Task = ({task}) => {
    return (
        <article className="task">
            <Link to={`/task/${task.id}`}>
                <h2>{task.title}</h2>
            </Link>
            <p className="taskBody">{
                (task.body).length <= 25 ? task.body 
                                        : `${(task.body).slice(0,25)}...`}

            </p>

        </article>
    )
}

export default Task
