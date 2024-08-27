// import React, { useState } from 'react';
// import "./student.css"

// export default function Student() {

//     const [isHidden, setIsHidden] = useState(false);

//   // Function to toggle the panel's visibility
//   const togglePanel = () => {
//     setIsHidden(prevState => !prevState);
//   };

//   return (
//     <div className='container'>
      
//         <div className="navbar">
//           <nav className="navcontent">
//             <ul className="first">
//               <button className="slide" onClick={togglePanel}><i className="far fa-2x fa-solid fa-bars"></i></button>
//             </ul>

//             <div className="search">
//                 <input type="text" className="searchbar" placeholder="Search here"/>
//                 <i className="fa-solid fa-magnifying-glass"></i>
//             </div>
            
//             <ul className="sec">
//               <li><i class="fa-solid fa-bell"></i></li>
//               <li><button className="profile"><i className="fa-solid fa-user"></i></button></li>
//             </ul>
//           </nav>
//         </div>

//         <div className="dashboard">
//             <div className={`panel ${isHidden ? 'collapsed' : ''}`}> 
//                 <div className="panelcontent">
//                     <ul>
//                         <li>
//                             <h2>Student</h2>
//                             <div className='line'></div>
//                         </li>
//                         <li>
//                             <h2>Faculty</h2>
//                             <div className='line'></div>
//                         </li>
//                         <li>
//                             <h2>Course</h2>
//                             <div className='line'></div>
//                         </li>
//                         <li>
//                             <h2>Timetable</h2>
//                             <div className='line'></div>
//                         </li>
//                         <li>
//                             <h2>Department</h2>
//                             <div className='line'></div>
//                         </li><li>
//                             <h2>Events</h2>
//                             <div className='line'></div>
//                         </li><li>
//                             <h2>Resources</h2>
//                             <div className='line'></div>
//                         </li>
                        
//                     </ul>
//                 </div>
//             </div>
            
//             <div className={`Main ${isHidden ? 'expanded':''}`}>
//                 <div className='FirstRow'>
//                     <div className="cards">
//                         <div className="card">
//                             <div className='card-info-1'><h2>No of Students<span className="separator"></span><span>Time</span></h2>
//                             <i className="fa-solid fa-ellipsis"></i></div>
//                             <div className='card-icon'>
//                                 <div className='card-icon-box'><i className="fa-solid fa-book-open-reader"></i></div>
//                                 <div className='card-info'>
//                                     <h2>134</h2>
//                                     <p><span>8%</span>  Increase</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="card">
//                             <div className='card-info-1'><h2>No of Faculty<span className="separator"></span><span>Time</span></h2>
//                             <i className="fa-solid fa-ellipsis"></i>
//                             </div>
//                             <div className='card-icon'>
//                                 <div className='card-icon-box'><i className="fa-solid fa-chalkboard-user"></i></div>
//                                 <div className='card-info'>
//                                     <h2>134</h2>
//                                     <p><span>8%</span>  Increase</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="card">
//                             <div className='card-info-1'><h2>Not Working Devices</h2>
//                             <i className="fa-solid fa-ellipsis"></i></div>
//                             <div className='card-icon'>
//                                 <div className='card-icon-box'><i className="fa-solid fa-desktop"></i></div>
//                                 <div className='card-info'>
//                                     <h2>4</h2>
//                                     <p><span>8%</span>  Decrease</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className='SecRow'>
//                     <div className='Graph'>

//                     </div>

//                     <div className='recent'>
//                         <div className='recent-box'>
//                             <div className='card-info-1'>
//                                 <h2>Recent Activities<span className="separator"></span><span>Upcoming</span></h2>
//                                 <i className="fa-solid fa-ellipsis"></i>
//                             </div>
//                             <div className='recent-info'>
//                                 <div className='recent-time'>
//                                     <h2>59</h2>
//                                     <p>min ago</p>
//                                 </div>
//                                 <div className='recent-separator'>
//                                     <div className='r-circle'></div>
//                                     <div className='r-line'></div>
//                                 </div>
//                                 <div className='r-info'>
//                                     <p>hello everyone<span> Click here</span> to register.</p>
//                                 </div>
//                             </div>

//                             <div className='recent-info'>
//                                 <div className='recent-time'>
//                                     <h2>59</h2>
//                                     <p>min ago</p>
//                                 </div>
//                                 <div className='recent-separator'>
//                                     <div className='r-circle'></div>
//                                     <div className='r-line'></div>
//                                 </div>
//                                 <div className='r-info'>
//                                     <p>hello everyone<span> Click here</span> to register.</p>
//                                 </div>
//                             </div>

//                             <div className='recent-info'>
//                                 <div className='recent-time'>
//                                     <h2>59</h2>
//                                     <p>min ago</p>
//                                 </div>
//                                 <div className='recent-separator'>
//                                     <div className='r-circle'></div>
//                                     <div className='r-line'></div>
//                                 </div>
//                                 <div className='r-info'>
//                                     <p>hello everyone<span> Click here</span> to register. asknflia jkasfbajfn</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
     
//     </div>
//   );
// }



import React, { useState } from 'react';
import "./student.css";

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

const Panel = ({ isHidden }) => (
  <div className={`panel ${isHidden ? 'collapsed' : ''}`}> 
    <div className="panelcontent">
      <ul>
        <li><h2>Student</h2><div className='line'></div></li>
        <li><h2>Faculty</h2><div className='line'></div></li>
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

  return (
    <div className='container'>
      <Navbar togglePanel={togglePanel} />
      <div className="dashboard">
        <Panel isHidden={isHidden} />
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
              {/* Graph Component Here */}
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
