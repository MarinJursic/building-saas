import React from "react";
const { FrappeGantt } = require("../../node_modules/frappe-gantt-react");
import styles from "../../styles/Gantt.module.scss";
import AddGanttTask from "./AddGanttTask/AddGanttTask";
import GanttNavbar from "./GanttNavbar/GanttNavbar";

function Gantt() {
  var tasks = [
    {
      id: "Task 1",
      name: "Redesign website",
      start: "2016-12-01",
      end: "2016-12-05",
      progress: 20,
      dependencies: "Task 2, Task 3",
    },
    {
      id: "Task 2",
      name: "Redesign website",
      start: "2016-12-01",
      end: "2016-12-05",
      progress: 20,
      custom_class: "bar-milestone", // optional
    },
    {
      id: "Task 3",
      name: "Redesign website",
      start: "2016-12-01",
      end: "2016-12-05",
      progress: 20,
      custom_class: "bar-milestone", // optional
    },
    {
      id: "Task 4",
      name: "Redesign website",
      start: "2016-12-01",
      end: "2016-12-05",
      progress: 20,
      dependencies: "Task 5, Task 6",
    },
    {
      id: "Task 5",
      name: "Redesign website",
      start: "2016-12-01",
      end: "2016-12-05",
      progress: 20,
      custom_class: "bar-milestone", // optional
    },
    {
      id: "Task 6",
      name: "Redesign website",
      start: "2016-12-01",
      end: "2016-12-05",
      progress: 20,
      custom_class: "bar-milestone", // optional
    },
    {
      id: "Task 7",
      name: "Redesign website",
      start: "2016-12-01",
      end: "2016-12-05",
      progress: 20,
      dependencies: "Task 8, Task 9",
    },
    {
      id: "Task 8",
      name: "Redesign website",
      start: "2016-12-01",
      end: "2016-12-05",
      progress: 20,
      custom_class: "bar-milestone", // optional
    },
    {
      id: "Task 9",
      name: "Redesign website",
      start: "2016-12-01",
      end: "2016-12-05",
      progress: 20,
      custom_class: "bar-milestone", // optional
    },
  ];

  return (
    <div className={styles.main}>
      <GanttNavbar />
      <div className={styles.body}>
        <AddGanttTask />
        <FrappeGantt
          tasks={tasks}
          viewMode={"Day"}
          onClick={(task) => console.log(task)}
          onDateChange={(task, start, end) => console.log(task, start, end)}
          onProgressChange={(task, progress) => console.log(task, progress)}
          onTasksChange={(tasks) => console.log(tasks)}
          onViewChange={() => console.log("bruh")}
        />
      </div>
    </div>
  );
}

export default Gantt;
