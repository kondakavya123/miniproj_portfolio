import React, { useState } from "react";
import { Button, Col, Form, Row, Upload, message } from "antd";
import { ACCESS_TOKEN, buttonItemLayout } from "../../constants/constants";
import { UploadOutlined } from "@ant-design/icons";

const DummyFileUpload = () => {
  const [form] = Form.useForm();
  const [snsScriptUploadIds, setAnsScriptUploadIds] = useState([]);


  const onFinish = (values) => {
    values.ansScriptUploadIds = snsScriptUploadIds;
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
    

  return (
    <Form
      form={form}
      layout="vertical"
      name="nest-messages"
      onFinish={onFinish}
    >
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

      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Form.Item className="submit-form-btn" {...buttonItemLayout}>
            <Button
              type="primary"
              htmlType="AddInternship"
            >
                      SUBMIT
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default DummyFileUpload;
