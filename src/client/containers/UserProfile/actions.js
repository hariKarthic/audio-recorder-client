import axios from 'axios';
import {browserHistory} from 'react-router';
import {clearStorage} from './../App/actions';
import { USER_PROFILE_API } from './../../appConstants';
import {
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAILURE,
  INVALIDATE_USER_PROFILE
} from './constants';

export const requestUserProfile = () => {
  return {
    type: USER_PROFILE_REQUEST,
  };
};

export const successUserProfile = (res) => {
  return {
    type: USER_PROFILE_SUCCESS,
    res,
  };
};

export const failureUserProfile = (res) => {
  return {
    type: USER_PROFILE_FAILURE,
    res,
  };
};

export const invalidateUserProfile = () => {
  return {
    type: INVALIDATE_USER_PROFILE
  };
};

const getUserProfileAPI = ()=> {
  return axios({
    method: 'get',
    url: USER_PROFILE_API
  });
};

export const getUserProfile = () => {
  return (dispatch) => {
    dispatch(requestUserProfile());
    getUserProfileAPI().then((res) => {
      if (res.data.success === true) {
        dispatch(successUserProfile(res));
      }

    }).catch((err) => {
      dispatch(failureUserProfile());
      clearStorage('token');
      browserHistory.push('/login');
      console.warn('Error while logging in.', err);
    });
  };
};