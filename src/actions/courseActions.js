import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSucces(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses}
}


export function loadCourses() {
  return function (dispatch) {
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSucces(courses));
    }).catch(error => {
      throw (error);
    });
  }
}
