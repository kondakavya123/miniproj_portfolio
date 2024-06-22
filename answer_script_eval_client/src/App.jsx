import React, { useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from 'antd';
const { Content } = Layout;
import { useDispatch } from 'react-redux';
import './App.css';
import ApplicationRouter from './routes/ApplicationRouter';
import { getCurrentLoggedinUser } from './redux/actions/auth';
import Header from './components/Header1/Header';
import Footer from './components/Footer1/Footer';

function App() {
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getCurrentLoggedinUser());
  }, [dispatch]);

  return (
    <>
      <Router>
        <Header />
        <div className='container-wrapper'>
          <Content className= 'route-container'>
            <ApplicationRouter /> 
          </Content>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;