import {
  FETCH_MUSIC_DATA_ERROR,
  FETCH_MUSIC_DATA_STARTED,
  FETCH_MUSIC_DATA_COMPLETED,
} from '../actionConstants';
import {consoleLog} from '../../lib';
import {GET_MUSIC_LIST} from '../../config/ApiDetails';

function fetchDataError() {
  return {
    type: FETCH_MUSIC_DATA_ERROR,
  };
}

function fetchDataStarted() {
  return {
    type: FETCH_MUSIC_DATA_STARTED,
  };
}

function fetchDataCompleted(data) {
  return {
    type: FETCH_MUSIC_DATA_COMPLETED,
    payload: data,
  };
}

export function setInitialData() {
  return (dispatch) => {
    dispatch(fetchDataStarted());
    fetch(GET_MUSIC_LIST)
      .then((response) => response.json())
      .then((data) => {
        consoleLog(data);
        dispatch(fetchDataCompleted(data));
      })
      .catch((error) => {
        consoleLog('Error while getting music list ' + error);
        dispatch(fetchDataError());
      });
  };
}

export function updateInitialData() {
  return (dispatch) => {
    fetch(GET_MUSIC_LIST)
      .then((response) => response.json())
      .then((data) => {
        consoleLog(data);
        dispatch(fetchDataCompleted(data));
      })
      .catch((error) => {
        consoleLog('Error while getting music list ' + error);
        dispatch(fetchDataError());
      });
  };
}
