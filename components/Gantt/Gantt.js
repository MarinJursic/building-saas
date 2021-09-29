/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
const { FrappeGantt } = require("../../node_modules/frappe-gantt-react");
import AddGanttTask from "./AddGanttTask/AddGanttTask";
import GanttNavbar from "./GanttNavbar/GanttNavbar";
import styles from "../../styles/Gantt.module.scss";
import GanttPlaceholder from "./GanttPlaceholder/GanttPlaceholder";

import { FrappeGantt as GanttMonth } from "../../node_modules/frappe-new-gantt";

import { useSelector } from "react-redux";

function Gantt() {
  const phases = useSelector((state) => state.phase.phases);
  const phasesUpdated = useSelector((state) => state.phase.phasesUpdated);
  const colormode = useSelector((state) => state.color.colormode);

  const [finalTasks, setFinalTasks] = useState([]);

  const convertToStringDate = (dateArg) => {
    const date = new Date(dateArg);
    const year = date.getFullYear();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    month = month >= 10 ? month : "0" + month;
    day = day >= 10 ? day : "0" + day;

    return `${year}-${month}-${day}`;
  };

  async function convertToGanttTasks() {
    let tempTasks = [];

    // Loops through all phases
    for await (const phase of phases) {
      let phaseDependecies = "";

      let phaseTasks = [];
      let subphases = [];

      // Loops through all tasks in a phase and adds them to an array
      for await (const task of phase.tasks) {
        phaseTasks.push({
          id: task.id,
          name: task.name,
          progress: task.progress,
          start: convertToStringDate(task.start),
          end: convertToStringDate(task.end),
          custom_class: "bar-milestone", // optional
        });

        phaseDependecies += task.id + ", ";
      }

      // Loops through all subphases in a phase and adds them to an array
      for await (const subphase of phase.subphases) {
        let subTasks = [];
        let subPhaseDependecies = "";

        // Loops through all tasks in a subphase and adds them to an array
        for await (const subTask of subphase.tasks) {
          subTasks.push({
            id: subTask.id,
            name: subTask.name,
            progress: subTask.progress,
            start: convertToStringDate(subTask.start),
            end: convertToStringDate(subTask.end),
            custom_class: "bar-milestone", // optional
          });

          // Adds tasks from subphase to a string of dependecies (id's of children)
          subPhaseDependecies += subTask.id + ", ";
        }

        // Adds subphase to an array
        subphases.push({
          id: subphase.id,
          name: subphase.name,
          progress: subphase.progress,
          start: convertToStringDate(subphase.start),
          end: convertToStringDate(subphase.end),
          dependencies: subPhaseDependecies,
          custom_class: "bar-milestone", // optional
        });

        phaseDependecies += subphase.id + ", ";

        // Add subphase tasks to subphase array
        subphases = subphases.concat(subTasks);
      }

      // Pushes the phase to an array
      tempTasks.push({
        id: phase.id,
        name: phase.name,
        progress: phase.progress,
        start: convertToStringDate(phase.start),
        end: convertToStringDate(phase.end),
        dependencies: phaseDependecies,
        custom_class: "bar-milestone", // optional
      });

      // Combines all arrays of children in a phase in specific order
      tempTasks = tempTasks.concat(subphases, phaseTasks);
    }

    // After looping through all phases and adding them and their children to the array,
    // we return it as a promise so we can await it
    return new Promise((res, rej) => res(tempTasks));
  }

  useEffect(() => {
    // We call the function to convert our redux variables to gantt style tasks,
    // And after it does so, we await it (the reason behind returning the promise) and after awaiting,
    // We set the state to the return value
    convertToGanttTasks().then((res) => {
      setFinalTasks(res);
    });
  }, [phasesUpdated, phases]);

  useEffect(() => {}, [finalTasks]);

  var tasks = [
    {
      id: "Task 1",
      name: "Redesign website",
      start: "2016-12-08",
      end: "2016-12-10",
      progress: 30,
      dependencies: "Task 2, Task 3",
    },
    {
      id: "Task 2",
      name: "Redesign website",
      start: "2016-12-09",
      end: "2016-12-12",
      progress: 50,
      custom_class: "bar-milestone", // optional
    },
    {
      id: "Task 3",
      name: "Redesign website",
      start: "2016-12-08",
      end: "2016-12-09",
      progress: 10,
      custom_class: "bar-milestone", // optional
    },
    {
      id: "Task 4",
      name: "Redesign website",
      start: "2016-12-10",
      end: "2016-12-12",
      progress: 70,
      dependencies: "Task 5, Task 6",
    },
    {
      id: "Task 5",
      name: "Redesign website",
      start: "2016-12-10",
      end: "2016-12-15",
      progress: 90,
      custom_class: "bar-milestone", // optional
    },
    {
      id: "Task 6",
      name: "Redesign website",
      start: "2016-12-10",
      end: "2016-12-12",
      progress: 20,
      custom_class: "bar-milestone", // optional
    },
    {
      id: "Task 7",
      name: "Redesign website",
      start: "2016-12-10",
      end: "2016-12-12",
      progress: 20,
      dependencies: "Task 8, Task 9",
    },
    {
      id: "Task 8",
      name: "Redesign website",
      start: "2016-12-10",
      end: "2016-12-13",
      progress: 20,
      custom_class: "bar-milestone", // optional
    },
    {
      id: "Task 9",
      name: "Redesign website",
      start: "2016-12-10",
      end: "2016-12-14",
      progress: 20,
      custom_class: "bar-milestone", // optional
    },
  ];

  const [viewMode, setViewMode] = useState("Day");

  useEffect(() => {
    console.log(viewMode);
  }, [viewMode]);

  return (
    <div className={styles.main}>
      <GanttNavbar setViewMode={setViewMode} />
      <div className={styles.body}>
        <AddGanttTask />
        {finalTasks.length !== 0 ? (
          <div
            className={
              colormode === "dark" ? styles.mainDarkGantt : styles.mainGantt
            }
            id="main"
          >
            {viewMode === "Week" ? (
              <GanttMonth
                tasks={finalTasks}
                viewMode={"Day"}
                onClick={(task) => console.log(task)}
                onDateChange={(task, start, end) =>
                  console.log(task, start, end)
                }
                onProgressChange={(task, progress) =>
                  console.log(task, progress)
                }
                onfinalTasksChange={(tasks) => console.log(tasks)}
                onViewChange={() => console.log("View has changed")}
              />
            ) : (
              <FrappeGantt
                tasks={finalTasks}
                viewMode={viewMode ? viewMode : "Day"}
                onClick={(task) => console.log(task)}
                onDateChange={(task, start, end) =>
                  console.log(task, start, end)
                }
                onProgressChange={(task, progress) =>
                  console.log(task, progress)
                }
                onTasksChange={(tasks) => console.log(tasks)}
                onViewChange={() => console.log("View has changed")}
              />
            )}
          </div>
        ) : (
          <GanttPlaceholder />
        )}
      </div>
    </div>
  );
}

export default Gantt;
