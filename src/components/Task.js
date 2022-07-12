import { FaTimes } from 'react-icons/fa'
import {FaStar} from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle, onImportant }) => {
  return (
    <div
      className={`task ${task.reminder && 'reminder'}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <div
        className={`task ${task.important && 'important'}`}
      >
       <h3>
         {task.text}{' '}
          <FaTimes
           style={{ color: 'red', cursor: 'pointer' }}
           onClick={() => onDelete(task.id)}
          />
        </h3>
       <p>
         {task.day}
         <FaStar
            style={{color: 'gold'}}
            onClick={() => onImportant(task.id)}
          />
        </p>
      </div>
    </div>
  )
}

export default Task
