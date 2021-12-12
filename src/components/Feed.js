import Task from './Task'
const Feed = ({tasks}) => {
    return (
        <>
            {tasks.map( task => (
                <Task key={task.id} task={task} />
            ))}
        </>
    )
}

export default Feed
