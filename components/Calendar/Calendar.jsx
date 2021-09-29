import React, { useState, useEffect } from "react";
import styles from "../../styles/Calendar.module.scss";

import CalendarNavbar from "./CalendarNavbar/CalendarNavbar";

import { useDispatch, useSelector } from "react-redux";
import { switchColormode } from "../../redux/actions/colormodeActions";

function Calendar() {
  const today = new Date();

  const dispatch = useDispatch();
  const colormode = useSelector((state) => state.color.colormode);

  const [mode, setMode] = useState("month");

  const [bgColor, setBgColor] = useState("white");
  const [fontColor, setFontColor] = useState("black");
  const [borderColor, setBorderColor] = useState("0, 0, 0,");

  const [scrollUp, setScrollUp] = useState(0);
  const [scrollDown, setScrollDown] = useState(0);
  const [minScroll, setMinScroll] = useState(1);
  const [scrollTimeDiff, setScrollTimeDiff] = useState(0);

  const [direction, setDirection] = useState(0);
  const [updateDate, setUpdateDate] = useState(0);

  const [FUexpansions, setFUexpansions] = useState(0);
  const [expansionAdd] = useState(3);
  const [openedDay, setOpenedDay] = useState(0);
  const [expansions, setExpansions] = useState({
    0: "0rem",
    1: "0rem",
    2: "0rem",
    3: "0rem",
    4: "0rem",
    5: "0rem",
  });

  useEffect(() => {
    updateMonth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bgColor, fontColor, borderColor]);

  useEffect(() => {
    if (colormode === "light") {
      setBgColor("white");
      setFontColor("black");
      setBorderColor("0, 0, 0,");
    } else {
      setBgColor("#323339");
      setFontColor("white");
      setBorderColor("255, 255, 255,");
    }
  }, [colormode]);

  const [monthIndex, setMonthIndex] = useState(today.getMonth());

  const allTasks = [
    {
      startDay: 3,
      endDay: 9,
      startMonth: 8,
      endMonth: 8,
      startYear: 2021,
      endYear: 2021,
      title: "from 3 to 9 1",
      description: "Foundation • Not Started",
    },
    {
      startDay: 3,
      endDay: 9,
      startMonth: 8,
      endMonth: 8,
      startYear: 2021,
      endYear: 2021,
      title: "from 3 to 9 2",
      description: "Foundation • Not Started",
    },
    {
      startDay: 3,
      endDay: 9,
      startMonth: 8,
      endMonth: 8,
      startYear: 2021,
      endYear: 2021,
      title: "from 3 to 9 3",
      description: "Foundation • Not Started",
    },
    {
      startDay: 4,
      endDay: 7,
      startMonth: 8,
      endMonth: 8,
      startYear: 2021,
      endYear: 2021,
      title: "from 4 to 7",
      description: "Foundation • Not Started",
    },
    {
      startDay: 2,
      endDay: 6,
      startMonth: 8,
      endMonth: 8,
      startYear: 2021,
      endYear: 2021,
      title: "from 2 to 6",
      description: "Foundation • Not Started",
    },
    {
      startDay: 4,
      endDay: 5,
      startMonth: 8,
      endMonth: 8,
      startYear: 2021,
      endYear: 2021,
      title: "from 4 to 5",
      description: "Foundation • Not Started",
    },
    {
      startDay: 13,
      endDay: 28,
      startMonth: 8,
      endMonth: 8,
      startYear: 2021,
      endYear: 2021,
      title: "from 13 to 28",
      description: "Foundation • Not Started",
    },
    {
      startDay: 14,
      endDay: 23,
      startMonth: 9,
      endMonth: 9,
      startYear: 2021,
      endYear: 2021,
      title: "from 14 to 23",
      description: "Foundation • Not Started",
    },
    {
      startDay: 14,
      endDay: 23,
      startMonth: 9,
      endMonth: 9,
      startYear: 2021,
      endYear: 2021,
      title: "from 14 to 23",
      description: "Foundation • Not Started",
    },
    {
      startDay: 20,
      endDay: 23,
      startMonth: 9,
      endMonth: 9,
      startYear: 2021,
      endYear: 2021,
      title: "from 20 to 23",
      description: "Foundation • Not Started",
    },
  ];

  let tasks = [];

  const [allMonths] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]);

  const nextMonth = () => (monthIndex === 11 ? 0 : monthIndex + 1);
  const prevMonth = () => (monthIndex === 0 ? 11 : monthIndex - 1);

  function flatten(a) {
    return Array.isArray(a) ? [].concat.apply([], a.map(flatten)) : a;
  }

  const getDaysInMonth = () => {
    return new Date(year, monthIndex + 1, 0).getDate();
  };

  const getFirstDay = () => {
    return new Date(year, monthIndex, 1).getDay();
  };

  const getTaskPosition = (task, i) => {
    // Check task position and taken days
    let takenRangePairs = [];
    let currRangePair = [task.startDay, task.endDay];
    let count = 0;

    tasks.forEach((taskTemp) => {
      const taskRange = [taskTemp.startDay, taskTemp.endDay];
      takenRangePairs.push(taskRange);
    });

    const slicedPairs = takenRangePairs.slice(0, i);
    let currDayPairs = [];
    let remainderDayPairs = [];
    let finalPairs = [];

    console.log(tasks);

    if (
      openedDay !== 0 &&
      currRangePair[0] <= openedDay &&
      currRangePair[1] > openedDay
    ) {
      slicedPairs.forEach((pair) => {
        if (pair[0] <= openedDay && pair[1] > openedDay) {
          currDayPairs.push(pair);
        } else {
          remainderDayPairs.push(pair);
        }

        finalPairs = currDayPairs;
      });

      console.log("Day", openedDay);
      console.log("Final", finalPairs);
      console.log("Sliced", slicedPairs);
      console.log("Task", task);
    } else {
      finalPairs = slicedPairs;
    }

    finalPairs.forEach((takenRangePair) => {
      if (
        (currRangePair[0] >= takenRangePair[0] &&
          currRangePair[0] < takenRangePair[1]) ||
        (currRangePair[1] > takenRangePair[0] &&
          currRangePair[1] <= takenRangePair[1])
      ) {
        count++;
      }
    });

    return count;
  };

  const [year, setYear] = useState(today.getFullYear());
  const [firstDay, setfirstDay] = useState(getFirstDay());
  const [daysInMonth, setDaysInMonth] = useState(getDaysInMonth());
  const [month, setMonth] = useState([]);
  const [day, setDay] = useState(today.getDate());
  const [week, setWeek] = useState(0);

  const updateMonth = () => {
    const days = [];

    if (mode === "week") {
      [...Array(14 * 7).keys()].map((i) =>
        days.push(
          <div
            className={styles.day}
            style={{
              borderTop: `1px solid rgba(${borderColor} 0.3)`,
              borderRight: `1px solid rgba(${borderColor} 0.3)`,
            }}
          ></div>
        )
      );

      setMonth(days);

      return;
    }

    // Push a few days from the end of last month to the start of the calendar if needed
    [...Array(firstDay).keys()].map((i) =>
      days.push(
        <div className={styles.day}>
          <p
            style={{
              color: fontColor,
              opacity: "0.4",
              borderTop: `1px solid rgba(${borderColor} 0.5)`,
              borderRight: `1px solid rgba(${borderColor} ${
                i === firstDay - 1 ? "0.5" : "0.2"
              })`,
            }}
          >
            {getDaysInMonth(prevMonth(), year) - firstDay + i}
          </p>
        </div>
      )
    );

    // Push the current month days to calendar
    [...Array(daysInMonth).keys()].map((i) =>
      days.push(
        <div className={styles.day}>
          {i === today.getDate() - 1 &&
            monthIndex === today.getMonth() &&
            year === today.getFullYear() && (
              <div
                className={styles.today}
                style={{ backgroundColor: fontColor, opacity: 0.9 }}
              >
                <p
                  style={{
                    borderRight: `1px solid rgba(${borderColor} 0.2)`,
                    borderTop: `1px solid rgba(${borderColor} 0.2)`,
                    color: bgColor,
                  }}
                >
                  {i === 0
                    ? `${allMonths[monthIndex].substring(0, 3)} ${i + 1}`
                    : i + 1}
                </p>
              </div>
            )}
          <p
            style={{
              color: fontColor,
              opacity: 1,
              borderRight: `1px solid rgba(${borderColor} 0.2)`,
              borderTop: `1px solid rgba(${borderColor} 0.2)`,
              opacity: 0.7,
            }}
          >
            {i === 0
              ? `${allMonths[monthIndex].substring(0, 3)} ${i + 1}`
              : i + 1}
          </p>
          {getTasksInDay(i + 1)}
        </div>
      )
    );

    // Push a few days from the start of next month to the end of the calendar if needed
    [...Array(42 - daysInMonth - firstDay).keys()].map((i) =>
      days.push(
        <div className={styles.day}>
          <p
            style={{
              color: fontColor,
              opacity: "0.4",
              borderRight: `1px solid rgba(${borderColor} 0.2)`,
              borderTop: `1px solid rgba(${borderColor} ${
                i < 7 ? "0.5" : "0.2"
              })`,
            }}
          >
            {`${allMonths[nextMonth()].substring(0, 3)} ${i + 1}`}
          </p>
        </div>
      )
    );

    setMonth(days);
  };

  const getWeekIndex = (day, month) => {
    let weekIndex;

    // Get week index
    if (month === monthIndex - 1) weekIndex = 0;
    else if (month === monthIndex + 1) {
      weekIndex = Math.floor(
        (firstDay + getDaysInMonth(monthIndex) + day - 1) / 7
      );
    } else {
      weekIndex = Math.floor((firstDay + day - 1) / 7);
    }

    return weekIndex;
  };

  // Update current month calendar
  useEffect(() => {
    updateMonth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstDay, daysInMonth, FUexpansions, mode]);

  const handleWeekExpansion = (weekIndex, count, day, close = false) => {
    if (close) count = 2;

    setOpenedDay(day);

    const tempExpansions = expansions;
    tempExpansions[weekIndex] = `${(count - 2) * expansionAdd}rem`;
    setExpansions(tempExpansions);
    setFUexpansions(FUexpansions + 1);
  };

  const getTasksInDay = (day) => {
    let count = 0;

    allTasks.forEach((task) => {
      if (task.startDay <= day && day < task.endDay) {
        if (
          task.startMonth === monthIndex + 1 ||
          task.endMonth === monthIndex + 1
        ) {
          count++;
        }
      }
    });

    if (count > 2) {
      const weekIndex = getWeekIndex(day, month);

      if (expansions[weekIndex] === "0rem") {
        return (
          <h6
            style={{ color: fontColor }}
            onClick={() => handleWeekExpansion(weekIndex, count, day)}
          >
            {count - 2} more...
          </h6>
        );
      } else {
        return (
          <h6
            style={{ color: fontColor }}
            onClick={() => handleWeekExpansion(weekIndex, count, 0, true)}
          >
            Show less
          </h6>
        );
      }
    }

    return null;
  };

  const isInCurrentWeek = (task) => {
    const firstDayOfWeek = day - new Date(year, monthIndex, day).getDay();
    const lastDayOfWeek = firstDayOfWeek + 7;

    if (
      task.startMonth === monthIndex + 1 ||
      task.endMonth === monthIndex + 1
    ) {
      if (
        (task.startDay >= firstDayOfWeek && task.startDay < lastDayOfWeek) ||
        (task.endDay <= lastDayOfWeek && task.endDay > firstDayOfWeek) ||
        (task.startDay < firstDayOfWeek && task.endDay >= lastDayOfWeek)
      ) {
        return true;
      }
    }

    return false;
  };

  const updateTasks = () => {
    allTasks.forEach((task) => {
      if (
        (task.startYear === year || task.endYear === year) &&
        ((task.startMonth === monthIndex &&
          task.startDay >= getDaysInMonth(prevMonth(), year) - firstDay) ||
          task.startMonth === monthIndex + 1 ||
          (task.startMonth === monthIndex + 2 &&
            task.startDay <= 42 - daysInMonth - firstDay))
      ) {
        if (mode !== "week") {
          tasks.push(task);
        } else if (isInCurrentWeek(task)) {
          tasks.push(task);
        }
      }
    });
  };

  // Change first day and number of days in month values
  useEffect(() => {
    setfirstDay(getFirstDay());
    setDaysInMonth(getDaysInMonth());
    setExpansions({
      0: "0rem",
      1: "0rem",
      2: "0rem",
      3: "0rem",
      4: "0rem",
      5: "0rem",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year, monthIndex]);

  // Start updates
  useEffect(() => {
    // Update calendar to current month on start
    updateMonth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getStartDay = (task) => {
    let startDay = task.startDay;

    // Task is from previous month
    if (task.startMonth === monthIndex) {
      const daysInPrevMonth = getDaysInMonth(prevMonth(), year);
      startDay = daysInPrevMonth - (daysInPrevMonth - firstDay) - firstDay;
      // Task is from next month
    } else if (task.startMonth === monthIndex + 2) {
      startDay = task.startDay + getDaysInMonth();
    }

    return startDay;
  };

  // Calculate left margin on a task
  const getMarginLeft = (task) => {
    if (!task) return;
    const multiplier = (getStartDay(task) + firstDay - 1) % 7;

    return `calc(100% / 7 * ${multiplier})`;
  };

  // Calculate top margin on a task
  const getMarginTop = (task, i) => {
    if (!task) return;
    let oneTileMargin = "87.5vh / 6";
    let skippedTileAmount = Math.floor((firstDay + getStartDay(task) - 1) / 7);
    let positionMargin = `${getTaskPosition(task, i)} * ${
      mode === "month" ? "2.8em" : "6.2vh"
    }`;
    let skippedTilesAdd = 0;

    Object.entries(expansions).forEach(([key, val]) => {
      if (key < skippedTileAmount) skippedTilesAdd += parseInt(val);
    });

    if (mode === "week") return `calc(${positionMargin})`;

    return `calc(${oneTileMargin} * ${skippedTileAmount} + ${positionMargin} + ${skippedTilesAdd}rem)`;
  };

  const renderTask = (task, i) => {
    let borderRadius = null;
    let backgroundColor = "#4bc0fb";
    let opacity = 1;
    let rgbCode = "255, 255, 255,";

    const pos = getTaskPosition(task, i);

    // Change bg color and opacity if it is not from current month
    if (task.endMonth != monthIndex + 1 || task.startMonth != monthIndex + 1) {
      backgroundColor = "#ededef";
      opacity = 0.3;
      rgbCode = "0, 0, 0, ";

      if (pos > 1) return null;
    }

    if (task.isRemainder && mode === "month") opacity = 1;

    // Change the border radius if it expands into other week
    if (task.expandsBackward && task.expandsForward) borderRadius = "0 0 0 0";
    else if (task.expandsBackward) borderRadius = "0 0.5em 0.5em 0";
    else if (task.expandsForward) borderRadius = "0.5em 0 0 0.5em";

    const addonMargin = parseFloat(
      expansions[getWeekIndex(task.startDay, task.startMonth - 1)]
    );

    if (mode === "month" && pos > 1 && addonMargin < (pos - 1) * expansionAdd)
      return null;

    if (mode === "week") {
      if (!isInCurrentWeek(task)) return null;
    }

    return (
      <div
        className={styles.task}
        key={i}
        style={{
          color: `rgba(${rgbCode} ${opacity})`,
          backgroundColor: backgroundColor,
          borderRadius: `${borderRadius != null ? borderRadius : "0.5em"}`,
          width: `calc(100% / 7 * ${task.endDay - task.startDay})`,
          marginTop: getMarginTop(task, i),
          marginLeft: getMarginLeft(task),
        }}
      >
        <h5>{task.title}</h5>
        <h6>{task.description}</h6>
      </div>
    );
  };

  const generateTask = (task) => {
    const width = task.endDay - task.startDay;
    const leftOffset = (task.startDay + firstDay - 1) % 7;

    // Check if the task expands beyond current month
    if (
      task.endMonth > monthIndex + 1 &&
      task.endDay - 1 + getDaysInMonth() + getFirstDay() > 42
    ) {
      return [
        {
          ...task,
          endDay: 43 - getDaysInMonth() - getFirstDay(),
          expandsForward: true,
        },
      ];
    }

    if (width + leftOffset > 7) {
      const newEndDay = task.startDay + (7 - leftOffset);

      const newTask = {
        ...task,
        endDay: newEndDay,
        expandsForward: true,
      };

      const remainderTask = {
        ...task,
        startDay: newEndDay,
        isRemainder: true,
        expandsBackward: true,
        title: task.title,
      };

      if (remainderTask.endDay - remainderTask.startDay <= 0) return [newTask];

      return [newTask, ...generateTask(remainderTask)];
    }

    return [
      {
        ...task,
        expandsForward: false,
      },
    ];
  };

  const renderTasks = () => {
    updateTasks();

    let newTasks = tasks.map((task) => {
      return generateTask(task);
    });

    newTasks = flatten(newTasks);

    let nonRemainderTasks = [];
    let remainderTasks = [];

    newTasks.forEach((task) => {
      if (task.isRemainder) remainderTasks.push(task);
      else nonRemainderTasks.push(task);
    });

    tasks = nonRemainderTasks.concat(remainderTasks);

    return tasks.map((task, i) => {
      return renderTask(task, i);
    });
  };

  const getCurrentWeekDay = (i) => {
    const date = day;
    const dayInWeek = new Date(year, monthIndex, day).getDay();

    const lastMonthDays = new Date(year, monthIndex, 0).getDate();
    const currMonthDays = new Date(year, monthIndex + 1, 0).getDate();

    if (i < dayInWeek) {
      const result = date - dayInWeek + i;
      if (result <= 0) {
        return lastMonthDays + result;
      } else if (result > currMonthDays) {
        return result - currMonthDays;
      }
      return result;
    } else {
      const result = date + (i - dayInWeek);
      if (result <= 0) {
        return lastMonthDays + result;
      } else if (result > currMonthDays) {
        return result - currMonthDays;
      }
      return result;
    }
  };

  return (
    <div
      className={styles.cal}
      style={{ backgroundColor: bgColor }}
      onWheel={(event) => {
        if (event.nativeEvent.wheelDelta > 0) {
          setDirection(-1);
          setUpdateDate(updateDate + 1);
          setScrollUp(0);
        } else {
          setDirection(1);
          setUpdateDate(updateDate + 1);
          setScrollDown(0);
        }
      }}
    >
      <CalendarNavbar
        update={updateDate}
        direction={direction}
        dateCallback={(data) => {
          setYear(data.year);
          setMonthIndex(data.monthIndex);
          setWeek(data.week);
          setDay(data.day);
        }}
        switchCallback={(active) => setMode(active)}
      />
      <div className={styles.content}>
        <div
          className={styles.weekdays}
          style={{
            color: fontColor,
          }}
        >
          {["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"].map((day, i) => (
            <p
              style={{ borderRight: `1px solid rgba(${borderColor} 0.2)` }}
              key={i}
            >
              {day}
              {mode === "week" && (
                <span
                  style={
                    getCurrentWeekDay(i) === today.getDate() &&
                    monthIndex === today.getMonth() &&
                    year === today.getFullYear()
                      ? {
                          backgroundColor: fontColor,
                          color: bgColor,
                        }
                      : {
                          opacity:
                            (getCurrentWeekDay(i) > 7 && week === 0) ||
                            (getCurrentWeekDay(i) < 7 && week > 2)
                              ? "0.3"
                              : "1",
                        }
                  }
                >
                  {getCurrentWeekDay(i)}
                </span>
              )}
            </p>
          ))}
        </div>
        <div
          className={styles.month}
          style={{
            gridTemplateRows:
              mode === "month"
                ? `calc(14.5vh + ${expansions[0]}) calc(14.5vh + ${expansions[1]}) calc(14.5vh + ${expansions[2]}) calc(14.5vh + ${expansions[3]}) calc(14.5vh + ${expansions[4]}) calc(14.5vh + ${expansions[5]})`
                : "repeat(14, 6.2vh)",
          }}
        >
          {month}
          <div
            className={styles.tasks}
            style={{ marginTop: mode === "month" ? "1.9rem" : "0.7rem" }}
          >
            {renderTasks()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
