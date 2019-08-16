import axios from 'axios';

export const FETCH_SMURF_DATA_START = 'FETCH_SMURF_DATA_START';
export const FETCH_SMURF_DATA_SUCCESS = 'FETCH_SMURF_DATA_SUCCESS';
export const FETCH_SMURF_DATA_FAILURE = 'FETCH_SMURF_DATA_FAILURE';

export const NEW_SMURF_ADDED = 'NEW_SMURF_ADDED';
export const NEW_SMURF_ADDED_SUCCESS = 'NEW_SMURF_ADDED_SUCCESS';
export const NEW_SMURF_ADDED_FAILURE = 'NEW_SMURF_ADDED_FAILURE';

export const TOGGLE_SMURFS = 'TOGGLE_SMURFS'

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_SMURF_DATA_START });
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        // res.data.data
        console.log(res);
        dispatch({ type: FETCH_SMURF_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_SMURF_DATA_FAILURE, payload: err.response });
      });
  };
};

export const postData = newSmurf => {
    return dispatch =>{
        dispatch({ type: NEW_SMURF_ADDED})
        axios
        .post('http://localhost:3333/smurfs',newSmurf)
        .then(res => {
            const smurf = { type: NEW_SMURF_ADDED_SUCCESS, payload: res.data }
            dispatch(smurf)
        })
        .catch(err => {
            dispatch({ type: NEW_SMURF_ADDED_FAILURE, payload: err.data})
        })
    }  
}

export const toggleVillagers = () => {
    console.log('action creator was invoked')
    return {
      type: TOGGLE_SMURFS
    };
  }

//   export const editVillagers = () => {
//       return dispatch => {
//           dispatch => ({type: EDIT_SMURF})
//       }
//   }
