import React, {useState} from "react"

export default function TodoList() {
    //Manage tasks states
    const [pendingTasks, setPendingTasks] = useState([]);
    const [doneTasks, setDoneTasks] = useState(null);
    const [deletedTasks, setDeletedTasks] = useState(null);
    //Manage form states
    const [taskName, setTaskName] = useState("")
    const [taskDescription, setTaskDescription] = useState("");
    const [taskDone, setTaskDone] = useState("off");
    const [taskDeleted, setTaskDeleted] = useState("off"); 

    const handleNewTask = newTask => {
        const copy = [...pendingTasks];
        copy.unshift(newTask);
        setPendingTasks(copy);
        console.log(pendingTasks);
    }
    const handleForm = (e) => {
        e.preventDefault();
        const task = {
            taskName: taskName,
            taskDescription: taskDescription,
            taskDone: taskDone,
            taskDeleted:"off"
        }
        handleNewTask(task);
    }
    const handleDelete = (deletedTask) => {
        const copy = [...pendingTasks];
        copy.filter(task => task.taskName !== deletedTask.taskName);
        setPendingTasks(copy);
    }
    return (
        <div>
            <h2>Add new task:</h2>
            <form onSubmit={handleForm}>
                <input type="text" name="taskName" value={taskName} onChange={(e) => {setTaskName(e.target.value)}}/>
                <input type="text" name="taskDescription" value={taskDescription} onChange={(e) => {setTaskDescription(e.target.value)}}/>
                <input type="checkbox" name="taskDone" value={taskDone} onChange={(e) => {setTaskName(e.target.value)}}/>
                <button type="submit">Create</button>
            </form>
            {pendingTasks && pendingTasks.map(task => {
                <div>
                    <h3>{task.taskName}</h3>
                    <h5>{task.taskDescription}</h5>
                    {task.taskDone && <h5>Done!</h5>}
                    <button onClick={() => handleDelete(task)}>Delete</button>
                </div>
            })}
        </div>
    )
}
