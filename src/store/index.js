import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as homeReducer} from '../components/Home/store';

const reducer = combineReducers({
    home: homeReducer
});

const getStore = () => {
    return createStore(reducer, applyMiddleware(thunk));
}
export default getStore;
