import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Undo from './components/Undo';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [undos, setUndos] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();

    const getUndos = async () => {
      const undosFromServer = await fetchJustHaps()
      setUndos(undosFromServer)
    }

    getUndos()
  }, []);

  //fetch justHaps
  const fetchJustHaps = async () => {
    const res = await fetch('http://localhost:5000/justDid')
    const data = await res.json()
    return data
  }
  const fetchJustHap = async (id) => {
    const res = await fetch(`https://localhost:5000/justDid${id}`)
    const data = await res.json()
    return data
  }

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();

    return data;
  };

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  //Undo
  const unDo = async () => {
    const res = await fetch('http://localhost:5000/justDid')
    const data = await res.json()
    if (data.length > 0) {
      console.log(data[data.length - 1].id)
      let itWent = false
      if (data[data.length - 1].stateH == "added") {
        data[data.length - 1].addedMan = false
        deleteTask(data[data.length - 1].id)
        itWent = true
      } else if (data[data.length - 1].stateH == "deleted") {
        data[data.length - 1].addedMan = false
        addTask(data[data.length - 1])
        itWent = true
      }
      if (itWent) {
        const res2 = await fetch(`http://localhost:5000/justDid/${data[data.length - 1].id}`, {
          method: 'DELETE',
        })
      }
    }
  }

  // Add Task
  const addTask = async (task) => {
    task.stateH = 'added'
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    if (task.addedMan) {
      const res2 = await fetch('http://localhost:5000/justDid', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
    }

    setTasks([...tasks, data]);
  };

  // Delete Task
  const deleteTask = async (id) => {
    const res3 = await fetch(`http://localhost:5000/tasks/${id}`)
    let data3 = await res3.json()
    data3.stateH = "deleted"
    const res2 = await fetch('http://localhost:5000/justDid', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data3)
    })

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    res.status === 200 ? setTasks(tasks.filter((task) => task.id !== id)) : alert("Error Deleting This Task");
  };

  //Set Important
  const setImportant = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, important: !task.important } : task)));
  };

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();

    setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: data.reminder } : task)));
  };

  return (
    <Router>
      <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onImportant={setImportant}
                    onToggle={toggleReminder}
                  />
                ) : (
                  "No Tasks To Show"
                )}
                <Undo onUndo={unDo} />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
