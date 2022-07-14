import React, { useState } from "react";
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [reminder, setReminder] = useState(false);
  const [important, setImportant] = useState(false);
  const [stateH, setStateH] = useState('added')
  const [addedMan, setAddedMan] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }

    const timeFull = new Date(time);
    console.log(timeFull);
    const timeStr = timeFull.getHours() + ":" + timeFull.getMinutes();
    const date = new Date(day);
    const dateStr = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();

    onAdd({ text, dateStr, timeStr, reminder, important, stateH, addedMan });

    setText("");
    setDay(new Date());
    setTime(new Date());
    setReminder(false);
    setImportant(false);
    setStateH('added')
    setAddedMan(false)
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
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
          onChange={setDay}
          value={day}
          yearAriaLabel="Year"
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Important</label>
        <input
          type="checkbox"
          checked={important}
          value={important}
          onChange={(e) => setImportant(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" onClick={(e) =>
        setAddedMan(true)} />
    </form>
  );
};

export default AddTask;
