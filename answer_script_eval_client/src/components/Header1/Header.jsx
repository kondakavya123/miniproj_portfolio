import "./Header.css";
//import React from 'react';
import { Menu } from 'antd';
import { Layout } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { userLogout } from "../../redux/actions/auth";
import { ADMIN } from "../../constants/constants";
 

const Header = () => {
  const dispatch = useDispatch();
  const userRole = useSelector((state) => state.auth.userRole);
  const isUserAuthenticated = useSelector((state) => state.auth.isUserAuthenticated);
  const userDetail = useSelector((state) => state.auth.userDetail);

  const collegeInfo = (
    <div className="college-info-wrapper">
      <div className="demo-logo" />
      <div className="college-info">
        <p className="college-name">Jyoti Nivas College Autonomous</p>
        <p className="college-postgraduate">Post Graduate Center</p>
        <p className="college-location"> Bengaluru, India</p>
      </div>
      
      <div className="college-loc"> ANSWER SCRIPT EVALUATION</div>
  
      {/* Feedback Notification */}
    
      <div className="action-buttons">
        {isUserAuthenticated && userRole === ADMIN && (
          <Link to="/AdminDashboard">
            <button className="home-button" >Home</button>
          </Link>
        )}

        {isUserAuthenticated && 
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <button className="logout-button" onClick={() => dispatch(userLogout())}>Logout</button>
        <div style={{ margin: '10px' }}>{userRole} | {userDetail.firstName}</div>
      </div>
        }
      
      </div>
    </div>
  );

  return (
    <div>
      <Layout> 
        {collegeInfo} 
      
        <Menu mode="horizontal"  style={{marginTop:'10px',  width: '100%' }}  />    
                
      </Layout> 
    </div>
  ); 

};


export default Header;