

import React, { useState } from 'react';
import "./student.css";
import { Chart as ChartJs } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

const Navbar = ({ togglePanel }) => (
  <div className="navbar">
    <nav className="navcontent">
      <ul className="first">
        <button className="slide" onClick={togglePanel}><i className="far fa-2x fa-solid fa-bars"></i></button>
      </ul>
      <div className="search">
        <input type="text" className="searchbar" placeholder="Search here"/>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <ul className="sec">
        <li><i className="fa-solid fa-bell"></i></li>
        <li><button className="profile"><i className="fa-solid fa-user"></i></button></li>
      </ul>
    </nav>
  </div>
);

const Panel = ({ isHidden, togglePanelAdd , isHiddenAdd}) => (
  console.log("isHiddenAdd:", isHiddenAdd),
  <div className={`panel ${isHidden ? 'collapsed' : ''}`}> 
    <div className="panelcontent">
      <ul>
        <li>
          <h2 onClick={togglePanelAdd}>Student</h2>
          <div className='line'></div>
          <div className={`panel-add ${isHiddenAdd ? 'collapsedAdd' : ''}`}>
            <ul>
              <li><h2>Add</h2> <i className="fa-solid fa-plus"></i></li>
              <li><h2>Edit </h2><i className="fa-solid fa-minus"></i></li>
              <li><h2>Delete </h2><i className="fa-solid fa-circle-xmark"></i></li>
            </ul>
          </div>
        </li>
        <li>
          <h2 onClick={togglePanelAdd}>Faculty</h2>
          <div className='line'></div>
          <div className={`panel-add ${isHiddenAdd ? 'collapsedAdd' : ''}`}>
            <ul>
              <li><h2>Add</h2> <i className="fa-solid fa-plus"></i></li>
              <li><h2>Edit </h2><i className="fa-solid fa-minus"></i></li>
              <li><h2>Delete </h2><i className="fa-solid fa-circle-xmark"></i></li>
            </ul>
          </div>
          </li>
        <li><h2>Course</h2><div className='line'></div></li>
        <li><h2>Timetable</h2><div className='line'></div></li>
        <li><h2>Department</h2><div className='line'></div></li>
        <li><h2>Events</h2><div className='line'></div></li>
        <li><h2>Resources</h2><div className='line'></div></li>
      </ul>
    </div>
  </div>
);

const Card = ({ title, icon, count, percentage }) => (
  <div className="card">
    <div className='card-info-1'>
      <h2>{title}<span className="separator"></span><span>Time</span></h2>
      <i className="fa-solid fa-ellipsis"></i>
    </div>
    <div className='card-icon'>
      <div className='card-icon-box'><i className={`fa-solid ${icon}`}></i></div>
      <div className='card-info'>
        <h2>{count}</h2>
        <p><span>{percentage}%</span> Increase</p>
      </div>
    </div>
  </div>
);

const RecentActivity = ({ time, description }) => (
  <div className='recent-info'>
    <div className='recent-time'>
      <h2>{time}</h2>
      <p>min ago</p>
    </div>
    <div className='recent-separator'>
      <div className='r-circle'></div>
      <div className='r-line'></div>
    </div>
    <div className='r-info'>
      <p>{description}<span> Click here</span> to register.</p>
    </div>
  </div>
);

export default function Student() {
  const [isHidden, setIsHidden] = useState(false);
  const [isHiddenAdd, setIsHiddenAdd] = useState(false);
  // Static data for now
  const students = 134;
  const faculty = 134;
  const devices = 4;
  const activities = [
    { time: 59, description: "hello everyone" },
    { time: 30, description: "Reminder: Meeting at 2 PM" },
    { time: 10, description: "New course available" }
  ];

  const togglePanel = () => {
    setIsHidden(prevState => !prevState);
  };

  const togglePanelAdd = () => {
    setIsHiddenAdd(prevState => !prevState);
  };

  const barData = {
    labels: ["A", "B", "C"],
    datasets: [
      {
        label: "attendence",
        data: [200, 300, 400],
        backgroundColor: 'rgba(0, 132, 255, 1)',
        borderColor: 'rgba(18, 114, 204, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='container'>
      <Navbar togglePanel={togglePanel} />
      <div className="dashboard">
        <Panel isHidden={isHidden} isHiddenAdd={isHiddenAdd} togglePanelAdd={togglePanelAdd}/>
        <div className={`Main ${isHidden ? 'expanded':''}`}>
          <div className='FirstRow'>
            <div className="cards">
              <Card title="No of Students" icon="fa-book-open-reader" count={students} percentage={8} />
              <Card title="No of Faculty" icon="fa-chalkboard-user" count={faculty} percentage={8} />
              <Card title="Not Working Devices" icon="fa-desktop" count={devices} percentage={8} />
            </div>
          </div>
          <div className='SecRow'>
            <div className='Graph'>
              <div className='graph-box'>
              <Bar data={barData} />
              </div>
            </div>
            <div className='recent'>
              <div className='recent-box'>
                <div className='card-info-1'>
                  <h2>Recent Activities<span className="separator"></span><span>Upcoming</span></h2>
                  <i className="fa-solid fa-ellipsis"></i>
                </div>
                {activities.map((activity, index) => (
                  <RecentActivity key={index} time={activity.time} description={activity.description} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
