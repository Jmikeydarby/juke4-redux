import { createStore } from 'redux';
import Reducer  from './reducers/root-reducer';

const store  = createStore(Reducer);

export default store;
