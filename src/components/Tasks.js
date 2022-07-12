import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle, onImportant }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} onImportant={onImportant} />
      ))}
    </>
  )
}

export default Tasks
