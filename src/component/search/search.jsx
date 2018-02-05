import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchPosts, saveScrollTop} from './search_action.js';
import DateTool from 'utilspath/date-format.js';
import Eat from '../animation/eat.jsx';
import './search.less';


@connect(state => {return {
	searchData:state.Search.searchData,
	top: state.Search.top,
	isFetching: state.Search.isFetching,
	param: state.Search.param,
	dataMore: state.Search.dataMore
}},{fetchPosts, saveScrollTop})
export default class Search extends Component{
	constructor(props){
		super(props)
	}

	static serverRender(store, query, headers) {
		return fetchPosts({PageIndex:1,key:''}, headers)(store.dispatch)
	}

	componentWillUnmount() {
		window.onscroll = null
		var top = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset
		this.props.saveScrollTop(top)
	}

    componentDidMount(){
    	let _self = this
    	if(_self.props.top)window.scrollTo(0, _self.props.top)

		window.onscroll = (e) => { 
            if (!_self.props.dataMore || _self.props.isFetching) return
            let alltop = (document.body.scrollTop || document.documentElement.scrollTop) + window.innerHeight + 200
            if (alltop > document.body.scrollHeight) {
            	let PageIndex = _self.props.searchData && _self.props.searchData.PageIndex ? ++ _self.props.searchData.PageIndex : 1
                _self.pullBlogData({PageIndex : PageIndex, key : this.refs.keyname.value})
            }
        }
        !_self.props.searchData && _self.pullBlogData({PageIndex: 1, key: ''})
    }

	pullBlogData(param){
		this.props.fetchPosts(param)
	}

	Query(){
		this.searchValue = this.refs.keyname.value
		this.pullBlogData({PageIndex: 1, key: this.refs.keyname.value})
	}

	userChange(e){
		if(this.refs.keyname.value != this.searchValue)this.Query()
	}

	userKeyup(e){
		if(e.keyCode === 13)this.Query();
	}

	render(){
		const {searchData, isFetching, dataMore, param} = this.props

		if(!searchData) return null

		return (
			<div className = "searchbox">
				<div className = "head" >
					<div className = "searchtext" >搜索更懂你！</div>
					<div className="searchinfo">
						<input type = "text" 
						name = "key" 
						onKeyUp = {this.userKeyup.bind(this)} 
						onChange = {this.userChange.bind(this)} 
						value = {param && param.key ? param.key : ''}
						className ="keytext" 
						ref = "keyname" />
						<i className = "so" ></i>
						<i className = "del" ></i>
						<div className = "searchbtn" onClick = {this.Query.bind(this)} >搜索</div>
					</div>
				</div>
				<div className = "listbox">
					<ul className = "list" >
					{
						(searchData && searchData.BlogWorkList && searchData.BlogWorkList.length > 0) && 
							searchData.BlogWorkList.map(item => {
								return 	<li key = {item.ID} className = "item" >
										<Link to={'/detail/' + item.ID} className = "clickarea">
											<div className = "contenthead">
												<div className = "title">{item.Title}</div>
												<div className = "tag">分类:{item.SortName}</div>
											</div>
											<p className = "content">{item.Content}</p>
											<div className = "information">
												<span className = "time">浏览:{item.PageViewTotal}</span>
												<span className = "author">{DateTool.ChangeDateFormat(item.UpdateTime)}</span>
											</div>
										</Link>
									</li>
						})
					}	
					</ul>
					{
						dataMore ?  <Eat/> : <div className = "bottominfo" >--- 我是有底线的 ---</div>
					}
				</div>
			</div>
	    )
	}
} 






