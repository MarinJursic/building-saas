import React, { useState, useEffect } from "react";
import styles from "../../../styles/AddGanttTask.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { switchColormode } from "../../../redux/actions/colormodeActions";
import {
  openPhase,
  addTask,
  addPhase,
  addSubphase,
} from "../../../redux/actions/phaseActions";

import { motion } from "framer-motion";

import { RiErrorWarningLine } from "react-icons/ri";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

function AddGanttTask() {
  const today = new Date();
  const year = today.getFullYear();
  let date = today.getDate();
  let month = today.getMonth() + 1;
  month = month >= 10 ? month : "0" + month;
  date = date >= 10 ? date : "0" + date;

  const dispatch = useDispatch();
  const colormode = useSelector((state) => state.color.colormode);
  const phases = useSelector((state) => state.phase.phases);
  const error = useSelector((state) => state.error);

  const [bgColor, setBgColor] = useState("#323339");
  const [fontColor, setFontColor] = useState("#5a5e6e");
  const [addColor, setAddColor] = useState("black");
  const [borderColor, setBorderColor] = useState("#e0e0e0");

  const [open, setOpen] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");

  const [newTaskPhaseID, setNewTaskPhaseID] = useState(null);
  const [newSubphasePhaseID, setNewSubphasePhaseID] = useState(null);
  const [addingNewPhase, setAddingNewPhase] = useState(false);

  const [newTaskName, setNewTaskName] = useState("");
  const [newStartDate, setNewStartDate] = useState(`${year}-${month}-${date}`);
  const [newEndDate, setNewEndDate] = useState(`${year}-${month}-${date}`);

  const [newPhaseName, setNewPhaseName] = useState("");
  const [newSubphaseName, setNewSubphaseName] = useState("");

  const [fuVal, setFuVal] = useState(0);

  const forceUpdate = () => setFuVal(fuVal + 1);

  useEffect(() => {
    if (error.msg !== null) {
      if (error.id === "ADD_TASK_FAIL") setErrorMsg(error.msg);
    } else {
      setErrorMsg(null);
    }
  }, [error]);

  useEffect(() => {
    if (colormode === "light") {
      setBgColor("#f5f6fa");
      setFontColor("#5a5e6e");
      setAddColor("black");
      setBorderColor("#e0e0e0");
    } else {
      setBgColor("#323339");
      setFontColor("#a7a7a9");
      setAddColor("white");
      setBorderColor("#4b4b51");
    }
  }, [colormode]);

  const dropdownIcon = (open) => (
    <svg
      style={{ transform: `rotate(${open ? "0" : "180"}deg)` }}
      width="12"
      height="8"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.09 5.03257L5 2.12257L7.91 5.03257C7.97943 5.102 8.06187 5.15708 8.15259 5.19466C8.24331 5.23224 8.34055 5.25158 8.43875 5.25158C8.53694 5.25158 8.63418 5.23224 8.7249 5.19466C8.81563 5.15708 8.89806 5.102 8.9675 5.03257C9.03693 4.96313 9.09201 4.8807 9.12959 4.78997C9.16717 4.69925 9.18651 4.60201 9.18651 4.50382C9.18651 4.40562 9.16717 4.30838 9.12959 4.21766C9.09201 4.12694 9.03693 4.0445 8.9675 3.97507L5.525 0.532566C5.45561 0.463038 5.3732 0.407877 5.28247 0.370241C5.19174 0.332605 5.09447 0.313232 4.99625 0.313232C4.89802 0.313232 4.80076 0.332605 4.71003 0.370241C4.6193 0.407877 4.53688 0.463038 4.4675 0.532566L1.025 3.97507C0.955469 4.04445 0.900309 4.12687 0.862672 4.2176C0.825036 4.30833 0.805664 4.40559 0.805664 4.50382C0.805664 4.60204 0.825036 4.6993 0.862672 4.79003C0.900309 4.88076 0.955469 4.96318 1.025 5.03257C1.3175 5.31757 1.7975 5.32507 2.09 5.03257Z"
        fill={fontColor}
        fillOpacity="0.7"
      />
    </svg>
  );

  const plusIcon = () => (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 6.75H6.75V10.5C6.75 10.9125 6.4125 11.25 6 11.25C5.5875 11.25 5.25 10.9125 5.25 10.5V6.75H1.5C1.0875 6.75 0.75 6.4125 0.75 6C0.75 5.5875 1.0875 5.25 1.5 5.25H5.25V1.5C5.25 1.0875 5.5875 0.75 6 0.75C6.4125 0.75 6.75 1.0875 6.75 1.5V5.25H10.5C10.9125 5.25 11.25 5.5875 11.25 6C11.25 6.4125 10.9125 6.75 10.5 6.75Z"
        fill={addColor}
      />
    </svg>
  );

  const handleAddTask = (phaseID) => {
    dispatch(addTask(phaseID));
    forceUpdate();
  };

  const printDate = (dateArg) => {
    const date = new Date(dateArg);

    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = month > 10 ? month : "0" + month;
    day = day > 10 ? day : "0" + day;

    return `${month}/${day}/${date.getYear() + 1900}`;
  };

  const getDuration = (start, end) => {
    const endDate = new Date(end);
    const startDate = new Date(start);

    return Math.ceil(Math.abs(endDate - startDate) / (1000 * 60 * 60 * 24));
  };

  const phaseModel = (name, id, open, subID = null, isSub = false) => (
    <div
      className={styles.phase}
      onClick={() => {
        subID ? dispatch(openPhase(id, subID)) : dispatch(openPhase(id));
        forceUpdate();
      }}
      style={{
        borderBottom: `1.5px solid ${borderColor}`,
        paddingLeft: isSub ? "2rem" : "1rem",
      }}
    >
      {dropdownIcon(open)}
      <h5>{name}</h5>
    </div>
  );

  const taskModel = (task, isSub = false) => (
    <div
      className={styles.task}
      style={{
        borderBottom: `1.5px solid ${borderColor}`,
        paddingLeft: isSub ? "3rem" : "2rem",
      }}
    >
      <h5>{task.name}</h5>
      <div className={styles.info}>
        <p>{printDate(task.start)}</p>
        <p>{printDate(task.end)}</p>
        <p>{getDuration(task.start, task.end)} days</p>
        <svg
          width="10"
          height="10"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="4"
            cy="4"
            r="4"
            fill={task.progress === 100 ? "#36d989" : "#FDA076"}
          />
        </svg>
      </div>
    </div>
  );

  const addModel = (phaseID) => (
    <div
      className={styles.add}
      style={{
        color: addColor,
        borderBottom: `1.5px solid ${borderColor}`,
      }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
        onClick={() => setNewTaskPhaseID(phaseID)}
      >
        {plusIcon()}
        <h4>New Task</h4>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
        onClick={() => setNewSubphasePhaseID(phaseID)}
      >
        {plusIcon()}
        <h4>New Subphase</h4>
      </motion.div>
    </div>
  );

  const handleTaskKeyDown = (e) => {
    if (e.key === "Enter") {
      const start = new Date(newStartDate);
      const end = new Date(newEndDate);
      const duration = end - start;
      const progress = ((today - start) / duration) * 100;

      const newTask = {
        name: newTaskName,
        start: new Date(newStartDate),
        end: new Date(newEndDate),
        progress: Math.max(Math.min(progress, 100), 0),
      };

      dispatch(addTask(newTask, newTaskPhaseID));
      setNewTaskPhaseID(null);
      setNewTaskName("");
      dispatch(openPhase(newTaskPhaseID, true));
    } else if (e.keyCode === 27) {
      setNewTaskPhaseID(null);
      setNewTaskName("");
    }
  };

  const addTaskInputModel = (phaseID) => (
    <div
      className={styles.task}
      style={{
        borderBottom: `1.5px solid ${borderColor}`,
        paddingLeft: "1rem",
      }}
    >
      <input
        placeholder="Enter task name..."
        onChange={(e) => setNewTaskName(e.target.value)}
        onKeyDown={handleTaskKeyDown}
        style={{ color: addColor }}
      />
      <div className={styles.info}>
        <input
          className={styles.dateInput}
          type="date"
          defaultValue={newStartDate}
          onChange={(e) => setNewStartDate(e.target.value)}
          onKeyDown={handleTaskKeyDown}
          style={{ color: addColor }}
        />
        <input
          className={styles.dateInput}
          type="date"
          defaultValue={newEndDate}
          onChange={(e) => setNewEndDate(e.target.value)}
          onKeyDown={handleTaskKeyDown}
          style={{ color: addColor }}
        />
        <p>
          {Math.ceil(new Date(newEndDate) - new Date(newStartDate)) /
            (1000 * 60 * 60 * 24)}
        </p>
      </div>
    </div>
  );

  const handlePhaseKeyDown =
    (isSub = false) =>
    (e) => {
      if (e.key === "Enter") {
        const newPhase = {
          name: isSub ? newSubphaseName : newPhaseName,
          progress: 100,
        };

        if (isSub) {
          dispatch(addSubphase(newPhase, newSubphasePhaseID));
          setNewSubphaseName("");
          setNewSubphasePhaseID(null);
          dispatch(openPhase(newSubphasePhaseID, true));
        } else {
          dispatch(addPhase(newPhase));
          setAddingNewPhase(false);
          setNewPhaseName("");
        }
      } else if (e.keyCode === 27) {
        if (isSub) {
          setNewSubphaseName("");
          setNewSubphasePhaseID(null);
        } else {
          setAddingNewPhase(false);
          setNewPhaseName("");
        }
      }
    };

  const newPhaseModel = (phaseID = null) => (
    <div
      className={styles.phase}
      style={{
        borderBottom: `1.5px solid ${borderColor}`,
        paddingLeft: "1rem",
      }}
    >
      {phaseID ? (
        <input
          placeholder="Enter subphase name..."
          onChange={(e) => setNewSubphaseName(e.target.value)}
          onKeyDown={handlePhaseKeyDown(true)}
          style={{ color: addColor }}
        />
      ) : (
        <input
          placeholder="Enter phase name..."
          onChange={(e) => setNewPhaseName(e.target.value)}
          onKeyDown={handlePhaseKeyDown()}
          style={{ color: addColor }}
        />
      )}
    </div>
  );

  const emptyPhaseModel = (name) => (
    <div
      className={styles.phase}
      style={{
        borderBottom: `1.5px solid ${borderColor}`,
        paddingLeft: "2rem",
      }}
    >
      <RiErrorWarningLine size="1.3rem" color="red" />
      <h5>{name} has no active tasks</h5>
    </div>
  );

  const errorModel = () => (
    <div className={styles.errorMessage}>
      <RiErrorWarningLine size="1.8rem" color="white" /> <h5>{errorMsg}</h5>
    </div>
  );

  const renderPhases = () => {
    const render = [];
    phases.forEach((phase) => {
      render.push(phaseModel(phase.name, phase.id, phase.open));
      if (phase.open) {
        if (phase.subphases.length === 0 && phase.tasks.length === 0) {
          render.push(emptyPhaseModel(phase.name));
        }

        phase.subphases.forEach((subphase) => {
          render.push(
            phaseModel(
              subphase.name,
              phase.id,
              subphase.open,
              subphase.id,
              true
            )
          );

          if (subphase.open) {
            if (subphase.tasks.length === 0) {
              render.push(emptyPhaseModel(subphase.name));
            }

            subphase.tasks.forEach((task) => {
              render.push(taskModel(task, true));
            });
          }
        });

        phase.tasks.forEach((task) => {
          render.push(taskModel(task));
        });
      }

      if (newTaskPhaseID === phase.id) {
        render.push(addTaskInputModel(phase.id));
      } else if (newSubphasePhaseID === phase.id) {
        render.push(newPhaseModel(phase.id));
      }

      render.push(addModel(phase.id));
    });

    if (addingNewPhase) {
      render.push(newPhaseModel());
    }

    errorMsg && render.push(errorModel());

    return render;
  };

  return (
    <div
      className={styles.addGanttTask}
      style={{ color: fontColor, backgroundColor: bgColor }}
    >
      <div
        className={styles.header}
        style={{
          borderBottom: `1.5px solid ${borderColor}`,
          borderTop: `1.5px solid ${borderColor}`,
        }}
      >
        <p>Name</p>
        <div className={styles.time}>
          <p>Start Date</p>
          <p>End Date</p>
          <p>Duration</p>
        </div>
      </div>
      <SimpleBar
        style={{ maxHeight: "45rem" }}
        forceVisible="y"
        autoHide={false}
      >
        <div className={styles.content}>{renderPhases()}</div>
      </SimpleBar>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
        className={styles.newPhase}
        style={{
          color: addColor,
          border: `1.5px solid ${borderColor}`,
        }}
        onClick={() => setAddingNewPhase(true)}
      >
        {plusIcon()}
        <h4>New Phase</h4>
      </motion.div>
    </div>
  );
}

export default AddGanttTask;
