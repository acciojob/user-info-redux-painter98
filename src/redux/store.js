import {createStore} from 'redux';
import upDate from './reducers/updateReducer';

const store = createStore(upDate);
export default store;