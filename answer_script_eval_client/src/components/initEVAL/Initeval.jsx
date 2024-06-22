import { Button, Card, Spin, Divider, Form, Col, Row, Select, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADMIN, buttonItemLayout } from '../../constants/constants';
import { getAllProgrammes } from '../../redux/actions/initeval1';
import { SEMESTER_OPTIONS } from '../../Constants';
import { evaluate, extract, getScheduledExam, getStudentAnsScriptByProgSemCourse } from '../../redux/actions/coordinatorActions';

const Evalu = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const userRole = useSelector((state) => state.auth.userRole);
  const isLoading = useSelector((state) => state.coordinatorReducer.isLoading);
  const programmes = useSelector((state) => state.initeval1Reducer.programmes);
  const scheduledExamsAndStudents = useSelector((state) => state.coordinatorReducer.scheduledExamsAndStudents);
  const studentsAnsScript = useSelector((state) => state.coordinatorReducer.studentsAnsScript);

  const [ selectedProgramme,  setSelectedProgramme] = useState(undefined); 
  const [ selectedSemester, setSelectedSemester ] = useState(undefined);



  const onProgSelect = (selectedProgrammeId) => {
    setSelectedProgramme(selectedProgrammeId);
    form.setFieldsValue({
      studentId: null
    });

    if(selectedProgrammeId && selectedSemester) {
      dispatch(getScheduledExam(selectedProgrammeId, selectedSemester));
    }
  };

  const onSemesterSelect = (selectedSemester) => {
    setSelectedSemester(selectedSemester);
    form.setFieldsValue({
      studentId: null
    });
    if(selectedProgramme && selectedSemester) {
      dispatch(getScheduledExam(selectedProgramme, selectedSemester));
    }
  };

  const onFinish = (values) => {
    dispatch(getStudentAnsScriptByProgSemCourse(values));
    // form.resetFields();
  };

  useEffect(() => {
    dispatch(getAllProgrammes());
  }, [dispatch]);

  const handleButtonClick = (action, record) => {
    if(action == 'Extract') {
      dispatch(extract(record?.id));
    } else if(action == 'Evaluate') {
      dispatch(evaluate(record?.id));
    }
  };

  const studentAnsScriptColumn = [
    {
      title: "Student Name",
      key: "student",
      dataIndex: ["student", "firstName"],
      width: "10%",
    },
    {
      title: "Reg. No.",
      key: "student",
      dataIndex: ["student", "regNumber"],
      width: "10%",
    },
    {
      title: "Answer Script",
      key: "ansDocument",
      dataIndex: "ansDocument",
      width: "20%",
      render: (_, record) => {
        return (
          <>
            <a href={record?.ansDocument?.docUrl} target='_blank' download={record?.ansDocument?.docUrl} rel="noreferrer">{record?.ansDocument?.fileName}</a>
          </>
        );
      },
    },
    {
      title: "Extract Text",
      key: "pdfToText",
      dataIndex: "pdfToText",
      width: "5%",
      render: (_, record) => {
        return (
          <>
            {/* <a href={record?.ansDocument?.docUrl}>{record?.ansDocument?.fileName}</a> */}
            <Button type="primary" onClick={() => handleButtonClick('Extract', record)}>Extract</Button>
          </>
        );
      },
    },
    {
      title: "Evaluate",
      key: "evaluate",
      dataIndex: "evaluate",
      width: "5%",
      render: (_, record) => {
        return (
          <>
            {/* <a href={record?.ansDocument?.docUrl}>{record?.ansDocument?.fileName}</a> */}
            <Button type="primary" onClick={() => handleButtonClick('Evaluate', record)}>Evaluate</Button>
          </>
        );
      },
    },
  ];

  return(
    <>
      <div className="content-container">
        <Spin size="large" spinning={isLoading}>
          <div>
            <Card className="card-main-form" title="Initiate Evaluation">
              {userRole && (userRole == ADMIN) &&
                <Form form={form} layout="vertical" onFinish={onFinish}>
                  <Row>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                      <Form.Item
                        className="form-item"
                        name="programmeId"
                        label="Programme"
                        rules={[
                          {
                            required: true,
                            message: "Please select Programme",
                          },
                        ]}
                      >
                        <Select placeholder="Select Programme" onSelect={onProgSelect}>
                          {programmes?.map((ev) => (
                            <Select.Option key={ev.id} value={ev.id}>
                              {ev.programmeName}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                      <Form.Item
                        className="form-item"
                        name="semester"
                        label="Semester"
                        rules={[
                          {
                            required: true,
                            message: "Please select Semester",
                          },
                        ]}
                      >
                        <Select onSelect={onSemesterSelect} onChange={(value) => setSelectedSemester(value)} placeholder="Select Semester">
                          {SEMESTER_OPTIONS.map((option) => (
                            <Select.Option key={option} value={option}>
                              {option}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                      <Form.Item
                        className="form-item"
                        name="courseId"
                        label="Course"
                        rules={[
                          {
                            required: true,
                            message: "Please select Course",
                          },
                        ]}
                      >
                        <Select placeholder="Select Course">
                          {scheduledExamsAndStudents?.map((ev) => (
                            <Select.Option key={ev.id} value={ev?.course?.id}>
                              {ev.course?.subjectName}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Divider />
                  <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                      <Form.Item className="submit-form-btn" {...buttonItemLayout}>
                        <Button type="primary" htmlType="ViewStudents">
                          View Students
                        </Button>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              }
            </Card>
          </div>
          <div className='bottom-table'>
            {window.innerWidth < 500 && (
              <div className='bottom-table'>
                <Table
                  bordered
                  dataSource={studentsAnsScript}
                  columns={studentAnsScriptColumn}
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
                  dataSource={studentsAnsScript}
                  columns={studentAnsScriptColumn}
                  size='middle'
                  pagination={{ pageSize: 25 }}
                  scroll={{ x: '60vw', y: 900}}
                />
              </div>
            )}
          </div>
        </Spin>
      </div>
    </>
  );
};

export default Evalu;