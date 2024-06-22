import { notification } from "antd";
import {
  ERROR_APP_HEADING,
  ADMIN,
  COORDINATOR,
  FACULTY,
} from "../../constants/constants";
import * as type from "../types";

const initialState = {
  isLoading: false,
  error: null,
  userDetail: undefined,
  selectedFacultyUserForEdit: undefined,
  isAuthenticated: false,
  actionFromInsideApp: false,
  modalVisibleState: false,
  confirmEditProductLoadingState: false,
  userRole: undefined,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
  case type.USER_LOGIN_REQ:
    return {
      ...state,
      isLoading: true,
    };
  case type.USER_LOGIN_SUCC:
    if (action?.userDetail?.role?.role === ADMIN) {
      action.navigate("/AdminDashboard");
    } else if (action?.userDetail?.role?.role === COORDINATOR) {
      action.navigate("/coordinator");
    } else if (action?.userDetail?.role?.role === FACULTY) {
      action.navigate("/faculty");
    } else {
      action.navigate("/home");
    }

    // action.navigate("/dashboard");
    // window.location.reload();
    // window.location.replace(window.location.pathname);

    // if(window.location.pathname === "/login" || window.location.pathname === "/") {
    //   window.location.replace("/dashboard");
    // } 
    // else {
    //   window.location.reload();
    // }
    return {
      ...state,
      isLoading: false,
      userDetail: action.userDetail,
      userRole: action.userDetail && action.userDetail.role && action.userDetail.role.role,
      isUserAuthenticated: action.isUserAuthenticated,
      actionFromInsideApp: true,
    };
  case type.USER_LOGIN_ERR:
    notification.error({
      message: ERROR_APP_HEADING,
      description: action.message,
    });
    return {
      ...state,
      isLoading: false,
      error: action.message,
    };

  case type.GET_CURRENT_USER_REQ:
    return {
      ...state,
      isLoading: true,
    };

  case type.GET_CURRENT_USER_SUCC:
    return {
      ...state,
      isLoading: false,
      userDetail: action.userDetail,
      userRole: action.userDetail && action.userDetail.role && action.userDetail.role.role,
      isUserAuthenticated: action.isUserAuthenticated,
      actionFromInsideApp: true,
    };
    
  case type.GET_CURRENT_USER_ERR:
    // window.location.replace("http://localhost:3000/login");
    return {
      ...state,
      isLoading: false,
      error: action.message,
    };

  case type.USER_LOGOUT_REQ:
    return {
      ...state,
      isLoading: true,
    };
  case type.USER_LOGOUT_SUCC: {
    const port =
        window.location.port === "" ? "" : `:${window.location.port}`;
    const frontendHost = `${window.location.protocol}//${window.location.hostname}${port}`;
    window.location.replace(`${frontendHost}/`);
    return {
      ...state,
      isLoading: false,
      userDetail: action.userDetail,
      isUserAuthenticated: action.isUserAuthenticated,
      actionFromInsideApp: false,
    };
  }
  case type.USER_LOGOUT_ERR:
    return {
      ...state,
      isLoading: false,
      error: action.message,
    };

  default:
    return state;
  }
}
