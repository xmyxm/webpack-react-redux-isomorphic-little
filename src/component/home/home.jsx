import React,{Component} from 'react';
//import LazyLoad from 'react-lazyload';
import {Link} from 'react-router-dom';
import imglink from '../../icons/shanghai.jpg'
import './home.less';

export default class Home extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<Link to = "/list" className = "homebox">
				<div className = "homeimg">
					<img className="imgicon" src={imglink} />
				</div>
				<h1 className = "title">这是一个关于前端技术分享的博客</h1>
				<p className = "classes">CSS样式,Dom元素</p>
				<p className = "classes">JavaScript相关知识</p>
				<p className = "classes">Hybrid使用</p>
				<p className = "classes">Nodejs相关技术</p>
				<p className = "classes">浏览器相关技术</p>
				<p className = "classes">React生态圈</p>
				<p className = "classes">ES6-7相关</p>
				<div className = "gobtn">阅览</div>
			</Link>
	    )
	}
} 


