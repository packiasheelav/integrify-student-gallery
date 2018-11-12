import {
  GET_STUDENTS,
    ADD_STUDENT,
    DELETE_STUDENT,
    STUDENTS_LOADING,
    SELECTED_STUDENT
  } from '../actions/types';
  
  const initialState = {
    students: [ ],
    loading: false,
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_STUDENTS:
        return {
          ...state,
          students: action.payload,
          loading: false
        };
      case DELETE_STUDENT:
        return {
          ...state,
          students: state.students.filter(student => student._id !== action.payload)
        };
      case ADD_STUDENT:
        return {
          ...state,
          students: [action.payload, ...state.students]
        };
      case STUDENTS_LOADING:
        return {
          ...state,
          loading: true
        };
        case SELECTED_STUDENT:
        return {
          ...state,
          students: state.students.filter(student => student._id === action.payload),
        };
      default:
        return state;
    }
}
