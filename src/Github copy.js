import React from "react";

import CalendarHeatmap from "react-calendar-heatmap";
import { Tooltip as ReactTooltip } from 'react-tooltip'
//import { githubdata} from "./GithubData";

import UserContext from './UserContext.js';

import "./Github.css";

function Heatmap() {
  const user = React.useContext(UserContext).value;
  const userID = user.id;

   const githubdata = [];



  // React.useEffect(() => {
  //   const allDatesAttendance = async()=>{
  //     const today = new Date();
  //     const all_dates = [];

  //     for (let i = 0; i < 365; i++) {
  //       const date = today;
  //       date.setDate(today.getDate() - i);
  //       const sqlDate = formatSQLDate(date);
  //       const attendance = await getAttendance(sqlDate);
  //       all_dates.push(attendance);
  //     }

  //     setGithubData(all_dates.reverse());
  //     setDataFetched(true);
  //   }

  //   allDatesAttendance();
  // }, [userID]); // Run the effect whenever userID changes

  // if (!dataFetched) {
  //   return <div>Loading...</div>; // Placeholder while data is being fetched
  // }

  // // Data fetching is complete, proceed to render the heatmap
  // const heatmap = githubdata;

  const today = new Date();
  // const data = getRange(365).map((index) => {
  //   return {
  //     date: shiftDate(today, -index),
  //     count: heatmap[index]
  //   };
  // });





  return (
    <div>
      <CalendarHeatmap
        startDate={shiftDate(today, -365)}
        endDate={today}
        values={{date:'2023-01-01', count:2}}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          return `${value.count}` < 5
            ? `color-github-${value.count}`
            : `color-github-5`;
        }}

        tooltipDataAttrs={(value) => {
          return {
            "data-tip": `${
              value.count
            } submissions on ${value.date.toString().slice(4, 15)}`
          };
        }}
        showWeekdayLabels={false}
      />
      <ReactTooltip />
    </div>
  );
}

function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

function getRange(count) {
  return Array.from({ length: count }, (_, i) => i);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default Heatmap;
