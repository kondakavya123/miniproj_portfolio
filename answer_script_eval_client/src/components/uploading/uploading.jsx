import React, { useState } from 'react';
import { Button, Col, Form, Input, InputNumber, Row, Space, Upload, message } from 'antd';
import { PlusOutlined, MinusCircleOutlined, UploadOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './uploading.css';
import { ACCESS_TOKEN } from '../../constants/constants';
import { saveAnswerScriptAndQuestions } from '../../redux/actions/studentform';
const { TextArea } = Input;


const Uploading = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const scheduledExamAndStudents = location?.state?.scheduledExamAndStudents;
  const [snsScriptUploadIds, setAnsScriptUploadIds] = useState([]);

  const onFinish = (values) => {
    if(snsScriptUploadIds.length === 0) {
      message.error("Please upload atleast one student's answer script");
      return;
    }
    if(values.questions == undefined ||values.questions.length === 0) {
      message.error("Please add atleast one question and its other details.");
      return;
    }

    values.ansScriptUploadIds = snsScriptUploadIds;
    values.courseId = scheduledExamAndStudents?.course?.id;
    values.programmeId = scheduledExamAndStudents?.programmes[0]?.id;
    values.semester = scheduledExamAndStudents?.semester;
    
    dispatch(saveAnswerScriptAndQuestions(values));
    setAnsScriptUploadIds([]);
  };


  const beforeUpload = (file) => {
    const isPdf = file.type === "application/pdf";
    if (!isPdf) {
      message.error("You can only upload pdf file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isPdf && isLt2M;
  };

  const handleUpload = (info) => {
    if (info.file.status === "uploading") {
      console.log("*********uploading=>>>>>>>>");
      //   dispatch(showLoader(true));
      return;
    }
    if (info.file.status === "done") {
      if(info.file && info.file.response && info.file.response.data && info.file.response.data.id) {
        setAnsScriptUploadIds(oldArray => [...oldArray, info.file.response.data.id] );
      }
      //   dispatch(showLoader(false));
      message.success(info.file.response.message);
      console.log("*********=>>>>>>>>uploading finished.");
      return;
    }
    if (info.file.status === "error") {
      message.error(info.file.response.message);  
      console.log("*********=>>>>>>>>uploading error.");
      //   dispatch(showLoader(false));
      return;
    }
  };

  return(
    <>
      <div className="upload-container"> 
        <h1>UPLOADING SCRIPTS</h1>
        <div>Course: {scheduledExamAndStudents?.course?.subjectName}</div>
        <div>Exam Date: {scheduledExamAndStudents?.monAndYear}</div>
        <div>Sem: {scheduledExamAndStudents?.semester}</div>
        <div>Programme: {scheduledExamAndStudents?.programmes[0]?.programmeName}</div>
      </div>
    
      <Form
        layout="vertical"
        // name="dynamic_form_nest_item"
        onFinish={onFinish}
        style={{
          maxWidth: 900,
        }}
        // autoComplete="off"
      >
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item
              className="form-field"
              name="totalMarks"
              label="Total Marks"
              rules={[
                {
                  required: true,
                  message: "Please Enter total marks.",
                },
              ]}
            >
              <InputNumber className='form-field-full-width' placeholder="Total Marks" />
            </Form.Item>
          </Col>
        </Row>
        <Form.List name="questions">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space
                  key={key}
                  style={{
                    // display: 'flex',
                    marginBottom: 8,
                  }}
                  // align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name={[name, 'question_no']}
                    rules={[
                      {
                        required: true,
                        message: 'Missing question no',
                      },
                    ]}
                  >
                    <InputNumber className='form-field-full-width' placeholder="Question no" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'maxMarks']}
                    rules={[
                      {
                        required: true,
                        message: 'Missing max marks',
                      },
                    ]}
                  >
                    <InputNumber className='form-field-full-width' placeholder="Max marks" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'question_desc']}
                    rules={[
                      {
                        required: true,
                        message: 'Missing question description',
                      },
                    ]}
                  >
                    <Input placeholder="Question descriptions" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'masterAns']}
                    rules={[
                      {
                        required: true,
                        message: 'Missing answer text',
                      },
                    ]}
                  >
                    <TextArea rows={4} placeholder="Master Answer" />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  Add more questions
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item
              className="form-item"
              name="answerScriptPdfs"
              label="Upload Student's Answer Script"
              rules={[
                {
                  required: true,
                  message: "Please upload Student's Answer Script."
                },
              ]}
            >
              <div className="container">
                <Upload
                  onChange={handleUpload} 
                  beforeUpload={beforeUpload} 
                  className="directory-upload" 
                  action={`${import.meta.env.REACT_APP_API_URL}/api/upload/directory-upload`}
                  headers={{ "Authorization": localStorage.getItem(ACCESS_TOKEN)}}
                  directory
                >
                  <Button icon={<UploadOutlined />}>Upload Answer Script</Button>
                </Upload>
              </div>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Link to="/coordinator">Back</Link>
    </>
  );
};

export default Uploading;

// totalMarks for paper, maxMarks for each question 
