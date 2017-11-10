import { combineReducers } from 'redux';
import userReducer from './userReducer';
import authReducer from './authReducer';
import adminReducer from './adminReducer';

export default combineReducers({
  users: userReducer,
  admins: adminReducer,
  auth: authReducer
});