import React,{Component} from 'react';
import './email.less';

export default class Me extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			 <div className = "linkbox">
				 <ul>
				 	<li className = "item">
				 		<div className = "icon">
				 			<div className = "github"></div><span className = "text">github</span> 
				 		</div>
				 		<a className = "site" href="https://github.com/xmyxm">https://github.com/xmyxm</a>
				 	</li>
				 	<li className = "item">
				 		<div className = "icon">
				 			<div className = "qq"></div><span className = "text">邮箱</span> 
				 		</div>
				 		<a className = "site" href="https://github.com/xmyxm">myco_xmy@qq.com</a>
				 	</li>
				 </ul>
			 </div>
	    )
	}
} 
































