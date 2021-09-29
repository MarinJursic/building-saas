/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Kanban.module.scss";
import { useEffect, useState, useReducer } from "react";
import { motion } from "framer-motion";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { useDispatch, useSelector } from "react-redux";
import { changeName, changeAddress } from "../redux/actions/infoActions";

import { deleteTask } from "../redux/actions/taskActions";

import "simplebar/src/simplebar.css";

import SimpleBar from "simplebar-react";

export default function Kanban() {
  const name = useSelector((state) => state.info.name);
  const address = useSelector((state) => state.info.address);

  const colormode = useSelector((state) => state.color.colormode);

  const [NotStartedExpand, setNotStartedExpand] = useState(true);
  const [InProgressExpand, setInProgressExpand] = useState(true);
  const [DoneExpand, setDoneExpand] = useState(true);

  const [bgColor, setBgColor] = useState("#F5F6FA");
  const [secondaryColor, setSecondaryColor] = useState("#FFFFFF");
  const [mainFontColor, setMainFontColor] = useState("black");
  const [headertitle, setHeaderTitle] = useState("#181d32");
  const [secondaryFontColor, setSecondaryFontColor] = useState(
    "rgba(24, 29, 50, 0.7)"
  );
  const [borderColor, setBorderColor] = useState("rgba(0,0,0,0.1)");
  const [chatColor, setChatColor] = useState(
    "linear-gradient(270deg, #F5F6FA 31.64%, rgba(245, 246, 250, 0) 100%)"
  );

  useEffect(() => {
    if (colormode === "light") {
      setBgColor("#F5F6FA");
      setSecondaryColor("white");
      setMainFontColor("black");
      setHeaderTitle("#181d32");
      setBorderColor("rgba(0,0,0,0.1)");
      setSecondaryFontColor("rgba(24,29,50,0.7)");
      setChatColor(
        "linear-gradient(270deg,#F5f6FA 31.64%, rgba(245,246,250,0) 100%)"
      );
    } else {
      setBgColor("#222328");
      setSecondaryColor("#323339");
      setHeaderTitle("white");
      setMainFontColor("white");
      setBorderColor("rgba(255,255,255,0.1");
      setSecondaryFontColor("rgba(255, 255, 255, 0.6)");
      setChatColor(
        "linear-gradient(270deg, #222328 31.64%, rgba(34, 35, 40, 0) 100%)"
      );
    }
  }, [colormode]);

  const dispatch = useDispatch();

  const imgFiletype = (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.25 1.75V12.25H1.75V1.75H12.25ZM12.25 0.25H1.75C0.925 0.25 0.25 0.925 0.25 1.75V12.25C0.25 13.075 0.925 13.75 1.75 13.75H12.25C13.075 13.75 13.75 13.075 13.75 12.25V1.75C13.75 0.925 13.075 0.25 12.25 0.25ZM8.605 6.895L6.355 9.7975L4.75 7.855L2.5 10.75H11.5L8.605 6.895Z"
        fill="#7A9EFF"
      />
    </svg>
  );

  const pdfFiletype = (
    <svg
      width="12"
      height="16"
      viewBox="0 0 12 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 0.5H1.5C0.675 0.5 0.00750017 1.175 0.00750017 2L0 14C0 14.825 0.6675 15.5 1.4925 15.5H10.5C11.325 15.5 12 14.825 12 14V5L7.5 0.5ZM1.5 14V2H6.75V5.75H10.5V14H1.5Z"
        fill="#FF5C72"
      />
    </svg>
  );

  const Tasks = [
    {
      id: "zjrzgd",
      title: "Zidovi",
      progress: "Not started",
      description:
        "Build wooden frame to serve as the skeleton of a new wall and a new",
      startDate: "02/18/2023",
      endDate: "06/23/2023",
      checklist: [
        {
          title: "An unchecked entry",
          value: false,
        },
        {
          title: "Another unchecked entry, what a shame",
          value: false,
        },
        {
          title: "Wow, a check task. Good Job!",
          value: true,
        },
      ],
      priority: "!!",
      phase: "Framing",
      subphase: [],
      assignees: [
        "https://i.imgur.com/tYESN4A.png",
        "https://i.imgur.com/bXmwUmi.png",
      ],
      attachments: [
        {
          imgUrl:
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
          filetype: "img",
          filename: "ab-photo1.jpg",
        },
        {
          imgUrl:
            "https://static.dezeen.com/uploads/2020/02/house-in-the-landscape-niko-arcjitect-architecture-residential-russia-houses-khurtin_dezeen_2364_hero-852x479.jpg",
          filetype: "img",
          filename: "ab-photo2.jpg",
        },
        {
          imgUrl:
            "https://static.onecms.io/wp-content/uploads/sites/37/2016/02/15230656/white-modern-house-curved-patio-archway-c0a4a3b3.jpg",
          filetype: "pdf",
          filename: "wall.pdf",
        },
      ],
    },
    {
      id: "dagfdhwz",
      title: "House",
      progress: "Not started",
      description:
        "Build wooden frame to serve as the skeleton of a new wall and a new",
      startDate: "02/18/2023",
      endDate: "06/23/2023",
      checklist: [
        {
          title: "An unchecked entry",
          value: false,
        },
        {
          title: "Another unchecked entry, what a shame",
          value: false,
        },
        {
          title: "Wow, a check task. Good Job!",
          value: true,
        },
      ],
      priority: "!!",
      phase: "Framing",
      subphase: [],
      assignees: [
        "https://i.imgur.com/tYESN4A.png",
        "https://i.imgur.com/bXmwUmi.png",
      ],
      attachments: [
        {
          imgUrl:
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
          filetype: "img",
          filename: "ab-photo1.jpg",
        },
        {
          imgUrl:
            "https://static.dezeen.com/uploads/2020/02/house-in-the-landscape-niko-arcjitect-architecture-residential-russia-houses-khurtin_dezeen_2364_hero-852x479.jpg",
          filetype: "img",
          filename: "ab-photo2.jpg",
        },
        {
          imgUrl:
            "https://static.onecms.io/wp-content/uploads/sites/37/2016/02/15230656/white-modern-house-curved-patio-archway-c0a4a3b3.jpg",
          filetype: "pdf",
          filename: "wall.pdf",
        },
      ],
    },
    {
      id: "dadbf",
      title: "Frame basement wall",
      progress: "In Progress",
      description:
        "Build wooden frame to serve as the skeleton of a new wall and a new",
      startDate: "02/18/2023",
      endDate: "06/23/2023",
      checklist: [
        {
          title: "An unchecked entry",
          value: false,
        },
        {
          title: "Another unchecked entry, what a shame",
          value: false,
        },
        {
          title: "Wow, a check task. Good Job!",
          value: true,
        },
      ],
      priority: "!!",
      phase: "Framing",
      subphase: [],
      assignees: [
        "https://i.imgur.com/tYESN4A.png",
        "https://i.imgur.com/bXmwUmi.png",
      ],
      attachments: [
        {
          imgUrl:
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
          filetype: "img",
          filename: "ab-photo1.jpg",
        },
        {
          imgUrl:
            "https://static.dezeen.com/uploads/2020/02/house-in-the-landscape-niko-arcjitect-architecture-residential-russia-houses-khurtin_dezeen_2364_hero-852x479.jpg",
          filetype: "img",
          filename: "ab-photo2.jpg",
        },
        {
          imgUrl:
            "https://static.onecms.io/wp-content/uploads/sites/37/2016/02/15230656/white-modern-house-curved-patio-archway-c0a4a3b3.jpg",
          filetype: "pdf",
          filename: "wall.pdf",
        },
      ],
    },
    {
      id: "984367a",
      title: "Frame basement wall",
      progress: "In Progress",
      description:
        "Build wooden frame to serve as the skeleton of a new wall and a new",
      startDate: "02/18/2023",
      endDate: "06/23/2023",
      checklist: [
        {
          title: "An unchecked entry",
          value: false,
        },
        {
          title: "Another unchecked entry, what a shame",
          value: false,
        },
        {
          title: "Wow, a check task. Good Job!",
          value: true,
        },
      ],
      priority: "!",
      phase: "Layout",
      subphase: ["Subphase"],
      assignees: [
        "https://i.imgur.com/tYESN4A.png",
        "https://i.imgur.com/bXmwUmi.png",
      ],
      attachments: [
        {
          imgUrl:
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
          filetype: "img",
          filename: "ab-photo1.jpg",
        },
        {
          imgUrl:
            "https://static.dezeen.com/uploads/2020/02/house-in-the-landscape-niko-arcjitect-architecture-residential-russia-houses-khurtin_dezeen_2364_hero-852x479.jpg",
          filetype: "img",
          filename: "ab-photo2.jpg",
        },
        {
          imgUrl:
            "https://static.onecms.io/wp-content/uploads/sites/37/2016/02/15230656/white-modern-house-curved-patio-archway-c0a4a3b3.jpg",
          filetype: "pdf",
          filename: "wall.pdf",
        },
      ],
    },
    {
      id: "bbcsdg",
      title: "basement",
      progress: "Done",
      description:
        "Build wooden frame to serve as the skeleton of a new wall and a new",
      startDate: "02/18/2023",
      endDate: "06/23/2023",
      checklist: [
        {
          title: "An unchecked entry",
          value: false,
        },
        {
          title: "Another unchecked entry, what a shame",
          value: false,
        },
        {
          title: "Wow, a check task. Good Job!",
          value: true,
        },
      ],
      priority: "!!",
      phase: "Framing",
      subphase: [],
      assignees: [
        "https://i.imgur.com/tYESN4A.png",
        "https://i.imgur.com/bXmwUmi.png",
      ],
      attachments: [
        {
          imgUrl:
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
          filetype: "img",
          filename: "ab-photo1.jpg",
        },
        {
          imgUrl:
            "https://static.dezeen.com/uploads/2020/02/house-in-the-landscape-niko-arcjitect-architecture-residential-russia-houses-khurtin_dezeen_2364_hero-852x479.jpg",
          filetype: "img",
          filename: "ab-photo2.jpg",
        },
        {
          imgUrl:
            "https://static.onecms.io/wp-content/uploads/sites/37/2016/02/15230656/white-modern-house-curved-patio-archway-c0a4a3b3.jpg",
          filetype: "pdf",
          filename: "wall.pdf",
        },
      ],
    },
    {
      id: "zzzz",
      title: "Ceiling",
      progress: "Done",
      description:
        "Build wooden frame to serve as the skeleton of a new wall and a new",
      startDate: "02/18/2023",
      endDate: "06/23/2023",
      checklist: [
        {
          title: "An unchecked entry",
          value: false,
        },
        {
          title: "Another unchecked entry, what a shame",
          value: false,
        },
        {
          title: "Wow, a check task. Good Job!",
          value: true,
        },
      ],
      priority: "!!",
      phase: "Framing",
      subphase: [],
      assignees: [
        "https://i.imgur.com/tYESN4A.png",
        "https://i.imgur.com/bXmwUmi.png",
      ],
      attachments: [
        {
          imgUrl:
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
          filetype: "img",
          filename: "ab-photo1.jpg",
        },
        {
          imgUrl:
            "https://static.dezeen.com/uploads/2020/02/house-in-the-landscape-niko-arcjitect-architecture-residential-russia-houses-khurtin_dezeen_2364_hero-852x479.jpg",
          filetype: "img",
          filename: "ab-photo2.jpg",
        },
        {
          imgUrl:
            "https://static.onecms.io/wp-content/uploads/sites/37/2016/02/15230656/white-modern-house-curved-patio-archway-c0a4a3b3.jpg",
          filetype: "pdf",
          filename: "wall.pdf",
        },
      ],
    },
  ];

  const [tags, setTags] = useState(["Excavation", "Layout", "Subphase"]);

  const [details, setDetails] = useState({});

  const [view, setView] = useState(false);

  const [isClosing, setIsClosing] = useState(false);

  const [edit, setEdit] = useState(false);

  const [editDetails, setEditDetails] = useState(false);

  const [newName, setNewName] = useState(name);

  const [newAddress, setNewAddress] = useState(address);

  const [image, setImage] = useState(null);

  const [activeSwitch, setActiveSwitch] = useState("left");

  const [id, setId] = useState(null);

  const [tasks, setTasks] = useState(Tasks);

  const [messages, setMessages] = useState([
    {
      type: "away",
      text: "I'll add some new attachments later",
      image: "https://i.imgur.com/bXmwUmi.png",
    },
    {
      type: "home",
      text: "Great...",
      image: "https://i.imgur.com/MjujAYi.png",
    },
  ]);

  const [columnsFromBackend, setColumnsFromBackend] = useState({
    notStartedTasks: {
      name: "Not started",
      items: tasks.filter((task) => task.progress === "Not started"),
    },
    inProgressTasks: {
      name: "In Progress",
      items: tasks.filter((task) => task.progress === "In Progress"),
    },
    doneTasks: {
      name: "Done",
      items: tasks.filter((task) => task.progress === "Done"),
    },
  });

  useEffect(() => {
    setColumnsFromBackend({
      notStartedTasks: {
        name: "Not started",
        items: tasks.filter((task) => task.progress === "Not started"),
      },
      inProgressTasks: {
        name: "In Progress",
        items: tasks.filter((task) => task.progress === "In Progress"),
      },
      doneTasks: {
        name: "Done",
        items: tasks.filter((task) => task.progress === "Done"),
      },
    });
  }, [tasks]);

  const [columns, setColumns] = useState(columnsFromBackend);

  useEffect(() => {
    setColumns(columnsFromBackend);
  }, [columnsFromBackend]);

  const handleOnDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      if (destination.droppableId === "notStartedTasks") {
        removed.progress = "Not started";
      } else if (destination.droppableId === "inProgressTasks") {
        removed.progress = "In Progress";
      } else {
        removed.progress = "Done";
      }
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  const open = (task, key) => {
    console.log(task);
    setDetails(task);
    setView(true);
    setId(key);
  };

  const save = () => {
    dispatch(changeName(newName));
    dispatch(changeAddress(newAddress));
    setEdit(false);
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  useEffect(() => {
    if (isClosing) {
      const timeout = setTimeout(() => {
        setIsClosing(false);
      }, 250);

      return () => clearTimeout(timeout);
    }
  }, [isClosing]);

  const detailVariants = {
    open: { opacity: 1, x: 0, width: "38rem" },
    closing: { opacity: 0, x: "100%" },
    closed: { display: "none" },
  };

  const editVariants = {
    open: { height: "10rem" },
    closed: { height: "7rem" },
  };

  const switchVariants = {
    left: { x: 0 },
    right: { x: "100%" },
  };

  const deleteTag = (name) => {
    const newTags = tags.filter((tag) => tag !== name);

    setTags(newTags);
  };

  const [newDetails, setNewDetails] = useState({});

  const [oldDetails, setOldDetails] = useState({});

  const changeProgress = (e) => {
    const data = JSON.parse(JSON.stringify(details));
    data.progress = e.target.innerText;

    setNewDetails(data);

    handleUpdate();
  };

  const changePriority = (e) => {
    const data = JSON.parse(JSON.stringify(details));
    data.priority = e.target.innerText;

    setNewDetails(data);

    handleUpdate();
  };

  const handleCancel = () => {
    setNewDetails(oldDetails);
    setEditDetails(false);
  };

  const handleSave = async () => {
    const data = JSON.parse(JSON.stringify(newDetails));

    setDetails(data);

    const newTasks = await tasks.map((task) => {
      if (task.id === data.id) {
        task = data;
      }
      return task;
    });

    setTasks(newTasks);

    setEditDetails(false);
  };

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const handleEditDetails = () => {
    setOldDetails(JSON.parse(JSON.stringify(details)));
    setNewDetails(details);
    setEditDetails(true);
  };

  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  function handleUpdate() {
    forceUpdate();
  }

  const handleTextChange = (e) => {
    const text = e.target.value;

    newDetails.description = text;

    console.log(newDetails);
  };

  const handleStartDate = (e) => {
    const date = e.target.value;

    newDetails.startDate = date;
  };

  const handleEndDate = (e) => {
    const date = e.target.value;

    newDetails.endDate = date;
  };

  const handleCheck = (index) => {
    newDetails.checklist[index].value = !newDetails.checklist[index].value;

    handleUpdate();
  };

  const [display, setDisplay] = useState(false);

  const handleSwitch = () => {
    if (activeSwitch === "right") {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
    setActiveSwitch(activeSwitch === "right" ? "left" : "right");
  };

  useEffect(() => {}, [columns, details, tasks]);

  const handleDelete = (e) => {
    console.log(id);
    var Novi = [];
    tasks.map((task) => {
      if (task.id !== id) {
        Novi.push(task);
      }
    });
    setTasks(Novi);
    setView(false);
    setIsClosing(true);
    forceUpdate();
  };

  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmitMessage = () => {
    const newMsg = {
      type: "home",
      text: text,
      image: "https://i.imgur.com/MjujAYi.png",
    };

    setMessages([...messages, newMsg]);
    setText("");
    forceUpdate();
  };

  return (
    <div className={styles.kanban} style={{ backgroundColor: bgColor }}>
      <motion.div
        animate={view ? "open" : isClosing ? "closing" : "closed"}
        transition={{ duration: 0.2 }}
        variants={detailVariants}
        className={styles.details}
        style={{ backgroundColor: secondaryColor }}
        id="details"
      >
        {details.checklist && (
          <div className={styles.dHeader}>
            {editDetails && (
              <div
                className={styles.editHeader}
                style={{ borderColor: borderColor }}
              >
                <div
                  className={styles.editHeaderTitle}
                  style={{ color: headertitle }}
                >
                  Edit task
                </div>
                <div className={styles.editHeaderButtons}>
                  <button
                    type="submit"
                    onClick={handleCancel}
                    className={styles.editHeaderCancel}
                    style={{
                      color: secondaryFontColor,
                      borderColor: borderColor,
                    }}
                  >
                    Cancel
                  </button>
                  <div
                    className={styles.editHeaderSaveBox}
                    onClick={handleSave}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.75 0.25H1.75C1.35218 0.25 0.970644 0.408035 0.68934 0.68934C0.408035 0.970644 0.25 1.35218 0.25 1.75V12.25C0.25 12.6478 0.408035 13.0294 0.68934 13.3107C0.970644 13.592 1.35218 13.75 1.75 13.75H12.25C13.075 13.75 13.75 13.075 13.75 12.25V3.25L10.75 0.25ZM12.25 12.25H1.75V1.75H10.1275L12.25 3.8725V12.25ZM7 7C5.755 7 4.75 8.005 4.75 9.25C4.75 10.495 5.755 11.5 7 11.5C8.245 11.5 9.25 10.495 9.25 9.25C9.25 8.005 8.245 7 7 7ZM2.5 4C2.5 3.17157 3.17157 2.5 4 2.5H7.75C8.57843 2.5 9.25 3.17157 9.25 4C9.25 4.82843 8.57843 5.5 7.75 5.5H4C3.17157 5.5 2.5 4.82843 2.5 4Z"
                        fill="white"
                      />
                    </svg>
                    <h1>Save</h1>
                  </div>
                </div>
              </div>
            )}
            <div className={styles.subheader}>
              <h1
                style={
                  editDetails
                    ? {
                        borderBottom: "1px solid rgba(0,0,0,0.1)",
                        width: "100%",
                        color: headertitle,
                      }
                    : {
                        color: headertitle,
                      }
                }
              >
                {details.title}‏‏‎ ‎‏‏‎ ‎‏‏‎‎
                {details.priority !== "None" && !editDetails && (
                  <strong
                    style={
                      details.priority === "!!"
                        ? { color: "#FF5C72" }
                        : { color: "#FDA076" }
                    }
                  >
                    {details.priority}
                  </strong>
                )}
              </h1>
              <div
                style={
                  editDetails
                    ? {
                        display: "none",
                      }
                    : {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "7rem",
                      }
                }
              >
                <svg
                  onClick={handleEditDetails}
                  className={styles.editBtn}
                  width="16"
                  height="16"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.545 4.765L9.235 5.455L2.44 12.25H1.75V11.56L8.545 4.765ZM11.245 0.25C11.0575 0.25 10.8625 0.325 10.72 0.4675L9.3475 1.84L12.16 4.6525L13.5325 3.28C13.602 3.21061 13.6572 3.1282 13.6948 3.03747C13.7325 2.94674 13.7518 2.84948 13.7518 2.75125C13.7518 2.65302 13.7325 2.55576 13.6948 2.46503C13.6572 2.3743 13.602 2.29189 13.5325 2.2225L11.7775 0.4675C11.6275 0.3175 11.44 0.25 11.245 0.25ZM8.545 2.6425L0.25 10.9375V13.75H3.0625L11.3575 5.455L8.545 2.6425Z"
                    fill={headertitle}
                    fillOpacity="0.7"
                  />
                </svg>
                <svg
                  onClick={handleDelete}
                  className={styles.deleteBtn}
                  width="16"
                  height="18"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.65015 2L5.35015 2.00001C5.19102 2.00001 5.0384 2.06322 4.92588 2.17575C4.81336 2.28827 4.75015 2.44088 4.75015 2.60001V3.50001H9.25015V2.6C9.25015 2.44087 9.18693 2.28826 9.07441 2.17574C8.96189 2.06321 8.80928 2 8.65015 2ZM10.7501 3.50001V2.6C10.7501 2.04305 10.5289 1.5089 10.1351 1.11508C9.74124 0.721249 9.2071 0.5 8.65014 0.5L5.35014 0.500009C4.79319 0.500009 4.25905 0.721258 3.86522 1.11508C3.4714 1.50891 3.25015 2.04305 3.25015 2.60001V3.50001H1C0.585786 3.50001 0.25 3.8358 0.25 4.25001C0.25 4.66422 0.585786 5.00001 1 5.00001H1.75015V13.4C1.75015 13.957 1.9714 14.4911 2.36522 14.8849C2.75905 15.2788 3.29319 15.5 3.85015 15.5H10.1501C10.7071 15.5 11.2412 15.2788 11.6351 14.8849C12.0289 14.4911 12.2501 13.957 12.2501 13.4V5.00001H13C13.4142 5.00001 13.75 4.66422 13.75 4.25001C13.75 3.8358 13.4142 3.50001 13 3.50001H10.7501ZM10.7501 5.00001H3.25015V13.4C3.25015 13.5591 3.31336 13.7118 3.42588 13.8243C3.5384 13.9368 3.69102 14 3.85015 14H10.1501C10.3093 14 10.4619 13.9368 10.5744 13.8243C10.6869 13.7118 10.7501 13.5591 10.7501 13.4V5.00001ZM5.5 6.5C5.91421 6.5 6.25 6.83579 6.25 7.25V11.75C6.25 12.1642 5.91421 12.5 5.5 12.5C5.08579 12.5 4.75 12.1642 4.75 11.75V7.25C4.75 6.83579 5.08579 6.5 5.5 6.5ZM8.5 6.5C8.91421 6.5 9.25 6.83579 9.25 7.25V11.75C9.25 12.1642 8.91421 12.5 8.5 12.5C8.08579 12.5 7.75 12.1642 7.75 11.75V7.25C7.75 6.83579 8.08579 6.5 8.5 6.5Z"
                    fill={headertitle}
                    fillOpacity="0.7"
                  />
                </svg>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => {
                    setView(false);
                    setIsClosing(true);
                  }}
                >
                  <path
                    d="M9.72504 0.2825C9.65566 0.212972 9.57324 0.157812 9.48251 0.120175C9.39178 0.0825394 9.29452 0.0631667 9.19629 0.0631667C9.09807 0.0631667 9.00081 0.0825394 8.91008 0.120175C8.81935 0.157812 8.73693 0.212972 8.66754 0.2825L5.00005 3.9425L1.33255 0.275C1.26311 0.205563 1.18068 0.150483 1.08995 0.112905C0.99923 0.0753258 0.901994 0.0559845 0.803796 0.0559845C0.705598 0.0559845 0.608361 0.0753258 0.517638 0.112905C0.426915 0.150483 0.344482 0.205563 0.275045 0.275C0.205609 0.344436 0.150529 0.426869 0.11295 0.517592C0.0753716 0.608315 0.0560303 0.705552 0.0560303 0.80375C0.0560303 0.901948 0.0753716 0.999184 0.11295 1.08991C0.150529 1.18063 0.205609 1.26306 0.275045 1.3325L3.94255 5L0.275045 8.6675C0.205609 8.73693 0.150529 8.81937 0.11295 8.91009C0.0753716 9.00081 0.0560303 9.09805 0.0560303 9.19625C0.0560303 9.29445 0.0753716 9.39168 0.11295 9.48241C0.150529 9.57313 0.205609 9.65556 0.275045 9.725C0.344482 9.79443 0.426915 9.84951 0.517638 9.88709C0.608361 9.92467 0.705598 9.94401 0.803796 9.94401C0.901994 9.94401 0.99923 9.92467 1.08995 9.88709C1.18068 9.84951 1.26311 9.79443 1.33255 9.725L5.00005 6.0575L8.66754 9.725C8.73698 9.79443 8.81941 9.84951 8.91014 9.88709C9.00086 9.92467 9.0981 9.94401 9.19629 9.94401C9.29449 9.94401 9.39173 9.92467 9.48245 9.88709C9.57318 9.84951 9.65561 9.79443 9.72504 9.725C9.79448 9.65556 9.84956 9.57313 9.88714 9.48241C9.92472 9.39168 9.94406 9.29445 9.94406 9.19625C9.94406 9.09805 9.92472 9.00081 9.88714 8.91009C9.84956 8.81937 9.79448 8.73693 9.72504 8.6675L6.05754 5L9.72504 1.3325C10.01 1.0475 10.01 0.5675 9.72504 0.2825Z"
                    fill={headertitle}
                    fillOpacity="0.7"
                  />
                </svg>
              </div>
            </div>
            <SimpleBar
              style={
                editDetails
                  ? { maxHeight: "31rem", paddingInline: "2rem" }
                  : { maxHeight: "35.6rem", paddingInline: "2rem" }
              }
            >
              <div className={styles.headerBody}>
                <div className={styles.dRow}>
                  <div
                    className={styles.dCategory}
                    style={{ color: secondaryFontColor }}
                  >
                    PROGRESS
                  </div>
                  <div className={styles.dProgress}>
                    {editDetails ? (
                      <div>
                        <button
                          type="submit"
                          className={styles.editProgressText}
                          style={
                            newDetails.progress === "Not started"
                              ? {
                                  backgroundColor: "#ff5c72",
                                  color: "white",
                                  border: "none",
                                }
                              : {
                                  color: secondaryFontColor,
                                }
                          }
                          onClick={changeProgress}
                        >
                          Not started
                        </button>
                        <button
                          type="submit"
                          className={styles.editProgressText}
                          style={
                            newDetails.progress === "In Progress"
                              ? {
                                  backgroundColor: "#fda076",
                                  color: "white",
                                  border: "none",
                                }
                              : {
                                  color: secondaryFontColor,
                                }
                          }
                          onClick={changeProgress}
                        >
                          In Progress
                        </button>
                        <button
                          type="submit"
                          className={styles.editProgressText}
                          style={
                            newDetails.progress === "Done"
                              ? {
                                  backgroundColor: "#36d989",
                                  color: "white",
                                  border: "none",
                                }
                              : {
                                  color: secondaryFontColor,
                                }
                          }
                          onClick={changeProgress}
                        >
                          Done
                        </button>
                      </div>
                    ) : (
                      <h1
                        className={styles.progressText}
                        style={
                          details.progress === "Not started"
                            ? {
                                backgroundColor: "#ff5c72",
                                color: "white",
                              }
                            : details.progress === "In Progress"
                            ? {
                                backgroundColor: "#fda076",
                                color: "white",
                              }
                            : {
                                backgroundColor: "#36d989",
                                color: "white",
                              }
                        }
                      >
                        {details ? details.progress : null}
                      </h1>
                    )}
                  </div>
                </div>
                <div className={styles.dRow}>
                  <div
                    className={styles.dCategory}
                    style={{ color: secondaryFontColor }}
                  >
                    DESCRIPTION
                  </div>
                  {editDetails ? (
                    <textarea
                      defaultValue={newDetails.description}
                      onChange={handleTextChange}
                      style={{ BackgroundColor: headertitle }}
                    ></textarea>
                  ) : (
                    <div
                      className={styles.dText}
                      style={{ color: headertitle }}
                    >
                      {details && details.description}
                    </div>
                  )}
                </div>
                <div className={styles.dRow}>
                  <div
                    className={styles.dCategory}
                    style={{ color: secondaryFontColor }}
                  >
                    TIMEFRAME
                  </div>

                  {editDetails ? (
                    <div className={styles.inputDate}>
                      <input
                        type="date"
                        defaultValue={newDetails.startDate}
                        onChange={handleStartDate}
                        style={{
                          marginRight: "0.25rem",
                          BackgroundColor: headertitle,
                        }}
                      />
                      <input
                        type="date"
                        defaultValue={newDetails.endDate}
                        onChange={handleEndDate}
                        style={{ BackgroundColor: headertitle }}
                      />
                    </div>
                  ) : (
                    <div
                      className={styles.dText}
                      style={{ color: headertitle }}
                    >
                      {details && details.startDate} -{" "}
                      {details && details.endDate}
                    </div>
                  )}
                </div>
                <div className={styles.dRow}>
                  <div
                    className={styles.dCategory}
                    style={{ color: secondaryFontColor }}
                  >
                    CHECKLIST
                  </div>
                  <div className={styles.dChecklist}>
                    <div>
                      {details &&
                        details.checklist.map((check, index) => {
                          if (check.value === true) {
                            return (
                              <div
                                className={styles.checklistRow}
                                style={
                                  editDetails
                                    ? {
                                        paddingBottom: "0.75rem",
                                        borderBottom:
                                          "1px solid rgba(0,0,0,0.1)",
                                      }
                                    : null
                                }
                              >
                                <svg
                                  onClick={
                                    editDetails
                                      ? () => handleCheck(index)
                                      : null
                                  }
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13.25 1.25H2.75C1.92157 1.25 1.25 1.92157 1.25 2.75V13.25C1.25 14.0784 1.92157 14.75 2.75 14.75H13.25C14.0784 14.75 14.75 14.0784 14.75 13.25V2.75C14.75 1.92157 14.0784 1.25 13.25 1.25Z"
                                    fill="#181D32"
                                    stroke="#181D32"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M12.6667 4.5L6.25004 10.9167L3.33337 8"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <h1 style={{ color: headertitle }}>
                                  {check.title}
                                </h1>
                                {editDetails && (
                                  <div className={styles.checklistButtons}>
                                    <svg
                                      width="10"
                                      height="10"
                                      viewBox="0 0 10 10"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.72492 0.282485C9.65554 0.212957 9.57312 0.157796 9.48239 0.12016C9.39166 0.0825241 9.2944 0.0631515 9.19617 0.0631515C9.09795 0.0631515 9.00068 0.0825241 8.90995 0.12016C8.81922 0.157796 8.73681 0.212957 8.66742 0.282485L4.99992 3.94248L1.33242 0.274984C1.26299 0.205548 1.18055 0.150468 1.08983 0.112889C0.999108 0.0753106 0.901872 0.0559692 0.803674 0.0559692C0.705476 0.0559692 0.608239 0.0753106 0.517516 0.112889C0.426793 0.150468 0.34436 0.205548 0.274923 0.274984C0.205487 0.344421 0.150407 0.426854 0.112828 0.517577C0.0752495 0.6083 0.0559082 0.705537 0.0559082 0.803735C0.0559082 0.901933 0.0752495 0.999169 0.112828 1.08989C0.150407 1.18062 0.205487 1.26305 0.274923 1.33248L3.94242 4.99998L0.274923 8.66748C0.205487 8.73692 0.150407 8.81935 0.112828 8.91008C0.0752495 9.0008 0.0559082 9.09803 0.0559082 9.19623C0.0559082 9.29443 0.0752495 9.39167 0.112828 9.48239C0.150407 9.57311 0.205487 9.65555 0.274923 9.72498C0.34436 9.79442 0.426793 9.8495 0.517516 9.88708C0.608239 9.92466 0.705476 9.944 0.803674 9.944C0.901872 9.944 0.999108 9.92466 1.08983 9.88708C1.18055 9.8495 1.26299 9.79442 1.33242 9.72498L4.99992 6.05748L8.66742 9.72498C8.73686 9.79442 8.81929 9.8495 8.91002 9.88708C9.00074 9.92466 9.09797 9.944 9.19617 9.944C9.29437 9.944 9.39161 9.92466 9.48233 9.88708C9.57305 9.8495 9.65549 9.79442 9.72492 9.72498C9.79436 9.65555 9.84944 9.57311 9.88702 9.48239C9.9246 9.39167 9.94394 9.29443 9.94394 9.19623C9.94394 9.09803 9.9246 9.0008 9.88702 8.91008C9.84944 8.81935 9.79436 8.73692 9.72492 8.66748L6.05742 4.99998L9.72492 1.33248C10.0099 1.04748 10.0099 0.567485 9.72492 0.282485Z"
                                        fill={headertitle}
                                        fillOpacity="0.7"
                                      />
                                    </svg>
                                    <svg
                                      style={{ marginLeft: "1rem" }}
                                      width="12"
                                      height="6"
                                      viewBox="0 0 12 6"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M12 1.5C12 1.08579 11.6642 0.75 11.25 0.75H0.75C0.335786 0.75 0 1.08579 0 1.5C0 1.91421 0.335786 2.25 0.75 2.25H11.25C11.6642 2.25 12 1.91421 12 1.5ZM0 4.5C0 4.91421 0.335786 5.25 0.75 5.25H11.25C11.6642 5.25 12 4.91421 12 4.5C12 4.08579 11.6642 3.75 11.25 3.75H0.75C0.335786 3.75 0 4.08579 0 4.5Z"
                                        fill={headertitle}
                                        fillOpacity="0.7"
                                      />
                                    </svg>
                                  </div>
                                )}
                              </div>
                            );
                          } else {
                            return (
                              <div
                                className={styles.checklistRow}
                                style={
                                  editDetails
                                    ? {
                                        paddingBottom: "0.75rem",
                                        borderBottom:
                                          "1px solid rgba(0,0,0,0.1)",
                                      }
                                    : null
                                }
                              >
                                <svg
                                  onClick={
                                    editDetails
                                      ? () => handleCheck(index)
                                      : null
                                  }
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13.25 1.25H2.75C1.92157 1.25 1.25 1.92157 1.25 2.75V13.25C1.25 14.0784 1.92157 14.75 2.75 14.75H13.25C14.0784 14.75 14.75 14.0784 14.75 13.25V2.75C14.75 1.92157 14.0784 1.25 13.25 1.25Z"
                                    stroke="#181D32"
                                    strokeopacity="0.7"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <h1 style={{ color: headertitle }}>
                                  {check.title}
                                </h1>
                                {editDetails && (
                                  <div className={styles.checklistButtons}>
                                    <svg
                                      width="10"
                                      height="10"
                                      viewBox="0 0 10 10"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.72492 0.282485C9.65554 0.212957 9.57312 0.157796 9.48239 0.12016C9.39166 0.0825241 9.2944 0.0631515 9.19617 0.0631515C9.09795 0.0631515 9.00068 0.0825241 8.90995 0.12016C8.81922 0.157796 8.73681 0.212957 8.66742 0.282485L4.99992 3.94248L1.33242 0.274984C1.26299 0.205548 1.18055 0.150468 1.08983 0.112889C0.999108 0.0753106 0.901872 0.0559692 0.803674 0.0559692C0.705476 0.0559692 0.608239 0.0753106 0.517516 0.112889C0.426793 0.150468 0.34436 0.205548 0.274923 0.274984C0.205487 0.344421 0.150407 0.426854 0.112828 0.517577C0.0752495 0.6083 0.0559082 0.705537 0.0559082 0.803735C0.0559082 0.901933 0.0752495 0.999169 0.112828 1.08989C0.150407 1.18062 0.205487 1.26305 0.274923 1.33248L3.94242 4.99998L0.274923 8.66748C0.205487 8.73692 0.150407 8.81935 0.112828 8.91008C0.0752495 9.0008 0.0559082 9.09803 0.0559082 9.19623C0.0559082 9.29443 0.0752495 9.39167 0.112828 9.48239C0.150407 9.57311 0.205487 9.65555 0.274923 9.72498C0.34436 9.79442 0.426793 9.8495 0.517516 9.88708C0.608239 9.92466 0.705476 9.944 0.803674 9.944C0.901872 9.944 0.999108 9.92466 1.08983 9.88708C1.18055 9.8495 1.26299 9.79442 1.33242 9.72498L4.99992 6.05748L8.66742 9.72498C8.73686 9.79442 8.81929 9.8495 8.91002 9.88708C9.00074 9.92466 9.09797 9.944 9.19617 9.944C9.29437 9.944 9.39161 9.92466 9.48233 9.88708C9.57305 9.8495 9.65549 9.79442 9.72492 9.72498C9.79436 9.65555 9.84944 9.57311 9.88702 9.48239C9.9246 9.39167 9.94394 9.29443 9.94394 9.19623C9.94394 9.09803 9.9246 9.0008 9.88702 8.91008C9.84944 8.81935 9.79436 8.73692 9.72492 8.66748L6.05742 4.99998L9.72492 1.33248C10.0099 1.04748 10.0099 0.567485 9.72492 0.282485Z"
                                        fill={headertitle}
                                        fillOpacity="0.7"
                                      />
                                    </svg>
                                    <svg
                                      style={{ marginLeft: "1rem" }}
                                      width="12"
                                      height="6"
                                      viewBox="0 0 12 6"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M12 1.5C12 1.08579 11.6642 0.75 11.25 0.75H0.75C0.335786 0.75 0 1.08579 0 1.5C0 1.91421 0.335786 2.25 0.75 2.25H11.25C11.6642 2.25 12 1.91421 12 1.5ZM0 4.5C0 4.91421 0.335786 5.25 0.75 5.25H11.25C11.6642 5.25 12 4.91421 12 4.5C12 4.08579 11.6642 3.75 11.25 3.75H0.75C0.335786 3.75 0 4.08579 0 4.5Z"
                                        fill={headertitle}
                                        fillOpacity="0.7"
                                      />
                                    </svg>
                                  </div>
                                )}
                              </div>
                            );
                          }
                        })}
                      {editDetails && (
                        <div
                          className={styles.checklistRow}
                          style={
                            editDetails
                              ? {
                                  paddingBottom: "0.75rem",
                                }
                              : null
                          }
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.5 6.75H6.75V10.5C6.75 10.9125 6.4125 11.25 6 11.25C5.5875 11.25 5.25 10.9125 5.25 10.5V6.75H1.5C1.0875 6.75 0.75 6.4125 0.75 6C0.75 5.5875 1.0875 5.25 1.5 5.25H5.25V1.5C5.25 1.0875 5.5875 0.75 6 0.75C6.4125 0.75 6.75 1.0875 6.75 1.5V5.25H10.5C10.9125 5.25 11.25 5.5875 11.25 6C11.25 6.4125 10.9125 6.75 10.5 6.75Z"
                              fill={headertitle}
                            />
                          </svg>
                          <h1
                            style={{ fontWeight: "bolder", color: headertitle }}
                          >
                            Add new entry
                          </h1>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className={styles.dRow}>
                  <div
                    className={styles.dCategory}
                    style={{ color: secondaryFontColor }}
                  >
                    PHASE
                  </div>
                  <div className={styles.dProgress}>
                    <h1
                      className={styles.phase}
                      style={{
                        backgroundColor: "#7A9EFF",
                        marginRight: "0.25rem",
                      }}
                    >
                      {editDetails && (
                        <strong>
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.72492 0.282485C9.65554 0.212957 9.57312 0.157796 9.48239 0.12016C9.39166 0.0825241 9.2944 0.0631515 9.19617 0.0631515C9.09795 0.0631515 9.00068 0.0825241 8.90995 0.12016C8.81922 0.157796 8.73681 0.212957 8.66742 0.282485L4.99992 3.94248L1.33242 0.274984C1.26299 0.205548 1.18055 0.150468 1.08983 0.112889C0.999108 0.0753106 0.901872 0.0559692 0.803674 0.0559692C0.705476 0.0559692 0.608239 0.0753106 0.517516 0.112889C0.426793 0.150468 0.34436 0.205548 0.274923 0.274984C0.205487 0.344421 0.150407 0.426854 0.112828 0.517577C0.0752495 0.6083 0.0559082 0.705537 0.0559082 0.803735C0.0559082 0.901933 0.0752495 0.999169 0.112828 1.08989C0.150407 1.18062 0.205487 1.26305 0.274923 1.33248L3.94242 4.99998L0.274923 8.66748C0.205487 8.73692 0.150407 8.81935 0.112828 8.91008C0.0752495 9.0008 0.0559082 9.09803 0.0559082 9.19623C0.0559082 9.29443 0.0752495 9.39167 0.112828 9.48239C0.150407 9.57311 0.205487 9.65555 0.274923 9.72498C0.34436 9.79442 0.426793 9.8495 0.517516 9.88708C0.608239 9.92466 0.705476 9.944 0.803674 9.944C0.901872 9.944 0.999108 9.92466 1.08983 9.88708C1.18055 9.8495 1.26299 9.79442 1.33242 9.72498L4.99992 6.05748L8.66742 9.72498C8.73686 9.79442 8.81929 9.8495 8.91002 9.88708C9.00074 9.92466 9.09797 9.944 9.19617 9.944C9.29437 9.944 9.39161 9.92466 9.48233 9.88708C9.57305 9.8495 9.65549 9.79442 9.72492 9.72498C9.79436 9.65555 9.84944 9.57311 9.88702 9.48239C9.9246 9.39167 9.94394 9.29443 9.94394 9.19623C9.94394 9.09803 9.9246 9.0008 9.88702 8.91008C9.84944 8.81935 9.79436 8.73692 9.72492 8.66748L6.05742 4.99998L9.72492 1.33248C10.0099 1.04748 10.0099 0.567485 9.72492 0.282485Z"
                              fill={"white"}
                            />
                          </svg>
                          ‏‏‎ ‎‏‏‎ ‎
                        </strong>
                      )}
                      ‏‏‎{details && details.phase}
                    </h1>
                    {details.subphase.length !== 0 &&
                      details.subphase.map((sub) => (
                        <h1
                          className={styles.phase}
                          style={{
                            backgroundColor: "#C67AFF",
                          }}
                        >
                          {editDetails && (
                            <strong>
                              <svg
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.72492 0.282485C9.65554 0.212957 9.57312 0.157796 9.48239 0.12016C9.39166 0.0825241 9.2944 0.0631515 9.19617 0.0631515C9.09795 0.0631515 9.00068 0.0825241 8.90995 0.12016C8.81922 0.157796 8.73681 0.212957 8.66742 0.282485L4.99992 3.94248L1.33242 0.274984C1.26299 0.205548 1.18055 0.150468 1.08983 0.112889C0.999108 0.0753106 0.901872 0.0559692 0.803674 0.0559692C0.705476 0.0559692 0.608239 0.0753106 0.517516 0.112889C0.426793 0.150468 0.34436 0.205548 0.274923 0.274984C0.205487 0.344421 0.150407 0.426854 0.112828 0.517577C0.0752495 0.6083 0.0559082 0.705537 0.0559082 0.803735C0.0559082 0.901933 0.0752495 0.999169 0.112828 1.08989C0.150407 1.18062 0.205487 1.26305 0.274923 1.33248L3.94242 4.99998L0.274923 8.66748C0.205487 8.73692 0.150407 8.81935 0.112828 8.91008C0.0752495 9.0008 0.0559082 9.09803 0.0559082 9.19623C0.0559082 9.29443 0.0752495 9.39167 0.112828 9.48239C0.150407 9.57311 0.205487 9.65555 0.274923 9.72498C0.34436 9.79442 0.426793 9.8495 0.517516 9.88708C0.608239 9.92466 0.705476 9.944 0.803674 9.944C0.901872 9.944 0.999108 9.92466 1.08983 9.88708C1.18055 9.8495 1.26299 9.79442 1.33242 9.72498L4.99992 6.05748L8.66742 9.72498C8.73686 9.79442 8.81929 9.8495 8.91002 9.88708C9.00074 9.92466 9.09797 9.944 9.19617 9.944C9.29437 9.944 9.39161 9.92466 9.48233 9.88708C9.57305 9.8495 9.65549 9.79442 9.72492 9.72498C9.79436 9.65555 9.84944 9.57311 9.88702 9.48239C9.9246 9.39167 9.94394 9.29443 9.94394 9.19623C9.94394 9.09803 9.9246 9.0008 9.88702 8.91008C9.84944 8.81935 9.79436 8.73692 9.72492 8.66748L6.05742 4.99998L9.72492 1.33248C10.0099 1.04748 10.0099 0.567485 9.72492 0.282485Z"
                                  fill={"white"}
                                />
                              </svg>
                              ‏‏‎ ‎‏‏‎ ‎
                            </strong>
                          )}
                          {sub}
                        </h1>
                      ))}
                    {editDetails && (
                      <div
                        className={styles.addPhase}
                        style={{ borderColor: borderColor }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.5 6.75H6.75V10.5C6.75 10.9125 6.4125 11.25 6 11.25C5.5875 11.25 5.25 10.9125 5.25 10.5V6.75H1.5C1.0875 6.75 0.75 6.4125 0.75 6C0.75 5.5875 1.0875 5.25 1.5 5.25H5.25V1.5C5.25 1.0875 5.5875 0.75 6 0.75C6.4125 0.75 6.75 1.0875 6.75 1.5V5.25H10.5C10.9125 5.25 11.25 5.5875 11.25 6C11.25 6.4125 10.9125 6.75 10.5 6.75Z"
                            fill={headertitle}
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {editDetails && (
                  <div className={styles.dRow}>
                    <div
                      className={styles.dCategory}
                      style={{ color: secondaryFontColor }}
                    >
                      PRIORITY
                    </div>
                    <div className={styles.dProgress}>
                      <h1
                        className={styles.priority}
                        style={
                          newDetails.priority === "None"
                            ? {
                                backgroundColor: "#C67AFF",
                                color: "white",
                                borderColor: "#C67AFF",
                              }
                            : {
                                color: secondaryFontColor,
                              }
                        }
                        onClick={changePriority}
                      >
                        None
                      </h1>
                      <h1
                        className={styles.priority}
                        style={
                          newDetails.priority === "!"
                            ? {
                                backgroundColor: "#FDA076",
                                color: "white",
                                borderColor: "#FDA076",
                              }
                            : {
                                color: secondaryFontColor,
                              }
                        }
                        onClick={changePriority}
                      >
                        !
                      </h1>
                      <h1
                        className={styles.priority}
                        style={
                          newDetails.priority === "!!"
                            ? {
                                backgroundColor: "#FF5C72",
                                color: "white",
                                borderColor: "#FF5C72",
                              }
                            : {
                                color: secondaryFontColor,
                              }
                        }
                        onClick={changePriority}
                      >
                        !!
                      </h1>
                    </div>
                  </div>
                )}
                <div className={styles.dRow}>
                  <div
                    className={styles.dCategory}
                    style={{ color: secondaryFontColor }}
                  >
                    ASSIGNEE(s)
                  </div>
                  <div className={styles.dImage}>
                    {details.assignees.map((a) => (
                      <img src={a} alt={a} />
                    ))}
                    {editDetails && (
                      <div
                        className={styles.addAssignee}
                        style={{ borderColor: borderColor }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.5 6.75H6.75V10.5C6.75 10.9125 6.4125 11.25 6 11.25C5.5875 11.25 5.25 10.9125 5.25 10.5V6.75H1.5C1.0875 6.75 0.75 6.4125 0.75 6C0.75 5.5875 1.0875 5.25 1.5 5.25H5.25V1.5C5.25 1.0875 5.5875 0.75 6 0.75C6.4125 0.75 6.75 1.0875 6.75 1.5V5.25H10.5C10.9125 5.25 11.25 5.5875 11.25 6C11.25 6.4125 10.9125 6.75 10.5 6.75Z"
                            fill={headertitle}
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                <div className={styles.dRow}>
                  <div
                    className={styles.dCategory}
                    style={{ color: secondaryFontColor }}
                  >
                    ATTACHMENTS
                  </div>
                  <div
                    className={styles.details_imgs}
                    style={
                      editDetails
                        ? {
                            display: "flex",
                            flexDirection: "column",
                            borderColor: borderColor,
                          }
                        : { borderColor: borderColor }
                    }
                  >
                    {details.attachments.map((img, i) => (
                      <div
                        key={i}
                        className={styles.details_img}
                        style={
                          editDetails
                            ? {
                                width: "100%",
                                border: "none",
                                borderBottom: "1px solid rgba(0,0,0,0.25)",
                                borderRadius: "0px",
                                display: "flex",
                                alignItems: "center",
                              }
                            : null
                        }
                      >
                        {!editDetails && (
                          <img
                            className={styles.details_img_main}
                            src={img.imgUrl}
                            alt="details"
                          />
                        )}
                        <div
                          className={
                            !editDetails
                              ? styles.details_img_details
                              : styles.editDetailsImgDetails
                          }
                        >
                          {img.filetype === "img" ? imgFiletype : pdfFiletype}
                          <p style={{ color: secondaryFontColor }}>
                            {img.filename}
                          </p>
                        </div>
                        {editDetails && (
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.72468 0.282485C9.65529 0.212957 9.57288 0.157796 9.48215 0.12016C9.39142 0.0825241 9.29415 0.0631515 9.19593 0.0631515C9.0977 0.0631515 9.00044 0.0825241 8.90971 0.12016C8.81898 0.157796 8.73656 0.212957 8.66718 0.282485L4.99968 3.94248L1.33218 0.274984C1.26274 0.205548 1.18031 0.150468 1.08959 0.112889C0.998864 0.0753106 0.901627 0.0559692 0.80343 0.0559692C0.705232 0.0559692 0.607995 0.0753106 0.517272 0.112889C0.426549 0.150468 0.344116 0.205548 0.274679 0.274984C0.205243 0.344421 0.150163 0.426854 0.112584 0.517577C0.0750054 0.6083 0.0556641 0.705537 0.0556641 0.803735C0.0556641 0.901933 0.0750054 0.999169 0.112584 1.08989C0.150163 1.18062 0.205243 1.26305 0.274679 1.33248L3.94218 4.99998L0.274679 8.66748C0.205243 8.73692 0.150163 8.81935 0.112584 8.91008C0.0750054 9.0008 0.0556641 9.09803 0.0556641 9.19623C0.0556641 9.29443 0.0750054 9.39167 0.112584 9.48239C0.150163 9.57311 0.205243 9.65555 0.274679 9.72498C0.344116 9.79442 0.426549 9.8495 0.517272 9.88708C0.607995 9.92466 0.705232 9.944 0.80343 9.944C0.901627 9.944 0.998864 9.92466 1.08959 9.88708C1.18031 9.8495 1.26274 9.79442 1.33218 9.72498L4.99968 6.05748L8.66718 9.72498C8.73661 9.79442 8.81905 9.8495 8.90977 9.88708C9.00049 9.92466 9.09773 9.944 9.19593 9.944C9.29413 9.944 9.39136 9.92466 9.48209 9.88708C9.57281 9.8495 9.65524 9.79442 9.72468 9.72498C9.79411 9.65555 9.84919 9.57311 9.88677 9.48239C9.92435 9.39167 9.94369 9.29443 9.94369 9.19623C9.94369 9.09803 9.92435 9.0008 9.88677 8.91008C9.84919 8.81935 9.79411 8.73692 9.72468 8.66748L6.05718 4.99998L9.72468 1.33248C10.0097 1.04748 10.0097 0.567485 9.72468 0.282485Z"
                              fill={headertitle}
                              fillOpacity="0.7"
                            />
                          </svg>
                        )}
                        {editDetails && (
                          <svg
                            width="12"
                            height="6"
                            viewBox="0 0 12 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ marginLeft: "1rem" }}
                          >
                            <path
                              d="M12 1.5C12 1.08579 11.6642 0.75 11.25 0.75H0.75C0.335786 0.75 0 1.08579 0 1.5C0 1.91421 0.335786 2.25 0.75 2.25H11.25C11.6642 2.25 12 1.91421 12 1.5ZM0 4.5C0 4.91421 0.335786 5.25 0.75 5.25H11.25C11.6642 5.25 12 4.91421 12 4.5C12 4.08579 11.6642 3.75 11.25 3.75H0.75C0.335786 3.75 0 4.08579 0 4.5Z"
                              fill={headertitle}
                              fillOpacity="0.7"
                            />
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SimpleBar>
          </div>
        )}
        {details.checklist && (
          <SimpleBar style={{ maxHeight: "10rem" }}>
            <div
              className={styles.dChat}
              style={{
                backgroundColor: secondaryColor,
              }}
            >
              {messages.map((message) => {
                return (
                  <div
                    className={
                      message.type === "away" ? styles.away : styles.home
                    }
                  >
                    {message.type === "away" ? (
                      <div className={styles.message}>
                        <img
                          src={message.image}
                          alt={message.image}
                          className={styles.DImage}
                        />
                        <h1
                          className={styles.chatTexts}
                          style={{
                            marginLeft: "1rem",
                            borderTopLeftRadius: "0px",
                            color: mainFontColor,
                          }}
                        >
                          {message.text}
                        </h1>
                      </div>
                    ) : (
                      <div className={styles.message}>
                        <h1
                          className={styles.chatTexts}
                          style={{
                            marginRight: "1rem",
                            borderTopRightRadius: "0px",
                            color: mainFontColor,
                          }}
                        >
                          {message.text}
                        </h1>
                        <img
                          src={message.image}
                          alt={message.image}
                          className={styles.DImage}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </SimpleBar>
        )}
        {details.checklist && (
          <div className={styles.dInput} style={{ background: chatColor }}>
            <input
              type="text"
              placeholder="Type a message..."
              value={text}
              className={styles.dInputLabel}
              style={{ color: secondaryFontColor }}
              onChange={handleInputChange}
            ></input>
            <div style={{ display: "flex", alignItems: "center" }}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.1027 9.33972C11.1754 9.35188 11.245 9.37832 11.3075 9.4175C11.57 9.5825 11.6525 9.9275 11.4875 10.19C10.7225 11.3975 9.425 12.125 8 12.125C6.575 12.125 5.2775 11.405 4.5125 10.1825C4.43393 10.0562 4.40875 9.90384 4.44251 9.75897C4.47627 9.6141 4.56619 9.48857 4.6925 9.41C4.81881 9.33143 4.97116 9.30625 5.11603 9.34001C5.2609 9.37377 5.38643 9.46369 5.465 9.59C6.02 10.475 6.965 11 8 11C9.035 11 9.98 10.475 10.535 9.5975C10.5737 9.53474 10.6245 9.48027 10.6843 9.43721C10.7442 9.39416 10.812 9.36338 10.8838 9.34665C10.9556 9.32992 11.03 9.32756 11.1027 9.33972Z"
                  fill={headertitle}
                  fillOpacity="0.7"
                />
                <path
                  d="M5.375 7.25C5.99632 7.25 6.5 6.74632 6.5 6.125C6.5 5.50368 5.99632 5 5.375 5C4.75368 5 4.25 5.50368 4.25 6.125C4.25 6.74632 4.75368 7.25 5.375 7.25Z"
                  fill={headertitle}
                  fillOpacity="0.7"
                />
                <path
                  d="M10.625 7.25C11.2463 7.25 11.75 6.74632 11.75 6.125C11.75 5.50368 11.2463 5 10.625 5C10.0037 5 9.5 5.50368 9.5 6.125C9.5 6.74632 10.0037 7.25 10.625 7.25Z"
                  fill={headertitle}
                  fillOpacity="0.7"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.5 8C0.5 3.86 3.8525 0.5 7.9925 0.5C12.14 0.5 15.5 3.86 15.5 8C15.5 12.14 12.14 15.5 7.9925 15.5C3.8525 15.5 0.5 12.14 0.5 8ZM2 8C2 11.315 4.685 14 8 14C11.315 14 14 11.315 14 8C14 4.685 11.315 2 8 2C4.685 2 2 4.685 2 8Z"
                  fill={headertitle}
                  fillOpacity="0.7"
                />
              </svg>
              <button
                type="submit"
                className={styles.dButton}
                onClick={handleSubmitMessage}
              >
                Send
              </button>
            </div>
          </div>
        )}
      </motion.div>
      {edit && (
        <div
          className={styles.fade}
          style={{ backgroundColor: secondaryColor }}
        ></div>
      )}
      <motion.div
        animate={edit ? "open" : "closed"}
        transition={{ duration: 0.2 }}
        variants={editVariants}
        className={styles.picture}
      >
        <div className={styles.pictureText}>
          <div className={styles.pictureRow}>
            {edit && <div className={styles.editTitles}>Name</div>}
            {edit ? (
              <input
                type="text"
                defaultValue={name}
                className={styles.pictureNameInput}
                onChange={(e) => setNewName(e.target.value)}
              />
            ) : (
              <h1 className={styles.pictureName}>{name}</h1>
            )}
          </div>
          <div className={styles.pictureRow}>
            {edit && <div className={styles.editTitles}>Address</div>}
            {edit ? (
              <input
                type="text"
                defaultValue={address}
                className={styles.pictureAddressInput}
                onChange={(e) => setNewAddress(e.target.value)}
              />
            ) : (
              <h1 className={styles.pictureAddress}>{address}</h1>
            )}
          </div>
        </div>
        {edit && (
          <div className={styles.fileContainer}>
            <label className={styles.fileLabel} htmlFor="upload">
              <svg
                width="18"
                height="16"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.6225 2H14C14.825 2 15.5 2.675 15.5 3.5V12.5C15.5 13.325 14.825 14 14 14H2C1.175 14 0.5 13.325 0.5 12.5V3.5C0.5 2.675 1.175 2 2 2H5.3775L5.56152 1.25899C5.67225 0.813078 6.07259 0.5 6.53204 0.5H9.46796C9.92741 0.5 10.3277 0.813078 10.4385 1.25899L10.6225 2ZM2 12.5H14V3.5H2V12.5Z"
                  fill="white"
                />
                <path
                  d="M8 10.25C6.7625 10.25 5.75 9.2375 5.75 8C5.75 6.7625 6.7625 5.75 8 5.75C9.2375 5.75 10.25 6.7625 10.25 8C10.25 9.2375 9.2375 10.25 8 10.25Z"
                  fill="white"
                />
              </svg>
            </label>
            {image && <h3>{image.name}</h3>}
            <input
              id="upload"
              type="file"
              onChange={handleFileChange}
              className={styles.fileInput}
            />
          </div>
        )}
        {edit ? (
          <div className={styles.editButtons}>
            <h1 className={styles.cancel} onClick={() => setEdit(false)}>
              Cancel
            </h1>
            <div className={styles.save} onClick={save}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.75 0.25H1.75C1.35218 0.25 0.970644 0.408035 0.68934 0.68934C0.408035 0.970644 0.25 1.35218 0.25 1.75V12.25C0.25 12.6478 0.408035 13.0294 0.68934 13.3107C0.970644 13.592 1.35218 13.75 1.75 13.75H12.25C13.075 13.75 13.75 13.075 13.75 12.25V3.25L10.75 0.25ZM12.25 12.25H1.75V1.75H10.1275L12.25 3.8725V12.25ZM7 7C5.755 7 4.75 8.005 4.75 9.25C4.75 10.495 5.755 11.5 7 11.5C8.245 11.5 9.25 10.495 9.25 9.25C9.25 8.005 8.245 7 7 7ZM2.5 4C2.5 3.17157 3.17157 2.5 4 2.5H7.75C8.57843 2.5 9.25 3.17157 9.25 4C9.25 4.82843 8.57843 5.5 7.75 5.5H4C3.17157 5.5 2.5 4.82843 2.5 4Z"
                  fill="white"
                />
              </svg>
              <h1 className={styles.saveText}>Save</h1>
            </div>
          </div>
        ) : (
          <div className={styles.edit} onClick={() => setEdit(true)}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.545 4.765L9.235 5.455L2.44 12.25H1.75V11.56L8.545 4.765ZM11.245 0.25C11.0575 0.25 10.8625 0.325 10.72 0.4675L9.3475 1.84L12.16 4.6525L13.5325 3.28C13.602 3.21061 13.6572 3.1282 13.6948 3.03747C13.7325 2.94674 13.7518 2.84948 13.7518 2.75125C13.7518 2.65302 13.7325 2.55576 13.6948 2.46503C13.6572 2.3743 13.602 2.29189 13.5325 2.2225L11.7775 0.4675C11.6275 0.3175 11.44 0.25 11.245 0.25ZM8.545 2.6425L0.25 10.9375V13.75H3.0625L11.3575 5.455L8.545 2.6425Z"
                fill="white"
              />
            </svg>
          </div>
        )}
      </motion.div>
      <div className={styles.search}>
        <div className={styles.searchRow}>
          <div
            className={styles.searchBar}
            style={{ borderColor: headertitle }}
          >
            <input
              type="text"
              placeholder="Search tasks..."
              style={{ backgroundColor: "transparent" }}
            />
            <div className={styles.searchIcon}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.625 8.5H9.0325L8.8225 8.2975C9.29121 7.75297 9.63377 7.11158 9.82566 6.41921C10.0176 5.72684 10.054 5.00061 9.9325 4.2925C9.58 2.2075 7.84 0.542496 5.74 0.287496C5.00171 0.194096 4.25184 0.270825 3.54777 0.511813C2.84369 0.752801 2.20408 1.15166 1.67787 1.67787C1.15166 2.20408 0.752801 2.84369 0.511813 3.54777C0.270825 4.25184 0.194096 5.00171 0.287496 5.74C0.542496 7.84 2.2075 9.58 4.2925 9.9325C5.00061 10.054 5.72684 10.0176 6.41921 9.82566C7.11158 9.63377 7.75297 9.29121 8.2975 8.8225L8.5 9.0325V9.625L11.6875 12.8125C11.995 13.12 12.4975 13.12 12.805 12.8125C13.1125 12.505 13.1125 12.0025 12.805 11.695L9.625 8.5ZM5.125 8.5C3.2575 8.5 1.75 6.9925 1.75 5.125C1.75 3.2575 3.2575 1.75 5.125 1.75C6.9925 1.75 8.5 3.2575 8.5 5.125C8.5 6.9925 6.9925 8.5 5.125 8.5Z"
                  fill={headertitle}
                  fillOpacity="0.7"
                />
              </svg>
            </div>
          </div>
          <div className={styles.switch} style={{ borderColor: headertitle }}>
            <p
              className={`${styles.sw_month} ${
                activeSwitch === "left" && styles.sw_active
              }`}
              onClick={handleSwitch}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 0H2C0.9 0 0 0.9 0 2V18C0 19.1 0.9 20 2 20H18C19.1 20 20 19.1 20 18V2C20 0.9 19.1 0 18 0ZM6 18H3C2.45 18 2 17.55 2 17V14H6V18ZM6 12H2V8H6V12ZM6 6H2V3C2 2.45 2.45 2 3 2H6V6ZM12 18H8V14H12V18ZM12 12H8V8H12V12ZM12 6H8V2H12V6ZM17 18H14V14H18V17C18 17.55 17.55 18 17 18ZM18 12H14V8H18V12ZM18 6H14V2H17C17.55 2 18 2.45 18 3V6Z"
                  fill={secondaryFontColor}
                  fillOpacity="0.7"
                />
              </svg>
            </p>
            <p
              className={
                (styles.sw_week,
                activeSwitch === "right" ? styles.sw_active : "")
              }
              onClick={handleSwitch}
              style={{ borderColor: "white" }}
            >
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 0C0.89543 0 0 0.895431 0 2V12C0 13.1046 0.895431 14 2 14H16C17.1046 14 18 13.1046 18 12V2C18 0.89543 17.1046 0 16 0H2ZM4 2V4H2V2.5C2 2.22386 2.22386 2 2.5 2H4ZM2 8V6H4V8H2ZM2 10H4V12H2.5C2.22386 12 2 11.7761 2 11.5V10ZM16 11.5C16 11.7761 15.7761 12 15.5 12H6V10H16V11.5ZM16 8H6V6H16V8ZM16 4H6V2H15.5C15.7761 2 16 2.22386 16 2.5V4Z"
                  fill={secondaryFontColor}
                  fillOpacity="0.7"
                />
              </svg>
            </p>
            <motion.div
              className={styles.sw_active_box}
              style={{ borderColor: headertitle }}
              animate={activeSwitch}
              variants={switchVariants}
            ></motion.div>
          </div>
        </div>
        <div className={styles.tagsRow}>
          {tags.length !== 0
            ? tags.map((tag) => {
                return (
                  <div
                    className={styles.tag}
                    onClick={() => deleteTag(tag)}
                    style={{ borderColor: headertitle }}
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.72504 0.282485C9.65566 0.212957 9.57324 0.157796 9.48251 0.12016C9.39178 0.0825241 9.29452 0.0631515 9.19629 0.0631515C9.09807 0.0631515 9.00081 0.0825241 8.91008 0.12016C8.81935 0.157796 8.73693 0.212957 8.66754 0.282485L5.00005 3.94248L1.33255 0.274984C1.26311 0.205548 1.18068 0.150468 1.08995 0.112889C0.99923 0.0753106 0.901994 0.0559692 0.803796 0.0559692C0.705598 0.0559692 0.608361 0.0753106 0.517638 0.112889C0.426915 0.150468 0.344482 0.205548 0.275045 0.274984C0.205609 0.344421 0.150529 0.426854 0.11295 0.517577C0.0753716 0.6083 0.0560303 0.705537 0.0560303 0.803735C0.0560303 0.901933 0.0753716 0.999169 0.11295 1.08989C0.150529 1.18062 0.205609 1.26305 0.275045 1.33248L3.94255 4.99998L0.275045 8.66748C0.205609 8.73692 0.150529 8.81935 0.11295 8.91008C0.0753716 9.0008 0.0560303 9.09803 0.0560303 9.19623C0.0560303 9.29443 0.0753716 9.39167 0.11295 9.48239C0.150529 9.57311 0.205609 9.65555 0.275045 9.72498C0.344482 9.79442 0.426915 9.8495 0.517638 9.88708C0.608361 9.92466 0.705598 9.944 0.803796 9.944C0.901994 9.944 0.99923 9.92466 1.08995 9.88708C1.18068 9.8495 1.26311 9.79442 1.33255 9.72498L5.00005 6.05748L8.66754 9.72498C8.73698 9.79442 8.81941 9.8495 8.91014 9.88708C9.00086 9.92466 9.0981 9.944 9.19629 9.944C9.29449 9.944 9.39173 9.92466 9.48245 9.88708C9.57318 9.8495 9.65561 9.79442 9.72504 9.72498C9.79448 9.65555 9.84956 9.57311 9.88714 9.48239C9.92472 9.39167 9.94406 9.29443 9.94406 9.19623C9.94406 9.09803 9.92472 9.0008 9.88714 8.91008C9.84956 8.81935 9.79448 8.73692 9.72504 8.66748L6.05754 4.99998L9.72504 1.33248C10.01 1.04748 10.01 0.567485 9.72504 0.282485Z"
                        fill={headertitle}
                        fillOpacity="0.7"
                      />
                    </svg>
                    <h1 style={{ color: headertitle }}>{tag}</h1>
                  </div>
                );
              })
            : null}
          {tags.length !== 0 && (
            <div className={styles.clearTags} onClick={() => setTags([])}>
              Clear Tags
            </div>
          )}
        </div>
      </div>
      <SimpleBar style={{ maxHeight: "42rem" }}>
        <div
          className={styles.firstDisplay}
          style={
            display ? { flexDirection: "column" } : { flexDirection: "row" }
          }
        >
          <DragDropContext
            onDragEnd={(result) => handleOnDragEnd(result, columns, setColumns)}
          >
            <div
              className={styles.container}
              style={display ? { width: "100%" } : null}
            >
              <div
                className={styles.header}
                style={
                  !NotStartedExpand
                    ? {
                        backgroundColor:
                          colormode === "dark" ? "#323339" : "white",
                        boxShadow:
                          colormode === "dark"
                            ? "0px 2px 5px 1px rgba(25,25,25,0.5)"
                            : "0px 2px 5px 1px rgba(225,225,225,0.5)",
                        borderRadius: "12px",
                      }
                    : null
                }
              >
                <div>
                  <h1 style={{ color: headertitle }}>Not started</h1>
                  <h3 style={{ color: headertitle }}>
                    {columns["notStartedTasks"].items.length} tasks
                  </h3>
                </div>
                <div className={styles.icons}>
                  <div>
                    <svg
                      onClick={() => console.log("add button")}
                      className={styles.addBtn}
                      width="16"
                      height="16"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5 6.75H6.75V10.5C6.75 10.9125 6.4125 11.25 6 11.25C5.5875 11.25 5.25 10.9125 5.25 10.5V6.75H1.5C1.0875 6.75 0.75 6.4125 0.75 6C0.75 5.5875 1.0875 5.25 1.5 5.25H5.25V1.5C5.25 1.0875 5.5875 0.75 6 0.75C6.4125 0.75 6.75 1.0875 6.75 1.5V5.25H10.5C10.9125 5.25 11.25 5.5875 11.25 6C11.25 6.4125 10.9125 6.75 10.5 6.75Z"
                        fill={headertitle}
                        fillOpacity="0.7"
                      />
                    </svg>
                  </div>
                  <div>
                    <svg
                      onClick={() => setNotStartedExpand(!NotStartedExpand)}
                      className={styles.expandBtn}
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.9675 2.09L11.525 5.5325L12.7175 6.725C13.19 7.1975 12.8525 8.0075 12.185 8.0075H8.75C8.3375 8.0075 8 7.67 8 7.2575V3.8075C8 3.14 8.81 2.8025 9.2825 3.275L10.475 4.4675L13.9175 1.025C13.9869 0.955469 14.0693 0.900309 14.16 0.862673C14.2508 0.825037 14.348 0.805664 14.4462 0.805664C14.5445 0.805664 14.6417 0.825037 14.7325 0.862673C14.8232 0.900309 14.9056 0.955469 14.975 1.025C15.26 1.325 15.26 1.7975 14.9675 2.09ZM2.09 14.9675L5.5325 11.525L6.725 12.7175C7.1975 13.19 8.0075 12.8525 8.0075 12.185V8.75C8.0075 8.3375 7.67 8 7.2575 8H3.8075C3.14 8 2.8025 8.81 3.275 9.2825L4.4675 10.475L1.025 13.9175C0.955469 13.9869 0.900309 14.0693 0.862673 14.16C0.825037 14.2508 0.805664 14.348 0.805664 14.4462C0.805664 14.5445 0.825037 14.6417 0.862673 14.7325C0.900309 14.8232 0.955469 14.9056 1.025 14.975C1.325 15.26 1.7975 15.26 2.09 14.9675Z"
                        fill={headertitle}
                        fillOpacity="0.7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              {NotStartedExpand && (
                <Droppable droppableId="notStartedTasks">
                  {(provided) => (
                    <ul
                      className={
                        !display ? styles.addTask : styles.addTaskDisplay
                      }
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={display ? { marginBottom: "1rem" } : null}
                    >
                      {columns["notStartedTasks"].items.length === 0 && (
                        <li
                          className={
                            !display
                              ? styles.addTaskIcons
                              : styles.addTaskIconsDisplay
                          }
                        >
                          <svg
                            width="13"
                            height="14"
                            viewBox="0 0 11 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 6.75H6.25V10.5C6.25 10.9125 5.9125 11.25 5.5 11.25C5.0875 11.25 4.75 10.9125 4.75 10.5V6.75H1C0.5875 6.75 0.25 6.4125 0.25 6C0.25 5.5875 0.5875 5.25 1 5.25H4.75V1.5C4.75 1.0875 5.0875 0.75 5.5 0.75C5.9125 0.75 6.25 1.0875 6.25 1.5V5.25H10C10.4125 5.25 10.75 5.5875 10.75 6C10.75 6.4125 10.4125 6.75 10 6.75Z"
                              fill={headertitle}
                              fillOpacity="0.7"
                            />
                          </svg>

                          <h1 style={{ color: headertitle }}>Add Task</h1>
                        </li>
                      )}
                      {columns["notStartedTasks"].items.map(
                        (task, index) =>
                          // eslint-disable-next-line react/jsx-key
                          task !== undefined && (
                            <Draggable
                              key={task.id}
                              draggableId={task.id}
                              index={index}
                            >
                              {(provided) => (
                                <li
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className={
                                    !display
                                      ? view === true
                                        ? id === task.id
                                          ? `${
                                              colormode === "light"
                                                ? styles.blue
                                                : styles.black
                                            } ${styles.taskContainer} ${
                                              colormode === "dark"
                                                ? styles.colorChange
                                                : null
                                            }`
                                          : `${styles.taskContainer} ${
                                              colormode === "dark"
                                                ? styles.colorChange
                                                : null
                                            }`
                                        : `${styles.taskContainer} ${
                                            colormode === "dark"
                                              ? styles.colorChange
                                              : null
                                          }`
                                      : view === true
                                      ? id === task.id
                                        ? index === 0
                                          ? `${
                                              colormode === "light"
                                                ? styles.blue
                                                : styles.black
                                            } ${styles.taskContainerDisplay} ${
                                              colormode === "dark"
                                                ? styles.colorChange
                                                : null
                                            } ${styles.first}`
                                          : index ===
                                            columns["notStartedTasks"].items
                                              .length -
                                              1
                                          ? `${
                                              colormode === "light"
                                                ? styles.blue
                                                : styles.black
                                            } ${styles.taskContainerDisplay} ${
                                              colormode === "dark"
                                                ? styles.colorChange
                                                : null
                                            } ${styles.last}`
                                          : `${
                                              colormode === "light"
                                                ? styles.blue
                                                : styles.black
                                            } ${styles.taskContainerDisplay} ${
                                              colormode === "dark"
                                                ? styles.colorChange
                                                : null
                                            }`
                                        : index === 0
                                        ? `${styles.first} ${
                                            styles.taskContainerDisplay
                                          } ${
                                            colormode === "dark"
                                              ? styles.colorChange
                                              : null
                                          }`
                                        : index ===
                                          columns["notStartedTasks"].items
                                            .length -
                                            1
                                        ? `${styles.taskContainerDisplay} ${
                                            styles.last
                                          } ${
                                            colormode === "dark"
                                              ? styles.colorChange
                                              : null
                                          }`
                                        : `${styles.taskContainerDisplay} ${
                                            colormode === "dark"
                                              ? styles.colorChange
                                              : null
                                          }`
                                      : index === 0
                                      ? `${styles.first} ${
                                          styles.taskContainerDisplay
                                        } ${
                                          colormode === "dark"
                                            ? styles.colorChange
                                            : null
                                        }`
                                      : index ===
                                        columns["notStartedTasks"].items
                                          .length -
                                          1
                                      ? `${styles.taskContainerDisplay} ${
                                          colormode === "dark"
                                            ? styles.colorChange
                                            : null
                                        }  ${styles.last}`
                                      : `${styles.taskContainerDisplay} ${
                                          colormode === "dark"
                                            ? styles.colorChange
                                            : null
                                        }`
                                  }
                                  onClick={() => open(task, task.id)}
                                  key={task.id}
                                >
                                  <div
                                    className={
                                      !display
                                        ? styles.taskHeader
                                        : styles.taskHeaderDisplay
                                    }
                                  >
                                    <div>
                                      <h1
                                        className={styles.taskTitle}
                                        style={{ color: headertitle }}
                                      >
                                        {task.title}‏‏‎ ‎‏‏‎ ‎
                                        {task.priority !== "None" && (
                                          <strong
                                            style={
                                              task.priority === "!!"
                                                ? {
                                                    color: "#FF5C72",
                                                    fontSize: "24px",
                                                  }
                                                : {
                                                    color: "#FDA076",
                                                    fontSize: "18px",
                                                  }
                                            }
                                          >
                                            {task.priority}
                                          </strong>
                                        )}
                                      </h1>
                                    </div>
                                    <div className={styles.headerInfo}>
                                      <div style={{ display: "flex" }}>
                                        <div
                                          style={{ backgroundColor: "#7A9EFF" }}
                                        >
                                          <h1>{task.phase}</h1>
                                        </div>
                                        {task.subphase.length !== 0 &&
                                          task.subphase.map((sub) => (
                                            <div
                                              style={{
                                                backgroundColor: "#C67AFF",
                                                marginLeft: "0.25rem",
                                              }}
                                            >
                                              <h1>{sub}</h1>
                                            </div>
                                          ))}
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className={
                                      !display
                                        ? styles.taskBody
                                        : styles.taskBodyDisplay
                                    }
                                  >
                                    {!display && (
                                      <h1 style={{ color: mainFontColor }}>
                                        {task.description}
                                      </h1>
                                    )}

                                    {!display ? (
                                      <div className={styles.calendar}>
                                        <svg
                                          width="18"
                                          height="20"
                                          viewBox="0 0 16 18"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M14 2.25H13.25V1.5C13.25 1.0875 12.9125 0.75 12.5 0.75C12.0875 0.75 11.75 1.0875 11.75 1.5V2.25H4.25V1.5C4.25 1.0875 3.9125 0.75 3.5 0.75C3.0875 0.75 2.75 1.0875 2.75 1.5V2.25H2C1.175 2.25 0.5 2.925 0.5 3.75V15.75C0.5 16.575 1.175 17.25 2 17.25H14C14.825 17.25 15.5 16.575 15.5 15.75V3.75C15.5 2.925 14.825 2.25 14 2.25ZM13.25 15.75H2.75C2.3375 15.75 2 15.4125 2 15V6H14V15C14 15.4125 13.6625 15.75 13.25 15.75Z"
                                            fill={headertitle}
                                            fillOpacity="0.7"
                                          />
                                        </svg>
                                        <h1
                                          className={styles.date}
                                          style={{ color: mainFontColor }}
                                        >
                                          {task.startDate} - {task.endDate}
                                        </h1>
                                      </div>
                                    ) : (
                                      <div
                                        className={styles.imageContainer}
                                        style={{
                                          marginLeft: "1rem",
                                          borderRight:
                                            "1px solid rgba(0,0,0,0.15)",
                                        }}
                                      >
                                        {task.assignees.map((a) => (
                                          // eslint-disable-next-line react/jsx-key
                                          <img
                                            src={a}
                                            alt={a}
                                            className={styles.image}
                                            style={{
                                              marginRight: "1rem",
                                              border:
                                                "1px solid rgba(0,0,0,0.25)",
                                              borderRadius: "50%",
                                            }}
                                          />
                                        ))}
                                      </div>
                                    )}

                                    {!display ? (
                                      <div className={styles.footer}>
                                        <div className={styles.imageContainer}>
                                          {task.assignees.map((a) => (
                                            // eslint-disable-next-line react/jsx-key
                                            <img
                                              src={a}
                                              alt={a}
                                              className={styles.image}
                                            />
                                          ))}
                                        </div>
                                        <div className={styles.actions}>
                                          <div className={styles.action}>
                                            <svg
                                              width="15"
                                              height="12"
                                              viewBox="0 0 15 12"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M2 4.875C1.3775 4.875 0.875 5.3775 0.875 6C0.875 6.6225 1.3775 7.125 2 7.125C2.6225 7.125 3.125 6.6225 3.125 6C3.125 5.3775 2.6225 4.875 2 4.875ZM2 0.375C1.3775 0.375 0.875 0.8775 0.875 1.5C0.875 2.1225 1.3775 2.625 2 2.625C2.6225 2.625 3.125 2.1225 3.125 1.5C3.125 0.8775 2.6225 0.375 2 0.375ZM2 9.375C1.3775 9.375 0.875 9.885 0.875 10.5C0.875 11.115 1.385 11.625 2 11.625C2.615 11.625 3.125 11.115 3.125 10.5C3.125 9.885 2.6225 9.375 2 9.375ZM5 11.25H14C14.4125 11.25 14.75 10.9125 14.75 10.5C14.75 10.0875 14.4125 9.75 14 9.75H5C4.5875 9.75 4.25 10.0875 4.25 10.5C4.25 10.9125 4.5875 11.25 5 11.25ZM5 6.75H14C14.4125 6.75 14.75 6.4125 14.75 6C14.75 5.5875 14.4125 5.25 14 5.25H5C4.5875 5.25 4.25 5.5875 4.25 6C4.25 6.4125 4.5875 6.75 5 6.75ZM4.25 1.5C4.25 1.9125 4.5875 2.25 5 2.25H14C14.4125 2.25 14.75 1.9125 14.75 1.5C14.75 1.0875 14.4125 0.75 14 0.75H5C4.5875 0.75 4.25 1.0875 4.25 1.5Z"
                                                fill={headertitle}
                                                fillOpacity="0.7"
                                              />
                                            </svg>
                                            <h1 style={{ color: headertitle }}>
                                              3
                                            </h1>
                                          </div>
                                          <div className={styles.action}>
                                            <svg
                                              width="15"
                                              height="16"
                                              viewBox="0 0 15 16"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M10.2753 1.93652C9.7757 1.93652 9.29655 2.13499 8.94326 2.48828L2.89547 8.53607C2.29522 9.13632 1.95801 9.95043 1.95801 10.7993C1.95801 11.6482 2.29522 12.4623 2.89547 13.0625C3.49572 13.6628 4.30983 14 5.15871 14C6.00759 14 6.8217 13.6628 7.42195 13.0625L13.4697 7.01475C13.7626 6.72186 14.2375 6.72186 14.5304 7.01475C14.8233 7.30764 14.8233 7.78252 14.5304 8.07541L8.4826 14.1232C7.60105 15.0048 6.40541 15.5 5.15871 15.5C3.912 15.5 2.71636 15.0048 1.83481 14.1232C0.953259 13.2416 0.458008 12.046 0.458008 10.7993C0.458008 9.5526 0.953259 8.35696 1.83481 7.47541L7.8826 1.42762C8.51719 0.79303 9.37787 0.436523 10.2753 0.436523C11.1728 0.436523 12.0334 0.79303 12.668 1.42762C13.3026 2.0622 13.6591 2.92288 13.6591 3.82032C13.6591 4.71776 13.3026 5.57845 12.668 6.21303L6.61365 12.2608C6.22603 12.6484 5.7003 12.8662 5.15213 12.8662C4.60395 12.8662 4.07823 12.6484 3.69061 12.2608C3.30299 11.8732 3.08523 11.3475 3.08523 10.7993C3.08523 10.2511 3.30299 9.7254 3.69061 9.33779L9.27805 3.75692C9.57112 3.4642 10.046 3.46448 10.3387 3.75755C10.6314 4.05061 10.6312 4.52548 10.3381 4.8182L4.75127 10.3984C4.64515 10.5047 4.58523 10.6491 4.58523 10.7993C4.58523 10.9497 4.64495 11.0938 4.75127 11.2002C4.85758 11.3065 5.00178 11.3662 5.15213 11.3662C5.30248 11.3662 5.44667 11.3065 5.55299 11.2002L11.6074 5.15237C11.6075 5.15228 11.6073 5.15247 11.6074 5.15237C11.9605 4.79912 12.1591 4.3198 12.1591 3.82032C12.1591 3.32071 11.9606 2.84156 11.6074 2.48828C11.2541 2.13499 10.7749 1.93652 10.2753 1.93652Z"
                                                fill={headertitle}
                                                fillOpacity="0.7"
                                              />
                                            </svg>
                                            <h1 style={{ color: headertitle }}>
                                              8
                                            </h1>
                                          </div>
                                          <div className={styles.action}>
                                            <svg
                                              width="16"
                                              height="16"
                                              viewBox="0 0 16 16"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M0.54275 14.4995L1.868 10.5252L1.865 10.52C1.46975 9.63575 1.25 8.6555 1.25 7.625C1.25 3.69275 4.44275 0.5 8.375 0.5C12.3073 0.5 15.5 3.69275 15.5 7.625C15.5 11.5573 12.3073 14.75 8.375 14.75C7.3445 14.75 6.365 14.5303 5.47775 14.135L5.47475 14.1343C4.55825 14.438 1.721 15.3838 1.5005 15.4573C1.4225 15.485 1.33775 15.5 1.25 15.5C0.836 15.5 0.5 15.164 0.5 14.75C0.5 14.6622 0.515 14.5775 0.54275 14.4995ZM8.375 2C11.4792 2 14 4.52075 14 7.625C14 10.7292 11.4792 13.25 8.375 13.25C7.562 13.25 6.78875 13.0775 6.0905 12.7662C5.75225 12.6117 5.36075 12.5915 5.0015 12.7108C4.487 12.8818 3.3605 13.256 2.43575 13.5643L3.29075 10.9985C3.41075 10.6385 3.38975 10.247 3.23225 9.90275C2.9225 9.2105 2.75 8.438 2.75 7.625C2.75 4.52075 5.27075 2 8.375 2Z"
                                                fill={headertitle}
                                                fillOpacity="0.7"
                                              />
                                            </svg>
                                            <h1 style={{ color: headertitle }}>
                                              8
                                            </h1>
                                          </div>
                                        </div>
                                      </div>
                                    ) : (
                                      <div className={styles.calendarDisplay}>
                                        <h1
                                          className={styles.dateDisplay}
                                          style={{
                                            textAlign: "center",
                                            color: headertitle,
                                          }}
                                        >
                                          {task.startDate} - {task.endDate}
                                        </h1>
                                      </div>
                                    )}
                                    {display && (
                                      <div className={styles.buttonsDisplay}>
                                        <div className={styles.actionsDisplay}>
                                          <div className={styles.actionDisplay}>
                                            <svg
                                              width="18"
                                              height="15"
                                              viewBox="0 0 15 12"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M2 4.875C1.3775 4.875 0.875 5.3775 0.875 6C0.875 6.6225 1.3775 7.125 2 7.125C2.6225 7.125 3.125 6.6225 3.125 6C3.125 5.3775 2.6225 4.875 2 4.875ZM2 0.375C1.3775 0.375 0.875 0.8775 0.875 1.5C0.875 2.1225 1.3775 2.625 2 2.625C2.6225 2.625 3.125 2.1225 3.125 1.5C3.125 0.8775 2.6225 0.375 2 0.375ZM2 9.375C1.3775 9.375 0.875 9.885 0.875 10.5C0.875 11.115 1.385 11.625 2 11.625C2.615 11.625 3.125 11.115 3.125 10.5C3.125 9.885 2.6225 9.375 2 9.375ZM5 11.25H14C14.4125 11.25 14.75 10.9125 14.75 10.5C14.75 10.0875 14.4125 9.75 14 9.75H5C4.5875 9.75 4.25 10.0875 4.25 10.5C4.25 10.9125 4.5875 11.25 5 11.25ZM5 6.75H14C14.4125 6.75 14.75 6.4125 14.75 6C14.75 5.5875 14.4125 5.25 14 5.25H5C4.5875 5.25 4.25 5.5875 4.25 6C4.25 6.4125 4.5875 6.75 5 6.75ZM4.25 1.5C4.25 1.9125 4.5875 2.25 5 2.25H14C14.4125 2.25 14.75 1.9125 14.75 1.5C14.75 1.0875 14.4125 0.75 14 0.75H5C4.5875 0.75 4.25 1.0875 4.25 1.5Z"
                                                fill={headertitle}
                                                fillOpacity="0.7"
                                              />
                                            </svg>
                                            <h1 style={{ color: headertitle }}>
                                              3
                                            </h1>
                                          </div>
                                          <div className={styles.actionDisplay}>
                                            <svg
                                              width="18"
                                              height="19"
                                              viewBox="0 0 15 16"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M10.2753 1.93652C9.7757 1.93652 9.29655 2.13499 8.94326 2.48828L2.89547 8.53607C2.29522 9.13632 1.95801 9.95043 1.95801 10.7993C1.95801 11.6482 2.29522 12.4623 2.89547 13.0625C3.49572 13.6628 4.30983 14 5.15871 14C6.00759 14 6.8217 13.6628 7.42195 13.0625L13.4697 7.01475C13.7626 6.72186 14.2375 6.72186 14.5304 7.01475C14.8233 7.30764 14.8233 7.78252 14.5304 8.07541L8.4826 14.1232C7.60105 15.0048 6.40541 15.5 5.15871 15.5C3.912 15.5 2.71636 15.0048 1.83481 14.1232C0.953259 13.2416 0.458008 12.046 0.458008 10.7993C0.458008 9.5526 0.953259 8.35696 1.83481 7.47541L7.8826 1.42762C8.51719 0.79303 9.37787 0.436523 10.2753 0.436523C11.1728 0.436523 12.0334 0.79303 12.668 1.42762C13.3026 2.0622 13.6591 2.92288 13.6591 3.82032C13.6591 4.71776 13.3026 5.57845 12.668 6.21303L6.61365 12.2608C6.22603 12.6484 5.7003 12.8662 5.15213 12.8662C4.60395 12.8662 4.07823 12.6484 3.69061 12.2608C3.30299 11.8732 3.08523 11.3475 3.08523 10.7993C3.08523 10.2511 3.30299 9.7254 3.69061 9.33779L9.27805 3.75692C9.57112 3.4642 10.046 3.46448 10.3387 3.75755C10.6314 4.05061 10.6312 4.52548 10.3381 4.8182L4.75127 10.3984C4.64515 10.5047 4.58523 10.6491 4.58523 10.7993C4.58523 10.9497 4.64495 11.0938 4.75127 11.2002C4.85758 11.3065 5.00178 11.3662 5.15213 11.3662C5.30248 11.3662 5.44667 11.3065 5.55299 11.2002L11.6074 5.15237C11.6075 5.15228 11.6073 5.15247 11.6074 5.15237C11.9605 4.79912 12.1591 4.3198 12.1591 3.82032C12.1591 3.32071 11.9606 2.84156 11.6074 2.48828C11.2541 2.13499 10.7749 1.93652 10.2753 1.93652Z"
                                                fill={headertitle}
                                                fillOpacity="0.7"
                                              />
                                            </svg>
                                            <h1 style={{ color: headertitle }}>
                                              8
                                            </h1>
                                          </div>
                                          <div className={styles.actionDisplay}>
                                            <svg
                                              width="19"
                                              height="19"
                                              viewBox="0 0 16 16"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M0.54275 14.4995L1.868 10.5252L1.865 10.52C1.46975 9.63575 1.25 8.6555 1.25 7.625C1.25 3.69275 4.44275 0.5 8.375 0.5C12.3073 0.5 15.5 3.69275 15.5 7.625C15.5 11.5573 12.3073 14.75 8.375 14.75C7.3445 14.75 6.365 14.5303 5.47775 14.135L5.47475 14.1343C4.55825 14.438 1.721 15.3838 1.5005 15.4573C1.4225 15.485 1.33775 15.5 1.25 15.5C0.836 15.5 0.5 15.164 0.5 14.75C0.5 14.6622 0.515 14.5775 0.54275 14.4995ZM8.375 2C11.4792 2 14 4.52075 14 7.625C14 10.7292 11.4792 13.25 8.375 13.25C7.562 13.25 6.78875 13.0775 6.0905 12.7662C5.75225 12.6117 5.36075 12.5915 5.0015 12.7108C4.487 12.8818 3.3605 13.256 2.43575 13.5643L3.29075 10.9985C3.41075 10.6385 3.38975 10.247 3.23225 9.90275C2.9225 9.2105 2.75 8.438 2.75 7.625C2.75 4.52075 5.27075 2 8.375 2Z"
                                                fill={headertitle}
                                                fillOpacity="0.7"
                                              />
                                            </svg>
                                            <h1 style={{ color: headertitle }}>
                                              8
                                            </h1>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </li>
                              )}
                            </Draggable>
                          )
                      )}
                    </ul>
                  )}
                </Droppable>
              )}
            </div>
            <div
              className={styles.container}
              style={display ? { width: "100%" } : null}
            >
              <div
                className={styles.header}
                style={
                  !InProgressExpand
                    ? {
                        backgroundColor:
                          colormode === "dark" ? "#323339" : "white",
                        boxShadow:
                          colormode === "dark"
                            ? "0px 2px 5px 1px rgba(25,25,25,0.5)"
                            : "0px 2px 5px 1px rgba(225,225,225,0.5)",
                        borderRadius: "12px",
                      }
                    : null
                }
              >
                <div>
                  <h1 style={{ color: headertitle }}>In Progress</h1>
                  <h3 style={{ color: headertitle }}>
                    {columns["inProgressTasks"].items.length} tasks
                  </h3>
                </div>
                <div className={styles.icons}>
                  <div>
                    <svg
                      onClick={() => console.log("add button")}
                      className={styles.addBtn}
                      width="16"
                      height="16"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5 6.75H6.75V10.5C6.75 10.9125 6.4125 11.25 6 11.25C5.5875 11.25 5.25 10.9125 5.25 10.5V6.75H1.5C1.0875 6.75 0.75 6.4125 0.75 6C0.75 5.5875 1.0875 5.25 1.5 5.25H5.25V1.5C5.25 1.0875 5.5875 0.75 6 0.75C6.4125 0.75 6.75 1.0875 6.75 1.5V5.25H10.5C10.9125 5.25 11.25 5.5875 11.25 6C11.25 6.4125 10.9125 6.75 10.5 6.75Z"
                        fill={headertitle}
                        fillOpacity="0.7"
                      />
                    </svg>
                  </div>
                  <div>
                    <svg
                      onClick={() => setInProgressExpand(!InProgressExpand)}
                      className={styles.expandBtn}
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.9675 2.09L11.525 5.5325L12.7175 6.725C13.19 7.1975 12.8525 8.0075 12.185 8.0075H8.75C8.3375 8.0075 8 7.67 8 7.2575V3.8075C8 3.14 8.81 2.8025 9.2825 3.275L10.475 4.4675L13.9175 1.025C13.9869 0.955469 14.0693 0.900309 14.16 0.862673C14.2508 0.825037 14.348 0.805664 14.4462 0.805664C14.5445 0.805664 14.6417 0.825037 14.7325 0.862673C14.8232 0.900309 14.9056 0.955469 14.975 1.025C15.26 1.325 15.26 1.7975 14.9675 2.09ZM2.09 14.9675L5.5325 11.525L6.725 12.7175C7.1975 13.19 8.0075 12.8525 8.0075 12.185V8.75C8.0075 8.3375 7.67 8 7.2575 8H3.8075C3.14 8 2.8025 8.81 3.275 9.2825L4.4675 10.475L1.025 13.9175C0.955469 13.9869 0.900309 14.0693 0.862673 14.16C0.825037 14.2508 0.805664 14.348 0.805664 14.4462C0.805664 14.5445 0.825037 14.6417 0.862673 14.7325C0.900309 14.8232 0.955469 14.9056 1.025 14.975C1.325 15.26 1.7975 15.26 2.09 14.9675Z"
                        fill={headertitle}
                        fillOpacity="0.7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              {InProgressExpand && (
                <Droppable droppableId="inProgressTasks">
                  {(provided) => (
                    <ul
                      className={
                        !display ? styles.addTask : styles.addTaskDisplay
                      }
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={display ? { marginBottom: "1rem" } : null}
                    >
                      {columns["inProgressTasks"].items.length === 0 && (
                        <li
                          className={
                            !display
                              ? styles.addTaskIcons
                              : styles.addTaskIconsDisplay
                          }
                        >
                          <svg
                            width="13"
                            height="14"
                            viewBox="0 0 11 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 6.75H6.25V10.5C6.25 10.9125 5.9125 11.25 5.5 11.25C5.0875 11.25 4.75 10.9125 4.75 10.5V6.75H1C0.5875 6.75 0.25 6.4125 0.25 6C0.25 5.5875 0.5875 5.25 1 5.25H4.75V1.5C4.75 1.0875 5.0875 0.75 5.5 0.75C5.9125 0.75 6.25 1.0875 6.25 1.5V5.25H10C10.4125 5.25 10.75 5.5875 10.75 6C10.75 6.4125 10.4125 6.75 10 6.75Z"
                              fill={headertitle}
                              fillOpacity="0.7"
                            />
                          </svg>

                          <h1 style={{ color: headertitle }}>Add Task</h1>
                        </li>
                      )}
                      {columns["inProgressTasks"].items.map(
                        (task, index) =>
                          // eslint-disable-next-line react/jsx-key
                          task !== undefined && (
                            <Draggable
                              key={task.id}
                              draggableId={task.id}
                              index={index}
                            >
                              {(provided) => (
                                <li
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className={
                                    !display
                                      ? view === true
                                        ? id === task.id
                                          ? `${
                                              colormode === "light"
                                                ? styles.blue
                                                : styles.black
                                            } ${styles.taskContainer} ${
                                              colormode === "dark"
                                                ? styles.colorChange
                                                : null
                                            }`
                                          : `${styles.taskContainer} ${
                                              colormode === "dark"
                                                ? styles.colorChange
                                                : null
                                            }`
                                        : `${styles.taskContainer} ${
                                            colormode === "dark"
                                              ? styles.colorChange
                                              : null
                                          }`
                                      : view === true
                                      ? id === task.id
                                        ? index === 0
                                          ? `${
                                              colormode === "light"
                                                ? styles.blue
                                                : styles.black
                                            } ${styles.taskContainerDisplay} ${
                                              colormode === "dark"
                                                ? styles.colorChange
                                                : null
                                            } ${styles.first}`
                                          : index ===
                                            columns["notStartedTasks"].items
                                              .length -
                                              1
                                          ? `${
                                              colormode === "light"
                                                ? styles.blue
                                                : styles.black
                                            } ${styles.taskContainerDisplay} ${
                                              colormode === "dark"
                                                ? styles.colorChange
                                                : null
                                            } ${styles.last}`
                                          : `${
                                              colormode === "light"
                                                ? styles.blue
                                                : styles.black
                                            } ${styles.taskContainerDisplay} ${
                                              colormode === "dark"
                                                ? styles.colorChange
                                                : null
                                            }`
                                        : index === 0
                                        ? `${styles.first} ${
                                            styles.taskContainerDisplay
                                          } ${
                                            colormode === "dark"
                                              ? styles.colorChange
                                              : null
                                          }`
                                        : index ===
                                          columns["notStartedTasks"].items
                                            .length -
                                            1
                                        ? `${styles.taskContainerDisplay} ${
                                            styles.last
                                          } ${
                                            colormode === "dark"
                                              ? styles.colorChange
                                              : null
                                          }`
                                        : `${styles.taskContainerDisplay} ${
                                            colormode === "dark"
                                              ? styles.colorChange
                                              : null
                                          }`
                                      : index === 0
                                      ? `${styles.first} ${
                                          styles.taskContainerDisplay
                                        } ${
                                          colormode === "dark"
                                            ? styles.colorChange
                                            : null
                                        }`
                                      : index ===
                                        columns["notStartedTasks"].items
                                          .length -
                                          1
                                      ? `${styles.taskContainerDisplay} ${
                                          colormode === "dark"
                                            ? styles.colorChange
                                            : null
                                        }  ${styles.last}`
                                      : `${styles.taskContainerDisplay} ${
                                          colormode === "dark"
                                            ? styles.colorChange
                                            : null
                                        }`
                                  }
                                  onClick={() => open(task, task.id)}
                                  key={task.id}
                                >
                                  <div
                                    className={
                                      !display
                                        ? styles.taskHeader
                                        : styles.taskHeaderDisplay
                                    }
                                  >
                                    <div>
                                      <h1
                                        className={styles.taskTitle}
                                        style={{ color: headertitle }}
                                      >
                                        {task.title}‏‏‎ ‎‏‏‎ ‎
                                        {task.priority !== "None" && (
                                          <strong
                                            style={
                                              task.priority === "!!"
                                                ? {
                                                    color: "#FF5C72",
                                                    fontSize: "24px",
                                                  }
                                                : {
                                                    color: "#FDA076",
                                                    fontSize: "18px",
                                                  }
                                            }
                                          >
                                            {task.priority}
                                          </strong>
                                        )}
                                      </h1>
                                    </div>
                                    <div className={styles.headerInfo}>
                                      <div style={{ display: "flex" }}>
                                        <div
                                          style={{ backgroundColor: "#7A9EFF" }}
                                        >
                                          <h1>{task.phase}</h1>
                                        </div>
                                        {task.subphase.length !== 0 &&
                                          task.subphase.map((sub) => (
                                            <div
                                              style={{
                                                backgroundColor: "#C67AFF",
                                                marginLeft: "0.25rem",
                                              }}
                                            >
                                              <h1>{sub}</h1>
                                            </div>
                                          ))}
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className={
                                      !display
                                        ? styles.taskBody
                                        : styles.taskBodyDisplay
                                    }
                                  >
                                    {!display && (
                                      <h1 style={{ color: mainFontColor }}>
                                        {task.description}
                                      </h1>
                                    )}

                                    {!display ? (
                                      <div className={styles.calendar}>
                                        <svg
                                          width="18"
                                          height="20"
                                          viewBox="0 0 16 18"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M14 2.25H13.25V1.5C13.25 1.0875 12.9125 0.75 12.5 0.75C12.0875 0.75 11.75 1.0875 11.75 1.5V2.25H4.25V1.5C4.25 1.0875 3.9125 0.75 3.5 0.75C3.0875 0.75 2.75 1.0875 2.75 1.5V2.25H2C1.175 2.25 0.5 2.925 0.5 3.75V15.75C0.5 16.575 1.175 17.25 2 17.25H14C14.825 17.25 15.5 16.575 15.5 15.75V3.75C15.5 2.925 14.825 2.25 14 2.25ZM13.25 15.75H2.75C2.3375 15.75 2 15.4125 2 15V6H14V15C14 15.4125 13.6625 15.75 13.25 15.75Z"
                                            fill={headertitle}
                                            fillOpacity="0.7"
                                          />
                                        </svg>
                                        <h1
                                          className={styles.date}
                                          style={{ color: mainFontColor }}
                                        >
                                          {task.startDate} - {task.endDate}
                                        </h1>
                                      </div>
                                    ) : (
                                      <div
                                        className={styles.imageContainer}
                                        style={{
                                          marginLeft: "1rem",
                                          borderRight:
                                            "1px solid rgba(0,0,0,0.15)",
                                        }}
                                      >
                                        {task.assignees.map((a) => (
                                          // eslint-disable-next-line react/jsx-key
                                          <img
                                            src={a}
                                            alt={a}
                                            className={styles.image}
                                            style={{
                                              marginRight: "1rem",
                                              border:
                                                "1px solid rgba(0,0,0,0.25)",
                                              borderRadius: "50%",
                                            }}
                                          />
                                        ))}
                                      </div>
                                    )}

                                    {!display ? (
                                      <div className={styles.footer}>
                                        <div className={styles.imageContainer}>
                                          {task.assignees.map((a) => (
                                            // eslint-disable-next-line react/jsx-key
                                            <img
                                              src={a}
                                              alt={a}
                                              className={styles.image}
                                            />
                                          ))}
                                        </div>
                                        <div className={styles.actions}>
                                          <div className={styles.action}>
                                            <svg
                                              width="15"
                                              height="12"
                                              viewBox="0 0 15 12"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M2 4.875C1.3775 4.875 0.875 5.3775 0.875 6C0.875 6.6225 1.3775 7.125 2 7.125C2.6225 7.125 3.125 6.6225 3.125 6C3.125 5.3775 2.6225 4.875 2 4.875ZM2 0.375C1.3775 0.375 0.875 0.8775 0.875 1.5C0.875 2.1225 1.3775 2.625 2 2.625C2.6225 2.625 3.125 2.1225 3.125 1.5C3.125 0.8775 2.6225 0.375 2 0.375ZM2 9.375C1.3775 9.375 0.875 9.885 0.875 10.5C0.875 11.115 1.385 11.625 2 11.625C2.615 11.625 3.125 11.115 3.125 10.5C3.125 9.885 2.6225 9.375 2 9.375ZM5 11.25H14C14.4125 11.25 14.75 10.9125 14.75 10.5C14.75 10.0875 14.4125 9.75 14 9.75H5C4.5875 9.75 4.25 10.0875 4.25 10.5C4.25 10.9125 4.5875 11.25 5 11.25ZM5 6.75H14C14.4125 6.75 14.75 6.4125 14.75 6C14.75 5.5875 14.4125 5.25 14 5.25H5C4.5875 5.25 4.25 5.5875 4.25 6C4.25 6.4125 4.5875 6.75 5 6.75ZM4.25 1.5C4.25 1.9125 4.5875 2.25 5 2.25H14C14.4125 2.25 14.75 1.9125 14.75 1.5C14.75 1.0875 14.4125 0.75 14 0.75H5C4.5875 0.75 4.25 1.0875 4.25 1.5Z"
                                                fill={headertitle}
                                                fillOpacity="0.7"
                                              />
                                            </svg>
                                            <h1 style={{ color: headertitle }}>
                                              3
                                            </h1>
                                          </div>
                                          <div className={styles.action}>
                                            <svg
                                              width="15"
                                              height="16"
                                              viewBox="0 0 15 16"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M10.2753 1.93652C9.7757 1.93652 9.29655 2.13499 8.94326 2.48828L2.89547 8.53607C2.29522 9.13632 1.95801 9.95043 1.95801 10.7993C1.95801 11.6482 2.29522 12.4623 2.89547 13.0625C3.49572 13.6628 4.30983 14 5.15871 14C6.00759 14 6.8217 13.6628 7.42195 13.0625L13.4697 7.01475C13.7626 6.72186 14.2375 6.72186 14.5304 7.01475C14.8233 7.30764 14.8233 7.78252 14.5304 8.07541L8.4826 14.1232C7.60105 15.0048 6.40541 15.5 5.15871 15.5C3.912 15.5 2.71636 15.0048 1.83481 14.1232C0.953259 13.2416 0.458008 12.046 0.458008 10.7993C0.458008 9.5526 0.953259 8.35696 1.83481 7.47541L7.8826 1.42762C8.51719 0.79303 9.37787 0.436523 10.2753 0.436523C11.1728 0.436523 12.0334 0.79303 12.668 1.42762C13.3026 2.0622 13.6591 2.92288 13.6591 3.82032C13.6591 4.71776 13.3026 5.57845 12.668 6.21303L6.61365 12.2608C6.22603 12.6484 5.7003 12.8662 5.15213 12.8662C4.60395 12.8662 4.07823 12.6484 3.69061 12.2608C3.30299 11.8732 3.08523 11.3475 3.08523 10.7993C3.08523 10.2511 3.30299 9.7254 3.69061 9.33779L9.27805 3.75692C9.57112 3.4642 10.046 3.46448 10.3387 3.75755C10.6314 4.05061 10.6312 4.52548 10.3381 4.8182L4.75127 10.3984C4.64515 10.5047 4.58523 10.6491 4.58523 10.7993C4.58523 10.9497 4.64495 11.0938 4.75127 11.2002C4.85758 11.3065 5.00178 11.3662 5.15213 11.3662C5.30248 11.3662 5.44667 11.3065 5.55299 11.2002L11.6074 5.15237C11.6075 5.15228 11.6073 5.15247 11.6074 5.15237C11.9605 4.79912 12.1591 4.3198 12.1591 3.82032C12.1591 3.32071 11.9606 2.84156 11.6074 2.48828C11.2541 2.13499 10.7749 1.93652 10.2753 1.93652Z"
                                                fill={headertitle}
                                                fillOpacity="0.7"
                                              />
                                            </svg>
                                            <h1 style={{ color: headertitle }}>
                                              8
                                            </h1>
                                          </div>
                                          <div className={styles.action}>
                                            <svg
                                              width="16"
                                              height="16"
                                              viewBox="0 0 16 16"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M0.54275 14.4995L1.868 10.5252L1.865 10.52C1.46975 9.63575 1.25 8.6555 1.25 7.625C1.25 3.69275 4.44275 0.5 8.375 0.5C12.3073 0.5 15.5 3.69275 15.5 7.625C15.5 11.5573 12.3073 14.75 8.375 14.75C7.3445 14.75 6.365 14.5303 5.47775 14.135L5.47475 14.1343C4.55825 14.438 1.721 15.3838 1.5005 15.4573C1.4225 15.485 1.33775 15.5 1.25 15.5C0.836 15.5 0.5 15.164 0.5 14.75C0.5 14.6622 0.515 14.5775 0.54275 14.4995ZM8.375 2C11.4792 2 14 4.52075 14 7.625C14 10.7292 11.4792 13.25 8.375 13.25C7.562 13.25 6.78875 13.0775 6.0905 12.7662C5.75225 12.6117 5.36075 12.5915 5.0015 12.7108C4.487 12.8818 3.3605 13.256 2.43575 13.5643L3.29075 10.9985C3.41075 10.6385 3.38975 10.247 3.23225 9.90275C2.9225 9.2105 2.75 8.438 2.75 7.625C2.75 4.52075 5.27075 2 8.375 2Z"
                                                fill={headertitle}
                                                fillOpacity="0.7"
                                              />
                                            </svg>
                                            <h1 style={{ color: headertitle }}>
                                              8
                                            </h1>
                                          </div>
                                        </div>
                                      </div>
                                    ) : (
                                      <div className={styles.calendarDisplay}>
                                        <h1
                                          className={styles.dateDisplay}
                                          style={{
                                            textAlign: "center",
                                            color: headertitle,
                                          }}
                                        >
                                          {task.startDate} - {task.endDate}
                                        </h1>
                                      </div>
                                    )}
                                    {display && (
                                      <div className={styles.buttonsDisplay}>
                                        <div className={styles.actionsDisplay}>
                                          <div className={styles.actionDisplay}>
                                            <svg
                                              width="18"
                                              height="15"
                                              viewBox="0 0 15 12"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M2 4.875C1.3775 4.875 0.875 5.3775 0.875 6C0.875 6.6225 1.3775 7.125 2 7.125C2.6225 7.125 3.125 6.6225 3.125 6C3.125 5.3775 2.6225 4.875 2 4.875ZM2 0.375C1.3775 0.375 0.875 0.8775 0.875 1.5C0.875 2.1225 1.3775 2.625 2 2.625C2.6225 2.625 3.125 2.1225 3.125 1.5C3.125 0.8775 2.6225 0.375 2 0.375ZM2 9.375C1.3775 9.375 0.875 9.885 0.875 10.5C0.875 11.115 1.385 11.625 2 11.625C2.615 11.625 3.125 11.115 3.125 10.5C3.125 9.885 2.6225 9.375 2 9.375ZM5 11.25H14C14.4125 11.25 14.75 10.9125 14.75 10.5C14.75 10.0875 14.4125 9.75 14 9.75H5C4.5875 9.75 4.25 10.0875 4.25 10.5C4.25 10.9125 4.5875 11.25 5 11.25ZM5 6.75H14C14.4125 6.75 14.75 6.4125 14.75 6C14.75 5.5875 14.4125 5.25 14 5.25H5C4.5875 5.25 4.25 5.5875 4.25 6C4.25 6.4125 4.5875 6.75 5 6.75ZM4.25 1.5C4.25 1.9125 4.5875 2.25 5 2.25H14C14.4125 2.25 14.75 1.9125 14.75 1.5C14.75 1.0875 14.4125 0.75 14 0.75H5C4.5875 0.75 4.25 1.0875 4.25 1.5Z"
                                                fill={headertitle}
                                                fillOpacity="0.7"
                                              />
                                            </svg>
                                            <h1 style={{ color: headertitle }}>
                                              3
                                            </h1>
                                          </div>
                                          <div className={styles.actionDisplay}>
                                            <svg
                                              width="18"
                                              height="19"
                                              viewBox="0 0 15 16"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M10.2753 1.93652C9.7757 1.93652 9.29655 2.13499 8.94326 2.48828L2.89547 8.53607C2.29522 9.13632 1.95801 9.95043 1.95801 10.7993C1.95801 11.6482 2.29522 12.4623 2.89547 13.0625C3.49572 13.6628 4.30983 14 5.15871 14C6.00759 14 6.8217 13.6628 7.42195 13.0625L13.4697 7.01475C13.7626 6.72186 14.2375 6.72186 14.5304 7.01475C14.8233 7.30764 14.8233 7.78252 14.5304 8.07541L8.4826 14.1232C7.60105 15.0048 6.40541 15.5 5.15871 15.5C3.912 15.5 2.71636 15.0048 1.83481 14.1232C0.953259 13.2416 0.458008 12.046 0.458008 10.7993C0.458008 9.5526 0.953259 8.35696 1.83481 7.47541L7.8826 1.42762C8.51719 0.79303 9.37787 0.436523 10.2753 0.436523C11.1728 0.436523 12.0334 0.79303 12.668 1.42762C13.3026 2.0622 13.6591 2.92288 13.6591 3.82032C13.6591 4.71776 13.3026 5.57845 12.668 6.21303L6.61365 12.2608C6.22603 12.6484 5.7003 12.8662 5.15213 12.8662C4.60395 12.8662 4.07823 12.6484 3.69061 12.2608C3.30299 11.8732 3.08523 11.3475 3.08523 10.7993C3.08523 10.2511 3.30299 9.7254 3.69061 9.33779L9.27805 3.75692C9.57112 3.4642 10.046 3.46448 10.3387 3.75755C10.6314 4.05061 10.6312 4.52548 10.3381 4.8182L4.75127 10.3984C4.64515 10.5047 4.58523 10.6491 4.58523 10.7993C4.58523 10.9497 4.64495 11.0938 4.75127 11.2002C4.85758 11.3065 5.00178 11.3662 5.15213 11.3662C5.30248 11.3662 5.44667 11.3065 5.55299 11.2002L11.6074 5.15237C11.6075 5.15228 11.6073 5.15247 11.6074 5.15237C11.9605 4.79912 12.1591 4.3198 12.1591 3.82032C12.1591 3.32071 11.9606 2.84156 11.6074 2.48828C11.2541 2.13499 10.7749 1.93652 10.2753 1.93652Z"
                                                fill={headertitle}
                                                fillOpacity="0.7"
                                              />
                                            </svg>
                                            <h1 style={{ color: headertitle }}>
                                              8
                                            </h1>
                                          </div>
                                          <div className={styles.actionDisplay}>
                                            <svg
                                              width="19"
                                              height="19"
                                              viewBox="0 0 16 16"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M0.54275 14.4995L1.868 10.5252L1.865 10.52C1.46975 9.63575 1.25 8.6555 1.25 7.625C1.25 3.69275 4.44275 0.5 8.375 0.5C12.3073 0.5 15.5 3.69275 15.5 7.625C15.5 11.5573 12.3073 14.75 8.375 14.75C7.3445 14.75 6.365 14.5303 5.47775 14.135L5.47475 14.1343C4.55825 14.438 1.721 15.3838 1.5005 15.4573C1.4225 15.485 1.33775 15.5 1.25 15.5C0.836 15.5 0.5 15.164 0.5 14.75C0.5 14.6622 0.515 14.5775 0.54275 14.4995ZM8.375 2C11.4792 2 14 4.52075 14 7.625C14 10.7292 11.4792 13.25 8.375 13.25C7.562 13.25 6.78875 13.0775 6.0905 12.7662C5.75225 12.6117 5.36075 12.5915 5.0015 12.7108C4.487 12.8818 3.3605 13.256 2.43575 13.5643L3.29075 10.9985C3.41075 10.6385 3.38975 10.247 3.23225 9.90275C2.9225 9.2105 2.75 8.438 2.75 7.625C2.75 4.52075 5.27075 2 8.375 2Z"
                                                fill={headertitle}
                                                fillOpacity="0.7"
                                              />
                                            </svg>
                                            <h1 style={{ color: headertitle }}>
                                              8
                                            </h1>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </li>
                              )}
                            </Draggable>
                          )
                      )}
                    </ul>
                  )}
                </Droppable>
              )}
            </div>
            <div
              className={styles.container}
              style={display ? { width: "100%" } : null}
            >
              <div
                className={styles.header}
                style={
                  !DoneExpand
                    ? {
                        backgroundColor:
                          colormode === "dark" ? "#323339" : "white",
                        boxShadow:
                          colormode === "dark"
                            ? "0px 2px 5px 1px rgba(25,25,25,0.5)"
                            : "0px 2px 5px 1px rgba(225,225,225,0.5)",
                        borderRadius: "12px",
                      }
                    : null
                }
              >
                <div>
                  <h1 style={{ color: headertitle }}>Done</h1>
                  <h3 style={{ color: headertitle }}>
                    {columns["doneTasks"].items.length} tasks
                  </h3>
                </div>
                <div className={styles.icons}>
                  <div>
                    <svg
                      onClick={() => console.log("add button")}
                      className={styles.addBtn}
                      width="16"
                      height="16"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5 6.75H6.75V10.5C6.75 10.9125 6.4125 11.25 6 11.25C5.5875 11.25 5.25 10.9125 5.25 10.5V6.75H1.5C1.0875 6.75 0.75 6.4125 0.75 6C0.75 5.5875 1.0875 5.25 1.5 5.25H5.25V1.5C5.25 1.0875 5.5875 0.75 6 0.75C6.4125 0.75 6.75 1.0875 6.75 1.5V5.25H10.5C10.9125 5.25 11.25 5.5875 11.25 6C11.25 6.4125 10.9125 6.75 10.5 6.75Z"
                        fill={headertitle}
                        fillOpacity="0.7"
                      />
                    </svg>
                  </div>
                  <div>
                    <svg
                      onClick={() => setDoneExpand(!DoneExpand)}
                      className={styles.expandBtn}
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.9675 2.09L11.525 5.5325L12.7175 6.725C13.19 7.1975 12.8525 8.0075 12.185 8.0075H8.75C8.3375 8.0075 8 7.67 8 7.2575V3.8075C8 3.14 8.81 2.8025 9.2825 3.275L10.475 4.4675L13.9175 1.025C13.9869 0.955469 14.0693 0.900309 14.16 0.862673C14.2508 0.825037 14.348 0.805664 14.4462 0.805664C14.5445 0.805664 14.6417 0.825037 14.7325 0.862673C14.8232 0.900309 14.9056 0.955469 14.975 1.025C15.26 1.325 15.26 1.7975 14.9675 2.09ZM2.09 14.9675L5.5325 11.525L6.725 12.7175C7.1975 13.19 8.0075 12.8525 8.0075 12.185V8.75C8.0075 8.3375 7.67 8 7.2575 8H3.8075C3.14 8 2.8025 8.81 3.275 9.2825L4.4675 10.475L1.025 13.9175C0.955469 13.9869 0.900309 14.0693 0.862673 14.16C0.825037 14.2508 0.805664 14.348 0.805664 14.4462C0.805664 14.5445 0.825037 14.6417 0.862673 14.7325C0.900309 14.8232 0.955469 14.9056 1.025 14.975C1.325 15.26 1.7975 15.26 2.09 14.9675Z"
                        fill={headertitle}
                        fillOpacity="0.7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              {DoneExpand && (
                <Droppable droppableId="doneTasks">
                  {(provided) => (
                    <ul
                      className={
                        !display ? styles.addTask : styles.addTaskDisplay
                      }
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={display ? { marginBottom: "1rem" } : null}
                    >
                      {columns["doneTasks"].items.length === 0 && (
                        <li
                          className={
                            !display
                              ? styles.addTaskIcons
                              : styles.addTaskIconsDisplay
                          }
                        >
                          <svg
                            width="13"
                            height="14"
                            viewBox="0 0 11 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 6.75H6.25V10.5C6.25 10.9125 5.9125 11.25 5.5 11.25C5.0875 11.25 4.75 10.9125 4.75 10.5V6.75H1C0.5875 6.75 0.25 6.4125 0.25 6C0.25 5.5875 0.5875 5.25 1 5.25H4.75V1.5C4.75 1.0875 5.0875 0.75 5.5 0.75C5.9125 0.75 6.25 1.0875 6.25 1.5V5.25H10C10.4125 5.25 10.75 5.5875 10.75 6C10.75 6.4125 10.4125 6.75 10 6.75Z"
                              fill={headertitle}
                              fillOpacity="0.7"
                            />
                          </svg>

                          <h1 style={{ color: headertitle }}>Add Task</h1>
                        </li>
                      )}
                      {columns["doneTasks"].items.map(
                        (task, index) =>
                          // eslint-disable-next-line react/jsx-key
                          task !== undefined && (
                            <Draggable
                              key={task.id}
                              draggableId={task.id}
                              index={index}
                            >
                              {(provided) => (
                                <li
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className={
                                    !display
                                      ? view === true
                                        ? id === task.id
                                          ? `${
                                              colormode === "light"
                                                ? styles.blue
                                                : styles.black
                                            } ${styles.taskContainer} ${
                                              colormode === "dark"
                                                ? styles.colorChange
                                                : null
                                            }`
                                          : `${styles.taskContainer} ${
                                              colormode === "dark"
                                                ? styles.colorChange
                                                : null
                                            }`
                                        : `${styles.taskContainer} ${
                                            colormode === "dark"
                                              ? styles.colorChange
                                              : null
                                          }`
                                      : view === true
                                      ? id === task.id
                                        ? index === 0
                                          ? `${
                                              colormode === "light"
                                                ? styles.blue
                                                : styles.black
                                            } ${styles.taskContainerDisplay} ${
                                              colormode === "dark"
                                                ? styles.colorChange
                                                : null
                                            } ${styles.first}`
                                          : index ===
                                            columns["notStartedTasks"].items
                                              .length -
                                              1
                                          ? `${
                                              colormode === "light"
                                                ? styles.blue
                                                : styles.black
                                            } ${styles.taskContainerDisplay} ${
                                              colormode === "dark"
                                                ? styles.colorChange
                                                : null
                                            } ${styles.last}`
                                          : `${
                                              colormode === "light"
                                                ? styles.blue
                                                : styles.black
                                            } ${styles.taskContainerDisplay} ${
                                              colormode === "dark"
                                                ? styles.colorChange
                                                : null
                                            }`
                                        : index === 0
                                        ? `${styles.first} ${
                                            styles.taskContainerDisplay
                                          } ${
                                            colormode === "dark"
                                              ? styles.colorChange
                                              : null
                                          }`
                                        : index ===
                                          columns["notStartedTasks"].items
                                            .length -
                                            1
                                        ? `${styles.taskContainerDisplay} ${
                                            styles.last
                                          } ${
                                            colormode === "dark"
                                              ? styles.colorChange
                                              : null
                                          }`
                                        : `${styles.taskContainerDisplay} ${
                                            colormode === "dark"
                                              ? styles.colorChange
                                              : null
                                          }`
                                      : index === 0
                                      ? `${styles.first} ${
                                          styles.taskContainerDisplay
                                        } ${
                                          colormode === "dark"
                                            ? styles.colorChange
                                            : null
                                        }`
                                      : index ===
                                        columns["notStartedTasks"].items
                                          .length -
                                          1
                                      ? `${styles.taskContainerDisplay} ${
                                          colormode === "dark"
                                            ? styles.colorChange
                                            : null
                                        }  ${styles.last}`
                                      : `${styles.taskContainerDisplay} ${
                                          colormode === "dark"
                                            ? styles.colorChange
                                            : null
                                        }`
                                  }
                                  onClick={() => open(task, task.id)}
                                  key={task.id}
                                >
                                  <div
                                    className={
                                      !display
                                        ? styles.taskHeader
                                        : styles.taskHeaderDisplay
                                    }
                                  >
                                    <div>
                                      <h1
                                        className={styles.taskTitle}
                                        style={{ color: headertitle }}
                                      >
                                        {task.title}‏‏‎ ‎‏‏‎ ‎
                                        {task.priority !== "None" && (
                                          <strong
                                            style={
                                              task.priority === "!!"
                                                ? {
                                                    color: "#FF5C72",
                                                    fontSize: "24px",
                                                  }
                                                : {
                                                    color: "#FDA076",
                                                    fontSize: "18px",
                                                  }
                                            }
                                          >
                                            {task.priority}
                                          </strong>
                                        )}
                                      </h1>
                                    </div>
                                    <div className={styles.headerInfo}>
                                      <div style={{ display: "flex" }}>
                                        <div
                                          style={{ backgroundColor: "#7A9EFF" }}
                                        >
                                          <h1>{task.phase}</h1>
                                        </div>
                                        {task.subphase.length !== 0 &&
                                          task.subphase.map((sub) => (
                                            <div
                                              style={{
                                                backgroundColor: "#C67AFF",
                                                marginLeft: "0.25rem",
                                              }}
                                            >
                                              <h1>{sub}</h1>
                                            </div>
                                          ))}
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className={
                                      !display
                                        ? styles.taskBody
                                        : styles.taskBodyDisplay
                                    }
                                  >
                                    {!display && (
                                      <h1 style={{ color: mainFontColor }}>
                                        {task.description}
                                      </h1>
                                    )}

                                    {!display ? (
                                      <div className={styles.calendar}>
                                        <svg
                                          width="18"
                                          height="20"
                                          viewBox="0 0 16 18"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M14 2.25H13.25V1.5C13.25 1.0875 12.9125 0.75 12.5 0.75C12.0875 0.75 11.75 1.0875 11.75 1.5V2.25H4.25V1.5C4.25 1.0875 3.9125 0.75 3.5 0.75C3.0875 0.75 2.75 1.0875 2.75 1.5V2.25H2C1.175 2.25 0.5 2.925 0.5 3.75V15.75C0.5 16.575 1.175 17.25 2 17.25H14C14.825 17.25 15.5 16.575 15.5 15.75V3.75C15.5 2.925 14.825 2.25 14 2.25ZM13.25 15.75H2.75C2.3375 15.75 2 15.4125 2 15V6H14V15C14 15.4125 13.6625 15.75 13.25 15.75Z"
                                            fill={headertitle}
                                            fillOpacity="0.7"
                                          />
                                        </svg>
                                        <h1
                                          className={styles.date}
                                          style={{ color: mainFontColor }}
                                        >
                                          {task.startDate} - {task.endDate}
                                        </h1>
                                      </div>
                                    ) : (
                                      <div
                                        className={styles.imageContainer}
                                        style={{
                                          marginLeft: "1rem",
                                          borderRight:
                                            "1px solid rgba(0,0,0,0.15)",
                                        }}
                                      >
                                        {task.assignees.map((a) => (
                                          // eslint-disable-next-line react/jsx-key
                                          <img
                                            src={a}
                                            alt={a}
                                            className={styles.image}
                                            style={{
                                              marginRight: "1rem",
                                              border:
                                                "1px solid rgba(0,0,0,0.25)",
                                              borderRadius: "50%",
                                            }}
                                          />
                                        ))}
                                      </div>
                                    )}

                                    {!display ? (
                                      <div className={styles.footer}>
                                        <div className={styles.imageContainer}>
                                          {task.assignees.map((a) => (
                                            // eslint-disable-next-line react/jsx-key
                                            <img
                                              src={a}
                                              alt={a}
                                              className={styles.image}
                                            />
                                          ))}
                                        </div>
                                        <div className={styles.actions}>
                                          <div className={styles.action}>
                                            <svg
                                              width="15"
                                              height="12"
                                              viewBox="0 0 15 12"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M2 4.875C1.3775 4.875 0.875 5.3775 0.875 6C0.875 6.6225 1.3775 7.125 2 7.125C2.6225 7.125 3.125 6.6225 3.125 6C3.125 5.3775 2.6225 4.875 2 4.875ZM2 0.375C1.3775 0.375 0.875 0.8775 0.875 1.5C0.875 2.1225 1.3775 2.625 2 2.625C2.6225 2.625 3.125 2.1225 3.125 1.5C3.125 0.8775 2.6225 0.375 2 0.375ZM2 9.375C1.3775 9.375 0.875 9.885 0.875 10.5C0.875 11.115 1.385 11.625 2 11.625C2.615 11.625 3.125 11.115 3.125 10.5C3.125 9.885 2.6225 9.375 2 9.375ZM5 11.25H14C14.4125 11.25 14.75 10.9125 14.75 10.5C14.75 10.0875 14.4125 9.75 14 9.75H5C4.5875 9.75 4.25 10.0875 4.25 10.5C4.25 10.9125 4.5875 11.25 5 11.25ZM5 6.75H14C14.4125 6.75 14.75 6.4125 14.75 6C14.75 5.5875 14.4125 5.25 14 5.25H5C4.5875 5.25 4.25 5.5875 4.25 6C4.25 6.4125 4.5875 6.75 5 6.75ZM4.25 1.5C4.25 1.9125 4.5875 2.25 5 2.25H14C14.4125 2.25 14.75 1.9125 14.75 1.5C14.75 1.0875 14.4125 0.75 14 0.75H5C4.5875 0.75 4.25 1.0875 4.25 1.5Z"
                                                fill={headertitle}
                                                fillOpacity="0.7"
                                              />
                                            </svg>
                                            <h1 style={{ color: headertitle }}>
                                              3
                                            </h1>
                                          </div>
                                          <div className={styles.action}>
                                            <svg
                                              width="15"
                                              height="16"
                                              viewBox="0 0 15 16"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M10.2753 1.93652C9.7757 1.93652 9.29655 2.13499 8.94326 2.48828L2.89547 8.53607C2.29522 9.13632 1.95801 9.95043 1.95801 10.7993C1.95801 11.6482 2.29522 12.4623 2.89547 13.0625C3.49572 13.6628 4.30983 14 5.15871 14C6.00759 14 6.8217 13.6628 7.42195 13.0625L13.4697 7.01475C13.7626 6.72186 14.2375 6.72186 14.5304 7.01475C14.8233 7.30764 14.8233 7.78252 14.5304 8.07541L8.4826 14.1232C7.60105 15.0048 6.40541 15.5 5.15871 15.5C3.912 15.5 2.71636 15.0048 1.83481 14.1232C0.953259 13.2416 0.458008 12.046 0.458008 10.7993C0.458008 9.5526 0.953259 8.35696 1.83481 7.47541L7.8826 1.42762C8.51719 0.79303 9.37787 0.436523 10.2753 0.436523C11.1728 0.436523 12.0334 0.79303 12.668 1.42762C13.3026 2.0622 13.6591 2.92288 13.6591 3.82032C13.6591 4.71776 13.3026 5.57845 12.668 6.21303L6.61365 12.2608C6.22603 12.6484 5.7003 12.8662 5.15213 12.8662C4.60395 12.8662 4.07823 12.6484 3.69061 12.2608C3.30299 11.8732 3.08523 11.3475 3.08523 10.7993C3.08523 10.2511 3.30299 9.7254 3.69061 9.33779L9.27805 3.75692C9.57112 3.4642 10.046 3.46448 10.3387 3.75755C10.6314 4.05061 10.6312 4.52548 10.3381 4.8182L4.75127 10.3984C4.64515 10.5047 4.58523 10.6491 4.58523 10.7993C4.58523 10.9497 4.64495 11.0938 4.75127 11.2002C4.85758 11.3065 5.00178 11.3662 5.15213 11.3662C5.30248 11.3662 5.44667 11.3065 5.55299 11.2002L11.6074 5.15237C11.6075 5.15228 11.6073 5.15247 11.6074 5.15237C11.9605 4.79912 12.1591 4.3198 12.1591 3.82032C12.1591 3.32071 11.9606 2.84156 11.6074 2.48828C11.2541 2.13499 10.7749 1.93652 10.2753 1.93652Z"
                                                fill={headertitle}
                                                fillOpacity="0.7"
                                              />
                                            </svg>
                                            <h1 style={{ color: headertitle }}>
                                              8
                                            </h1>
                                          </div>
                                          <div className={styles.action}>
                                            <svg
                                              width="16"
                                              height="16"
                                              viewBox="0 0 16 16"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M0.54275 14.4995L1.868 10.5252L1.865 10.52C1.46975 9.63575 1.25 8.6555 1.25 7.625C1.25 3.69275 4.44275 0.5 8.375 0.5C12.3073 0.5 15.5 3.69275 15.5 7.625C15.5 11.5573 12.3073 14.75 8.375 14.75C7.3445 14.75 6.365 14.5303 5.47775 14.135L5.47475 14.1343C4.55825 14.438 1.721 15.3838 1.5005 15.4573C1.4225 15.485 1.33775 15.5 1.25 15.5C0.836 15.5 0.5 15.164 0.5 14.75C0.5 14.6622 0.515 14.5775 0.54275 14.4995ZM8.375 2C11.4792 2 14 4.52075 14 7.625C14 10.7292 11.4792 13.25 8.375 13.25C7.562 13.25 6.78875 13.0775 6.0905 12.7662C5.75225 12.6117 5.36075 12.5915 5.0015 12.7108C4.487 12.8818 3.3605 13.256 2.43575 13.5643L3.29075 10.9985C3.41075 10.6385 3.38975 10.247 3.23225 9.90275C2.9225 9.2105 2.75 8.438 2.75 7.625C2.75 4.52075 5.27075 2 8.375 2Z"
                                                fill={headertitle}
                                                fillOpacity="0.7"
                                              />
                                            </svg>
                                            <h1 style={{ color: headertitle }}>
                                              8
                                            </h1>
                                          </div>
                                        </div>
                                      </div>
                                    ) : (
                                      <div className={styles.calendarDisplay}>
                                        <h1
                                          className={styles.dateDisplay}
                                          style={{
                                            textAlign: "center",
                                            color: headertitle,
                                          }}
                                        >
                                          {task.startDate} - {task.endDate}
                                        </h1>
                                      </div>
                                    )}
                                    {display && (
                                      <div className={styles.buttonsDisplay}>
                                        <div className={styles.actionsDisplay}>
                                          <div className={styles.actionDisplay}>
                                            <svg
                                              width="18"
                                              height="15"
                                              viewBox="0 0 15 12"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M2 4.875C1.3775 4.875 0.875 5.3775 0.875 6C0.875 6.6225 1.3775 7.125 2 7.125C2.6225 7.125 3.125 6.6225 3.125 6C3.125 5.3775 2.6225 4.875 2 4.875ZM2 0.375C1.3775 0.375 0.875 0.8775 0.875 1.5C0.875 2.1225 1.3775 2.625 2 2.625C2.6225 2.625 3.125 2.1225 3.125 1.5C3.125 0.8775 2.6225 0.375 2 0.375ZM2 9.375C1.3775 9.375 0.875 9.885 0.875 10.5C0.875 11.115 1.385 11.625 2 11.625C2.615 11.625 3.125 11.115 3.125 10.5C3.125 9.885 2.6225 9.375 2 9.375ZM5 11.25H14C14.4125 11.25 14.75 10.9125 14.75 10.5C14.75 10.0875 14.4125 9.75 14 9.75H5C4.5875 9.75 4.25 10.0875 4.25 10.5C4.25 10.9125 4.5875 11.25 5 11.25ZM5 6.75H14C14.4125 6.75 14.75 6.4125 14.75 6C14.75 5.5875 14.4125 5.25 14 5.25H5C4.5875 5.25 4.25 5.5875 4.25 6C4.25 6.4125 4.5875 6.75 5 6.75ZM4.25 1.5C4.25 1.9125 4.5875 2.25 5 2.25H14C14.4125 2.25 14.75 1.9125 14.75 1.5C14.75 1.0875 14.4125 0.75 14 0.75H5C4.5875 0.75 4.25 1.0875 4.25 1.5Z"
                                                fill={headertitle}
                                                fillOpacity="0.7"
                                              />
                                            </svg>
                                            <h1 style={{ color: headertitle }}>
                                              3
                                            </h1>
                                          </div>
                                          <div className={styles.actionDisplay}>
                                            <svg
                                              width="18"
                                              height="19"
                                              viewBox="0 0 15 16"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M10.2753 1.93652C9.7757 1.93652 9.29655 2.13499 8.94326 2.48828L2.89547 8.53607C2.29522 9.13632 1.95801 9.95043 1.95801 10.7993C1.95801 11.6482 2.29522 12.4623 2.89547 13.0625C3.49572 13.6628 4.30983 14 5.15871 14C6.00759 14 6.8217 13.6628 7.42195 13.0625L13.4697 7.01475C13.7626 6.72186 14.2375 6.72186 14.5304 7.01475C14.8233 7.30764 14.8233 7.78252 14.5304 8.07541L8.4826 14.1232C7.60105 15.0048 6.40541 15.5 5.15871 15.5C3.912 15.5 2.71636 15.0048 1.83481 14.1232C0.953259 13.2416 0.458008 12.046 0.458008 10.7993C0.458008 9.5526 0.953259 8.35696 1.83481 7.47541L7.8826 1.42762C8.51719 0.79303 9.37787 0.436523 10.2753 0.436523C11.1728 0.436523 12.0334 0.79303 12.668 1.42762C13.3026 2.0622 13.6591 2.92288 13.6591 3.82032C13.6591 4.71776 13.3026 5.57845 12.668 6.21303L6.61365 12.2608C6.22603 12.6484 5.7003 12.8662 5.15213 12.8662C4.60395 12.8662 4.07823 12.6484 3.69061 12.2608C3.30299 11.8732 3.08523 11.3475 3.08523 10.7993C3.08523 10.2511 3.30299 9.7254 3.69061 9.33779L9.27805 3.75692C9.57112 3.4642 10.046 3.46448 10.3387 3.75755C10.6314 4.05061 10.6312 4.52548 10.3381 4.8182L4.75127 10.3984C4.64515 10.5047 4.58523 10.6491 4.58523 10.7993C4.58523 10.9497 4.64495 11.0938 4.75127 11.2002C4.85758 11.3065 5.00178 11.3662 5.15213 11.3662C5.30248 11.3662 5.44667 11.3065 5.55299 11.2002L11.6074 5.15237C11.6075 5.15228 11.6073 5.15247 11.6074 5.15237C11.9605 4.79912 12.1591 4.3198 12.1591 3.82032C12.1591 3.32071 11.9606 2.84156 11.6074 2.48828C11.2541 2.13499 10.7749 1.93652 10.2753 1.93652Z"
                                                fill={headertitle}
                                                fillOpacity="0.7"
                                              />
                                            </svg>
                                            <h1 style={{ color: headertitle }}>
                                              8
                                            </h1>
                                          </div>
                                          <div className={styles.actionDisplay}>
                                            <svg
                                              width="19"
                                              height="19"
                                              viewBox="0 0 16 16"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M0.54275 14.4995L1.868 10.5252L1.865 10.52C1.46975 9.63575 1.25 8.6555 1.25 7.625C1.25 3.69275 4.44275 0.5 8.375 0.5C12.3073 0.5 15.5 3.69275 15.5 7.625C15.5 11.5573 12.3073 14.75 8.375 14.75C7.3445 14.75 6.365 14.5303 5.47775 14.135L5.47475 14.1343C4.55825 14.438 1.721 15.3838 1.5005 15.4573C1.4225 15.485 1.33775 15.5 1.25 15.5C0.836 15.5 0.5 15.164 0.5 14.75C0.5 14.6622 0.515 14.5775 0.54275 14.4995ZM8.375 2C11.4792 2 14 4.52075 14 7.625C14 10.7292 11.4792 13.25 8.375 13.25C7.562 13.25 6.78875 13.0775 6.0905 12.7662C5.75225 12.6117 5.36075 12.5915 5.0015 12.7108C4.487 12.8818 3.3605 13.256 2.43575 13.5643L3.29075 10.9985C3.41075 10.6385 3.38975 10.247 3.23225 9.90275C2.9225 9.2105 2.75 8.438 2.75 7.625C2.75 4.52075 5.27075 2 8.375 2Z"
                                                fill={headertitle}
                                                fillOpacity="0.7"
                                              />
                                            </svg>
                                            <h1 style={{ color: headertitle }}>
                                              8
                                            </h1>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </li>
                              )}
                            </Draggable>
                          )
                      )}
                    </ul>
                  )}
                </Droppable>
              )}
            </div>
          </DragDropContext>
        </div>
      </SimpleBar>
    </div>
  );
}
