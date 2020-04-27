/**
 *  Imports
 */
import {
  FETCH_MUSIC_DATA_ERROR,
  FETCH_MUSIC_DATA_STARTED,
  FETCH_MUSIC_DATA_COMPLETED,
} from '../actionConstants/index';

/** Initial State  */
const INITIAL_STATE = {musicData: [], Loader: false, isError: false};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_MUSIC_DATA_STARTED:
      return {...state, Loader: true, isError: false};
    case FETCH_MUSIC_DATA_COMPLETED:
      return {...state, Loader: false, musicData: action.payload.results};
    case FETCH_MUSIC_DATA_ERROR:
      return {...state, Loader: false, isError: true};
    default:
      return {...state};
  }
}
