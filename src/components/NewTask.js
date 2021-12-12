const NewTask = ({
    handleSubmit, taskTitle, setTaskTitle, taskBody, setTaskBody } ) => {
    return (
        <main className="NewTask">
            <h2>New Task</h2>
            <form className="newTaskForm" onSubmit={handleSubmit}>
                <label htmlFor="taskTitle">Title: </label>
                <input 
                id="taskTitle" 
                type="text" 
                required 
                value={taskTitle} 
                onChange={(e) => setTaskTitle(e.target.value)} 
                />
                
                <label htmlFor="taskBody">Task: </label>
                <textarea 
                id="taskBody" 
                required 
                value={taskBody} 
                onChange={(e) => setTaskBody(e.target.value)} />
                <button type="submit">Submit</button>

            </form>
        </main>
    )
}

export default NewTask
