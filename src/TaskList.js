import React, { Component } from "react";
import "./TaskList.css";

class TaskList extends Component {
  static tasks = [
    { id: 1, text: "task 1" },
    { id: 2, text: "task 2" },
    { id: 3, text: "task 3" },
  ];

  deleteTask = (id) => {
    TaskList.tasks = TaskList.tasks.filter((task) => task.id !== id);
    this.forceUpdate();
  };

  render() {
    return (
      <div className="task-list">
        <h1>Список завдань</h1>

        {TaskList.tasks.length === 0 ? (
          <p>Завдань немає</p>
        ) : (
          <ul>
            {TaskList.tasks.map((task) => (
              <li key={task.id}>
                <span>{task.text}</span>
                <button onClick={() => this.deleteTask(task.id)}>
                  Видалити
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default TaskList;
