import { useState } from 'react'
import TimePicker from 'react-time-picker';
import DatePicker from 'react-date-picker';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  //const [day, setDay] = useState('')
  const [value, onChange] = useState(new Date())
  const [time, setTime] = useState(new Date())
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add a task')
      return
    }
    
    /*
    console.log('text = ' + text);
    console.log('value = ' + value);
    console.log('time = ' + time);
    console.log('reminder = ' + reminder);
    */

    //time and date are class Date, we only need to extract certain info and not all
    //use a "formatted string" with only mm/dd/yy and hours:minutes
    const timeFull = new Date(time);
    console.log(timeFull);
    const timeStr = timeFull.getHours() + ":" + timeFull.getMinutes();
    const date = new Date(value);
    const dateStr = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
    onAdd({ text, dateStr, timeStr, reminder })

    setText('')
    onChange(new Date())
    setTime(new Date())
    setReminder(false)
  }
  /*
  <input
          type='text'
          placeholder='Add Day + Time'
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
        */
  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='day-time-picker'>
        <div>
          <label>Time</label>
        </div>
        <TimePicker
            amPmAriaLabel="Select AM/PM"
            clearAriaLabel="Clear value"
            clockAriaLabel="Toggle clock"
            hourAriaLabel="Hour"
            maxDetail="second"
            minuteAriaLabel="Minute"
            nativeInputAriaLabel="Time"
            onChange={setTime}
            secondAriaLabel="Second"
            value={time}
        />
      </div>
      <div className='day-time-picker'>
        <div>
          <label>Date</label>
        </div>
        <DatePicker
            calendarAriaLabel="Toggle calendar"
            clearAriaLabel="Clear value"
            dayAriaLabel="Day"
            monthAriaLabel="Month"
            nativeInputAriaLabel="Date"
            onChange={onChange}
            value={value}
            yearAriaLabel="Year"
          />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}

export default AddTask;