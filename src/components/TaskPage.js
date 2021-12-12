import { useParams, Link } from "react-router-dom"

const TaskPage = ({tasks, handleDelete}) => {
    const {id} = useParams();
    const task=tasks.find(task=>(task.id).toString() === id);

    return (
        <main className="TaskPage">
            <article className="task">
                {task &&
                    <>
                        <h2>{task.title}</h2>
                        <p className="taskBody">{task.body}</p>
                        <button onClick={() => handleDelete(task.id)}> 
                            Delete Task 
                        </button>
                    </>}
                {!task &&
                    <>
                        <h2>Task not found</h2>
                        <p> Well, that's disappointing...</p>
                        <Link to="/"> Visit our HomePage</Link>
                    </>}
            </article>
        </main>
    )
}

export default TaskPage
