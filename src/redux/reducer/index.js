import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

//import fetchData from './fetch-reducer.js';
import Detail from '../../component/detail/detail_reducer.js';
import Header from '../../component/header/header_reducer.js';
import List from '../../component/list/list_reducer.js';
import Search from '../../component/search/search_reducer.js';

export default combineReducers({
	Detail,//所有的 reducer 都放在这里
	Header,
	List,
	Search,
    routing: routerReducer
});



