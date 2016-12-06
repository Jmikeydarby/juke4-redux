import { SET_LYRICS } from '../constants';

const initialState = { text: '' };


const Reducer = (prevState = initialState, action) => {
  let newState;
  switch (action.type){
    case SET_LYRICS:
      return Object.assign({}, prevState, { text: action.lyric });
    default:
      return prevState;
  }
}

export default Reducer;
