import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Spin } from 'antd';
import { useSelector } from "react-redux";
import { ADMIN, COORDINATOR, FACULTY } from "../constants/constants";
import Admin from "../components/admin/Admin";
import NotFound from "../components/NotFound/NotFound";
import Faculty from "../components/facultyDashboard/Faculty";
import Home from "../components/Home/Home";
import Login from "../components/login/login";
import AdminDashboard from "../components/AdminDashboard/AdminDashboard";
import ScheduleExam from "../components/scheduleExam/ScheduleExam";
import Analyze from "../components/AdminDashboard/Analyze";
import Viewresults from "../components/AdminDashboard/Viewresults";
import Coordinator from "../components/coordinatorDashboard/coordinator";
import Studentform from "../components/Studentform/Studentform";
import Evalu from "../components/initEVAL/Initeval";
import DummyFileUpload from "../components/DummyFileUpload/DummyFileUpload";
import Uploading from "../components/uploading/uploading";
import MyTable from "../components/initiateform/form";
import FacultyDashboard from "../components/facultyDashboard/Faculty";
import StudentScriptAns from "../components/script/StudentScriptAns";


function ApplicationRouter() {
  const user = useSelector((state) => state.auth.userDetail);
  const userRole = useSelector((state) => state.auth.userRole);
  const isUserAuthenticated = useSelector((state) => state.auth.isUserAuthenticated);
  return (
    <Suspense fallback={<Spin spinning></Spin>}>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/fileup' element={<DummyFileUpload />} />
        <Route path='/FacultyDashboard' element={<FacultyDashboard />} />
        
        <Route path='/Scheduling' element={<ScheduleExam />} />
        <Route path='/Analyze' element={<Analyze />} />
        <Route path='/Viewresults' element={<Viewresults />} />
        

        
        {/* <Route path='/script' element={<MyForm />} /> */}
        <Route path='/stlist' element={<Studentform />} />
        <Route path='/mytable' element={<MyTable />} />

        {user && isUserAuthenticated && (
          <>
            <Route path="/admin" element={ userRole && (userRole == ADMIN) ? (<Admin />) : (<NotFound />)} />
            <Route path='/AdminDashboard' element={userRole && (userRole == ADMIN) ? (<AdminDashboard />) : (<NotFound />)} />
            <Route path='/Evaluatingscripts' element={userRole && (userRole == ADMIN) ? (<Evalu />) : (<NotFound />)} />

            <Route path='/coordinator' element={userRole && (userRole == COORDINATOR) ? (<Coordinator />) : (<NotFound />)} />
            <Route path='/upload' element={userRole && (userRole == COORDINATOR) ? (<Uploading />) : (<NotFound />)} />

            <Route path="/faculty" element={ userRole && (userRole == FACULTY) ? (<Faculty />) : (<NotFound />)} />
            <Route path="/student-ans-marks" element={ userRole && (userRole == FACULTY) ? (<StudentScriptAns />) : (<NotFound />)} />
            
          </>
        )}

        <Route path='*' element={<Login />} />
      </Routes>
    </Suspense>
  );
}

export default ApplicationRouter;