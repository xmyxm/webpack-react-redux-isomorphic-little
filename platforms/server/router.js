import Header from '../../src/component/header/header.jsx';
import Home from '../../src/component/home/home.jsx';
import Email from '../../src/component/email/email.jsx';
import Me from '../../src/component/me/me.jsx';
import List from '../../src/component/list/list.jsx';
import Search from '../../src/component/search/search.jsx';
import Detail from '../../src/component/detail/detail.jsx';


export default {
	'/home' : [Header,Home],
	'/list' : [Header,List],
	'/detail' : [Header,Detail],
	'/search' : [Header,Search],
	'/email' : [Header,Email],
	'/me' : [Header,Me]
}






