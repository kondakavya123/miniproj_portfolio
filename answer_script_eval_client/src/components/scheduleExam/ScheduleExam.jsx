 

import React, { useState, useEffect } from 'react';
import { Form, Select, Button, Row, Col, DatePicker } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import './ScheduleExam.css';

import { SEMESTER_OPTIONS } from '../../Constants';
import { getAllCourse, getAllFaculty, getAllProgramme, getAllStudents, saveScheduleExam } from '../../redux/actions/scheduleExam';
import { YYYYMMDD } from '../../constants/constants';

const { Option } = Select;

const ScheduleExam = () => {
  const dispatch = useDispatch();

  //const [supplyStudents, setSupplyStudents] = useState([{ regNo: '', data: '' }]);
  const [selectedPrograms, setSelectedPrograms] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState([]);

  const programmes = useSelector((state) => state.programme.programmes);
  const courses = useSelector((state) => state.course.courses);
  const faculties = useSelector((state) => state.faculty.faculties);
  const students = useSelector((state) => state.student.students);

  const finishSubmit = (val) => {
    val.selectedDate = val.selectedDate.format(YYYYMMDD);
    dispatch(saveScheduleExam(val));
  };

  useEffect(() => {
    dispatch(getAllProgramme());
    dispatch(getAllCourse());
    dispatch(getAllFaculty());
    dispatch(getAllStudents());
  }, [dispatch]);

  return (
    <div className="schedule-exam-wrapper">
      <Form onFinish={finishSubmit}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Select Date" name="selectedDate">
              <DatePicker />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item label="Program" name="program">
              <Select mode="multiple" value={selectedPrograms} onChange={(values) => setSelectedPrograms(values)}>
                {programmes?.map((program) => (
                  <Select.Option key={program.id} value={program.id}>{program.programmeName}</Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item label="Semester" name="semester">
              <Select>
                {SEMESTER_OPTIONS.map((option) => (
                  <Option key={option} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item label="Course" name="course">
              <Select>
                {courses?.map((Course) => (
                  <Select.Option key={Course.id} value={Course.id}>{Course.subjectName}</Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item label="Faculty" name="faculty">
              <Select mode="multiple" value={selectedFaculty} onChange={(values) => setSelectedFaculty(values)}>
                {faculties?.map((Faculty) => (
                  <Select.Option key={Faculty.id} value={Faculty.id}>
                    {Faculty.firstName}</Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item label="Regular Students" name="regularstudents">
              <Select mode="multiple">
                {students?.map((Student) => (
                  <Select.Option key={Student.id} value={Student.id}>{Student.firstName}</Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item label="Supplementary Students" name="supplestudents">
              <Select mode="multiple">
                {students?.map((Student) => (
                  <Select.Option key={Student.id} value={Student.id}>{Student.firstName}</Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Schedule
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default ScheduleExam;
