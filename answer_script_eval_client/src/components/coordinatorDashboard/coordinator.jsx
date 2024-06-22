//import { connect } from 'react-redux';
import { Select, Card, Divider } from 'antd';
import './coordinator.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SEMESTER_OPTIONS } from '../../Constants';
import { getAllProgrammes } from '../../redux/actions/initeval1';
import { getScheduledExam } from '../../redux/actions/coordinatorActions';

//import { setProgramme, setSemester } from '../../redux/actions/coordinatorActions';

const { Option } = Select;

const Coordinator = () => {
  const dispatch = useDispatch();
  const programmes = useSelector((state) => state.initeval1Reducer.programmes);
  const scheduledExamsAndStudents = useSelector((state) => state.coordinatorReducer.scheduledExamsAndStudents);

  const [ selectedProgramme,  setSelectedProgramme] = useState(undefined); 
  const [ selectedSemester, setSelectedSemester ] = useState(undefined);

  const onProgrammeSelect = (selectedProgrammeId) => {
    setSelectedProgramme(selectedProgrammeId);
    if(selectedProgrammeId && selectedSemester) {
      dispatch(getScheduledExam(selectedProgrammeId, selectedSemester));
    }
  };
  const onSemesterSelect = (selectedSemester) => {
    setSelectedSemester(selectedSemester);
    if(selectedProgramme && selectedSemester) {
      dispatch(getScheduledExam(selectedProgramme, selectedSemester));
    }
  };

  useEffect(() => {
    dispatch(getAllProgrammes());
  }, [dispatch]);

  return (
    <>
      <div className="card-container">
        <Card className="custom-card" title="Co-Ordinator" bordered={true}>
          <div className="dropdown-row">
            <Select placeholder="Select Programme" onSelect={onProgrammeSelect}>
              {programmes?.map((prog) => (
                <Select.Option key={prog.id} value={prog.id}>
                  {prog.programmeName}
                </Select.Option>
              ))}
            </Select>

            <Select onSelect={onSemesterSelect} onChange={(value) => setSelectedSemester(value)} placeholder="Select Semester">
              {SEMESTER_OPTIONS.map((option) => (
                <Option key={option} value={option}>
                  {option}
                </Option>
              ))}
            </Select>
          </div>
          <Divider />
          <div className='sheduled-exam-container'>
            {scheduledExamsAndStudents?.map(se => {
              return <Link key={se.key} to='/upload' state={{ scheduledExamAndStudents: se }}>
                <Card
                  size="small"
                  title={se?.course?.subjectName}
                  extra={se?.monAndYear}
                  style={{
                    width: 300,
                    margin: 10
                  }}
                >
                  <p>Programme: {se?.programmes[0]?.programmeName}</p>
                  <p>SEM: {se?.semester}</p>
                </Card>
              </Link>;
            })}
          </div>
        </Card>
      </div>
    </>
  );
};



export default Coordinator;