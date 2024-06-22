
import React, { useState } from 'react';
import { Button, Input, Space, Upload } from 'antd';
// import { MinusCircleOutlined, FolderAddOutlined } from '@ant-design/icons';
import './Studentform.css';




const Studentform = () => {
  const [questions, setQuestions] = useState([{ id: 1 }]);


  // const addQuestion = () => {
  //   setQuestions([...questions, { id: questions.length + 1 }]);
  // };


  // const removeQuestion = (id) => {
  //   setQuestions(questions.filter((q) => q.id !== id));
  // };
 


  const Studentform = {
    beforeUpload: () => false,
  };


  // const handleSubmit = () => {
  //   // Add your submit logic here
  // };
  // const handleCancel = () => {
  //   // Add your cancel logic here
    
  // };
  const onViewClick = () => {
    // Add your cancel logic here
    setQuestions([...questions, { id: questions.length + 1 }]);// delete this line
  };


  return (
    <div className="upload-container">
      <h2 className="title">STUDENT LIST (MCA 1ST SEM)  </h2>
      <Space direction="vertical" style={{ width: '100%' }}>
        
       
        {questions.map((question) => (
          <div key={question.id} className="question-container">
            <Input placeholder="Student name " />
            <Input placeholder="Reg No." />
            <Button type="primary" onClick={() => onViewClick()}>
        Answerscript 
            </Button>
          </div>
        ))}
        <Space style={{ width: '100%' }}>
          <Upload {...Studentform}>
          </Upload>
        </Space>
        <Space direction="horizontal" style={{ justifyContent: 'center', width: '100%' }}>
          
        </Space>
      </Space>
    </div>
  );
};


export default Studentform;
