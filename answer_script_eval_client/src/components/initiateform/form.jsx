import React, { useState } from 'react';
import { Table, Button, Space } from 'antd';


const MyTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const handleButtonClick = (action, record) => {
    // Implement logic based on the action and record
    console.log(`Action: ${action}, Record:`, record);
  };

  const rowSelection = {
    onChange: (selectedKeys) => {
      setSelectedRowKeys(selectedKeys);
    },
    selectedRowKeys,
  };


  const columns = [
    {
      title: 'Student Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Reg No',
      dataIndex: 'regNo',
      key: 'regNo',
    },
    {
      title: 'Answer Script Evaluation',
      dataIndex: 'answerScriptEvaluation',
      key: 'answerScriptEvaluation',
    },
    {
      title: 'Pdf to Text',
      dataIndex: 'pdfToText',
      key: 'pdfToText',
      render: (text, record) => (
        <Space size="middle">
          {record.pdfToText === 'Extract' && (
            <Button
              type="primary"
              style={{ backgroundColor: '#5D3587', borderColor: '#5D3587' }}
              onClick={() => handleButtonClick('Extract', record)}
            >
            Extract
            </Button>
          )}
        </Space>
      ),
    },
    {
      title: 'Evaluate',
      dataIndex: 'evaluate',
      key: 'evaluate',
      render: (text, record) => (
        <Space size="middle">
          {record.evaluate === 'Evaluate' && (
            <Button
              type="primary"
              style={{ backgroundColor: '#5D3587', borderColor: '#5D3587' }}
              onClick={() => handleButtonClick('Evaluate', record)}
            >
            Evaluate
            </Button>
          )}
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'Riya',
      regNo: '22MCA01',
      answerScriptEvaluation: '22MCA01.pdf',
      pdfToText: 'Extract',
      evaluate: 'Evaluate',
    },
    {
      key: '2',
      name: 'Simran',
      regNo: '22MCA02',
      answerScriptEvaluation: '22MCA02.pdf',
      pdfToText: 'Extract',
      evaluate: 'Evaluate',
    },
    {
      key: '3',
      name: 'Kiran',
      regNo: '22MCA03',
      answerScriptEvaluation: '22MCA03.pdf',
      pdfToText: 'Extract',
      evaluate: 'Evaluate',
    },
    {
      key: '4',
      name: 'Karan',
      regNo: '22MCA04',
      answerScriptEvaluation: '22MCA04.pdf',
      pdfToText: 'Extract',
      evaluate: 'Evaluate',
    },
    {
      key: '5',
      name: 'Rohan',
      regNo: '22MCA05',
      answerScriptEvaluation: '22MCA05.pdf',
      pdfToText: 'Extract',
      evaluate: 'Evaluate',
    },
  // Add more rows as needed
  ];

  return (
    <div style={{ background: '#E5E1DA', color: '#7D0A0A', height: '100vh', overflow: 'auto' }}>
      <Table
        columns={columns}
        dataSource={data}
        rowSelection={rowSelection}
        pagination={false}
        scroll={{ y: 'calc(100vh - 160px)' }} // Adjust the height as needed
      />
    </div>
  );
};

export default MyTable;


