import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import lyricReducer from './reducers/lyrics-reducer';

//const middleware = applyMiddleware(createLogger(), thunkMiddleware);

const store  = createStore(lyricReducer, applyMiddleware(createLogger(), thunkMiddleware));

export default store;
