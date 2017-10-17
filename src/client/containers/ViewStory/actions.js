import axios from 'axios';
import * as constants from './constants';
import {GET_STORY_API} from './../../appConstants';
export const viewStoryRequest = () => {
  return {
    type: constants.VIEW_STORY_REQUEST,
  };
};

export const viewStorySuccess = (res) => {
  return {
    type: constants.VIEW_STORY_SUCCESS,
    res,
  };
};

export const viewStoryFailure = (res) => {
  return {
    type: constants.VIEW_STORY_FAILURE,
    res,
  };
};
export const invalidateviewStory = () => {
  return {
    type: constants.INVALIDATE_VIEW_STORY
  };
};


export const viewStoryAPI = ({userId, storyId}) => {
  return axios({
    method: 'get',
    url: GET_STORY_API,
    params:{userId, storyId}
  });
};

export const viewStory = (params)=> {
  return (dispatch)=>{
    dispatch(viewStoryRequest());
    viewStoryAPI(params).then((res) => {
      if (res.data.success === true) {
        dispatch(viewStorySuccess(res));
      }

    }).catch((err) => {
      dispatch(viewStoryFailure(err));
      console.warn('Error while fetching the story.', err);
    });
  }
};

