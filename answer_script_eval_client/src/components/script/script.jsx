// src/components/script/script.jsx
 
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Table } from 'antd';
import PropTypes from 'prop-types';
import { fetchDataRequest } from '../../redux/actions/eval_script';

// eslint-disable-next-line react-refresh/only-export-components
const MyForm = ({ onFinish, onFinishFailed, fetchData, data }) => {
  // Sample data for the table
  const dataSource = [
    { key: '1', col1: 'Maximum Marks', col2: '', col3: '', col4: '', col5: '' },
    { key: '2', col1: 'Marks obtained', col2: '', col3: '', col4: '', col5: '' },
  ];

  const columns = [
    { title: 'Question No', dataIndex: 'col1', key: 'col1' },
    { title: '1', dataIndex: 'col2', key: 'col2' },
    { title: '2', dataIndex: 'col3', key: 'col3' },
    { title: '3', dataIndex: 'col4', key: 'col4' },
    { title: '4', dataIndex: 'col5', key: 'col5' },
  ];

  useEffect(() => {
    fetchDataRequest();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '85vh',
        backgroundColor: '#E5E1DA',
        marginLeft: '20vh',
        marginRight: '20vh',
        marginTop: '1vh',
        width: '100%', // Adjusted width to fill available space
        border: '1px solid #ddd',
        borderRadius: '20px',
        padding: '20px',
        fontFamily: 'Merriweather, serif', // Set the font-family
      }}
    >
      <Form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '70%',
          fontFamily: 'Merriweather, serif', // Set the font-family
        }}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
          name: '',
          Semester: '1', // Add the semester value here
          Course: '',
          'Reg No': '',
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          {/* Display the fetched data in the form */}
          <Form.Item label="Programme" name="name" style={{ width: '30%', marginLeft: '2%' }}>
            <Input disabled value={data?.programme} style={{ backgroundColor: '#FFFFFF' }} />
          </Form.Item>

          <Form.Item label="Semester" name="Semester" style={{ width: '30%' }}>
            <Input disabled value={data?.semester} style={{ backgroundColor: '#FFFFFF' }} />
          </Form.Item>

          <Form.Item label="Course" name="Course" style={{ width: '30%' }}>
            <Input disabled value={data?.course} style={{ backgroundColor: '#FFFFFF' }} />
          </Form.Item>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginLeft: '3%' }}>
          {/* Display the fetched data in the form */}
          <Form.Item label="Reg No" name="Reg No" style={{ width: '30%' }}>
            <Input disabled value={data?.regNo} style={{ backgroundColor: '#FFFFFF' }} />
          </Form.Item>

          {/* Scrollable Text Area */}
          <Form.Item label="Answer Script:" style={{ width: '70%', marginLeft: '5%' }}>
            <Input.TextArea rows={4} />
          </Form.Item>
        </div>

        {/* Marks Section Table */}
        <div style={{ marginRight: '55%', marginLeft: '1%' }}>
          <h2>Marks Section</h2>
          <Table
            dataSource={dataSource}
            columns={columns}
            bordered={true}
            pagination={false}
            style={{ border: '1px solid black', width: '100%' }}
            rowClassName={() => 'table-row'}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '1%' }}>
          {/* Comment Box */}
          <Form.Item label="Comment:" style={{ width: '100%', height: '5%', marginLeft: '2%', marginRight: '21%' }}>
            <Input.TextArea rows={0} />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 6 }} style={{ width: '30%', marginLeft: '6%' }}>
            <Button type="primary" htmlType="verified" style={{ backgroundColor: '#5D3587' }}>
              Verified
            </Button>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 6 }} style={{ width: '30%', marginLeft: '2%' }}>
            <Button type="primary" htmlType="verified" style={{ backgroundColor: '#5D3587' }}>
              Re-evaluate
            </Button>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 6 }} style={{ width: '30%', marginLeft: '2%' }}>
            <Button type="primary" htmlType="save" style={{ backgroundColor: '#5D3587' }}>
              Save
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

MyForm.propTypes = {
  onFinish: PropTypes.func.isRequired,
  onFinishFailed: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired,
  data: PropTypes.object,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchDataRequest()),
});

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps, mapDispatchToProps)(MyForm);
