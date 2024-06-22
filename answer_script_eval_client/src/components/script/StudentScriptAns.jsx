import React from 'react';
import { Button, Input, Row, Col, Form, Space, Table, Typography } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { buttonItemLayout } from '../../constants/constants';
import { saveComments, verifyStudentMarks } from '../../redux/actions/coordinatorActions';
const { Text } = Typography;


const StudentScriptAns = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const location = useLocation();
  const record = location.state.record;

  // const isLoading = useSelector((state) => state.coordinatorReducer.isLoading);

  const verifyMarks = () => {
    dispatch(verifyStudentMarks(record?.id));
  };

  const onFinish = (values) => {
    dispatch(saveComments(values, record?.id));
  };

  const studentsAnsScript = useSelector((state) => state.coordinatorReducer.studentsAnsScript);
  const studentsMarks = studentsAnsScript[0].answers;
  const marksColumn = [
    {
      title: "Question no.",
      key: "question_no",
      dataIndex: ["question", "question_no"],
      width: "20%",
    },
    {
      title: "Maximum marks",
      key: "maxMarks",
      dataIndex: ["question", "maxMarks"],
      width: "20%",
    },
    
    {
      title: "Marks Obtained (%)",
      key: "obtainedMarks",
      dataIndex: "obtainedMarks",
      width: "10%",
    },
  ];

  return(
    <>
      <Space direction="vertical">
        <div><Text><Text strong>Programme: </Text> {record?.programme?.programmeName}</Text></div>
        <div><Text><Text strong>Semester: </Text> {record?.semester}</Text></div>
      </Space>
      <Space direction="vertical">
        <div><Text><Text strong>course: </Text> {record?.course?.subjectName}</Text></div>
        <div><Text><Text strong>Student Name: </Text> {record?.student?.firstName}</Text></div>
      </Space>
      <Space direction="vertical">
        <Text><Text strong>Student Reg. No: </Text> {record?.student?.regNumber}</Text>
      </Space>
      <Space direction="vertical">
        <Text><Text strong>Is Verified: </Text> {record?.isVerified ? 'Yes' : 'No'}</Text>
        <Text><Text strong>Is Sent to ReEval: </Text> {record?.isSentForReEval ? 'Yes' : 'No'}</Text>
      </Space>
      <Space direction="vertical">
        <Text><Text strong>Comment: </Text> {record?.comment}</Text>
      </Space>

      <Text strong>Answer Script: </Text>
      <object  data={record?.ansDocument?.docUrl} type="application/pdf" width="40%" height="400">
        <p><a target="_blank" href={record?.ansDocument?.docUrl} rel="noreferrer">{record?.ansDocument?.fileName}</a></p>
      </object>

      <div>
        <Text strong>Marks Section: </Text>
        <div className='bottom-table'>
          {window.innerWidth < 500 && (
            <div className='bottom-table'>
              <Table
                bordered
                dataSource={studentsMarks}
                columns={marksColumn}
                size='middle'
                pagination={{ pageSize: 25 }}
                scroll={{ x: '400vw', y: 300}}
              />
            </div>
          )}
          {window.innerWidth > 500 && (
            <div className='bottom-table'>
              <Table
                bordered
                dataSource={studentsMarks}
                columns={marksColumn}
                size='middle'
                pagination={{ pageSize: 25 }}
                scroll={{ x: '60vw', y: 900}}
              />
            </div>
          )}
        </div>
      </div>

      <Form
        form={form}
        layout="vertical"
        name="nest-messages"
        onFinish={onFinish}
      >
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item
              initialValue={record?.comment}
              className="form-item"
              name="comment"
              label="Comment"
              rules={[
                {
                  required: true,
                  message: "Please provide Comment."
                },
              ]}
            >
              <Input type="text" placeholder="Comments" />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item className="submit-form-btn" {...buttonItemLayout}>
              <Button
                type="primary"
                htmlType="saveComment"
              >
                Save Comment
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Button type="primary" htmlType="verify" onClick={() => verifyMarks()}>Verify</Button>

      <Link to="/faculty">Back</Link>
            
            
    </>
  );
};

export default StudentScriptAns;
