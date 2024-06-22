export const ACCESS_TOKEN = "accessToken";
export const SUCCESS = "SUCCESS";
export const LOGIN_ERR = "Login failed, please input correct credentials";
export const LOGOUT_ERR = "Logout failed!";
export const LOGIN_TOKEN_EXPIRED_ERR = "Login token expired, please login again";
export const FILE_2_MB_ERR_MSG = "File must be smaller than 2MB.";
export const SUCCES_APP_HEADING = "Application Success";
export const ERROR_APP_HEADING = "Application Error";

export const ADMIN = "admin";
export const COORDINATOR = "coordinator";
export const FACULTY = "faculty";
export const PROFILE_IMG = "PROFILE_IMG";
export const POSTER_IMG = "POSTER_IMG";
export const SYLLABUS_PDF = "SYLLABUS_PDF";

export const NA = "NA";

export const HHMM = "HH:mm";
export const YYYYMMDD = "YYYY-MM-DD";
export const MMMMYYYY = "MMMM YYYY";

export const httpHeaderConfig = {
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("accessToken")
  }
};

export const layout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};

export   const onPreview = async (file) => {
  if(file.url && file.url.includes(".pdf")) {
    window.open(file.url);
    return;
  }
  let source = file.url;
  if (!source) {
    source = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file.originFileObj);
      reader.onload = () => resolve(reader.result);
    });
  }
  const image = new Image();
  image.src = source;
  const imgWindow = window.open(source);
  imgWindow.document.write(image.outerHTML);
};

export const buttonItemLayout = { wrapperCol: {span: 14, offset: 0} };
export const INVALID_TOKEN_SMS = "Invalid token.";
