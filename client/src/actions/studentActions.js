import axios from 'axios';
import { GET_STUDENTS, ADD_STUDENT, DELETE_STUDENT, STUDENTS_LOADING ,SELECTED_STUDENT } from './types';

export const getStudents = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get('/api/students').then(res =>
    dispatch({
      type: GET_STUDENTS,
      payload: res.data
    })
  );
};

export const addStudent = item => dispatch => {
  axios.post('/api/students', item).then(res =>
    dispatch({
      type: ADD_STUDENT,
      payload: res.data
    })
  );
};

export const selectedStudent = id => dispatch => {
  dispatch({
    type: SELECTED_STUDENT,
    payload: id
  })
};

export const deleteItem = id => dispatch => {
  axios.delete(`/api/students/${id}`).then(res =>
    dispatch({
      type: DELETE_STUDENT,
      payload: id
    })
  );
};

export const setItemsLoading = () => {
  return {
    type: STUDENTS_LOADING
  };
};


