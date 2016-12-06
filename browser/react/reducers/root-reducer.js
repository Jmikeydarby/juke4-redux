import { SET_LYRICS } from '../constants';

const initialState = { text: '' };


export default const Reducer = (prevState = initialState, action) => {
  let newState;
  switch (action.type){
    case SET_LYRICS:
      return { ...prevState,  text: action.lyric };
    default:
      return prevState;
  }
}
