import {
  FETCH_SMURF_DATA_START, 
  FETCH_SMURF_DATA_SUCCESS,  
  FETCH_SMURF_DATA_FAILURE,
  NEW_SMURF_ADDED,
  NEW_SMURF_ADDED_SUCCESS,
  NEW_SMURF_ADDED_FAILURE,
  TOGGLE_SMURFS
} from '../actions';

const initialState = {
    smurfs: [],
    isLoading: false,
    isEditing: false,
    error: ''
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_SMURF_DATA_START :
        return {
          ...state,
          isLoading: !state.isLoading,
          error: ''
        }
      case FETCH_SMURF_DATA_SUCCESS:
        return {
          ...state,
          isLoading: true,
          smurfs: action.payload,
          error: ''
        }
      case FETCH_SMURF_DATA_FAILURE :
        return {
          ...state,
          error: action.payload
        }
      case NEW_SMURF_ADDED :
        return {
          ...state,
          isLoading: false,
          error: '',
        }
      case NEW_SMURF_ADDED_SUCCESS:
        return {
          ...state,
          isLoading: false,
          smurfs: [...state.smurfs, action.payload],
          error: ''
        }
        case NEW_SMURF_ADDED_FAILURE :
            return {
              ...state,
              error: action.payload
            }
      case TOGGLE_SMURFS:
        return {
          ...state,
          isLoading: !state.isLoading
        }
      default:
        return state;
    }
  };