import React from "react";

// import CalendarHeatmap from "react-calendar-heatmap";
// import { Tooltip} from 'react-tooltip'
//import { githubdata} from "./GithubData";
import Tooltip from '@uiw/react-tooltip';
import HeatMap from '@uiw/react-heat-map';

import UserContext from './UserContext.js';

import "./Github.css";

function Heatmap() {
  const user = React.useContext(UserContext).value;
  const userID = user.id;

  const [attendance, setAttendance] = React.useState([]);
  const [dataFetched, setDataFetched] = React.useState(false);

  const getAttendance = async () => {
    const options = {
      mode: 'cors',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'userID': userID,
      }),
    }
    //const response = await fetch('http://localhost:3600/get-attendance-batched', options);
    const response = await fetch('http://18.223.107.181:3600/get-attendance-batched', options);
    const result = await response.json();
    setAttendance(result); 
    setDataFetched(true);
  }

  React.useEffect(() => {
    getAttendance(); 
  }, []);
  
  console.log("dsfksjdfs");
  for (let i in attendance) {
    console.log(attendance[i]);
  }
 
  if (dataFetched) {
    const today = new Date();
    return (
      <div>
        {/* <HeatMap
          startDate={shiftDate(today, -365)}
          values={attendance}
          width = {600}
          weekLabels={['', '', '', '', '', '', '']}
          rectSize={30}
          // classForValue={(value) => {
          //   if (!value) {
          //     return "color-empty";
          //   }
          //   return `${value.count}` < 5
          //     ? `color-github-${value.count}`
          //     : `color-github-5`;
          // }}

          rectRender={(props, data) => {
            console.log("github");
            return (
              <Tooltip placement="top" content={`count: ${data.count || 0}`}>
                <rect {...props} />
              </Tooltip>
            );
          }}
        /> */}
      <HeatMap
        value={attendance}
        weekLabels={['', '', '', '', '', '', '']}
        startDate={new Date('2022/12/31')}
        // endDate = {new Date ()}
        width = "99%"
        height = {250}
        rectSize={25}
        rectRender={(props, data) => {
          return (
            <Tooltip placement="top" content={`Classes attended ${data.date}: ${data.count || 0}`}>
              <rect {...props} />
            </Tooltip>
          );
        }}
      />
    </div>
    );
  }

return (<div>Loading...</div>)
}

          // tooltipDataAttrs={(value) => {
          //   if (value.date === null) return null;
          //   return {
          //     "data-tip": `${
          //       value.count
          //     } classes attended on {${value.date.toString().slice(4, 15)}`
          //   };
          // }}


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
