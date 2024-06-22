// import { Link } from "react-router-dom";
// //import React from 'react';
// import { Button } from 'antd';

// const containerStyle = {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   height: '100vh', // Set the height of the container to the full viewport height
// };

// const buttonContainerStyle = {
//   position: 'relative',
//   top: '20px',
//   left: '31%',
//   transform: 'translateX(-50%)',
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center', 
//   gap: '10px',
//   padding: '20px', // Optional: Add padding for better visual appearance
//   borderRadius: '10px', 
// };

// const rowStyle = {
//   display: 'flex',
//   justifyContent: 'space-between', // Space buttons evenly in the row
//   alignItems: 'center', 
//   width: '100%', // Ensure the row takes the full width of its container
// };

// const buttonStyle = {
//   background: '#5D3587',
//   color: 'white',
//   padding: '80px',
//   border: 'none',
//   borderRadius: '5px',
//   width: '300px', // Set a fixed width for all buttons
//   height: '100', // Set a fixed height for all buttons
//   margin: '30px', // Adjust the margin for a larger gap between buttons
//   fontSize: '16px',
// };

// const AdminDashboard = () => {

//   return (
//     <div>
//       <div style={containerStyle}>
//         <div style={buttonContainerStyle}>
//           <div style={rowStyle}>
//             <Link to="/Schedulingexam">
//               <Button style={buttonStyle}>
//             Scheduling Exam
//               </Button>
//             </Link>

//             <Link to="/Evaluatingscripts">
//               <Button style={buttonStyle}>
//             Evaluating Scripts
//               </Button>
//             </Link>
//           </div>
//           <div style={rowStyle}>
//             <Link to="/Viewresults">
//               <Button style={buttonStyle} >
//             View Results
//               </Button>
//             </Link>
//             <Link to="/Analyze">
//               <Button style={buttonStyle}>
//             Analyze
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

// AdminDashboard.js

import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'antd';
import './AdminDashboard.css'; // Import the CSS file

const AdminDashboard = () => {
  return (
    <div>
      <div className="card-container">
        <div className="container">
          <div className="button-container">
            <div className="row">
              <Link to="/Scheduling">
                <Button className="button">
                  Scheduling Exam
                </Button>
              </Link>
              <Link to="/Evaluatingscripts">
                <Button className="button">
                  Evaluating Scripts
                </Button>
              </Link>
            </div>
            <div className="row">
              <Link to="/Viewresults">
                <Button className="button">
                  View Results
                </Button>
              </Link>
              <Link to="/Analyze">
                <Button className="button">
                  Analyze
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
