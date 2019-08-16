import {
  FETCH_SMURF_DATA_START, 
  FETCH_SMURF_DATA_SUCCESS,  
  FETCH_SMURF_DATA_FAILURE,
  NEW_SMURF_ADDED,
  TOGGLE_SMURFS
} from '../actions';

const initialState = {
    smurfs: [],
    isLoading: false,
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
      case NEW_SMURF_ADDED:
        return {
          ...state,
          isLoading: false,
          smurfs: [...state.smurfs, action.payload],
          error: ''
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