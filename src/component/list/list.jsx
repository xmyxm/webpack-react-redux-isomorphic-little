import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {fetchPosts, saveScrollTop} from './list_action.js';
import {connect} from 'react-redux';
import DateTool from 'utilspath/date-format.js';
import Eat from '../animation/eat.jsx';
import './list.less';


@connect(state => {return {
	listData: state.List.listData,
	isFetching: state.List.isFetching,
	top: state.List.top,
	dataMore: state.List.dataMore
}},{fetchPosts, saveScrollTop})
export default class List extends Component{
	constructor(props){
		super(props)
	}

	static serverRender(store, query, headers) {
		return fetchPosts({ PageIndex: 1 }, headers)(store.dispatch);
	}

	componentWillUnmount() {
		window.onscroll = null;
		var top = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset
		this.props.saveScrollTop(top)
	}

    componentDidMount(){
    	let _self = this
		if(_self.props.top)window.scrollTo(0, _self.props.top)

		window.onscroll = (e) => { 
            if (!_self.props.dataMore || _self.props.isFetching) return
            //一个元素的 scrollTop 值是这个元素的顶部到它的最顶部可见内容（的顶部）的距离的度量。
            //当一个元素的内容没有产生垂直方向的滚动条，那么它的 scrollTop 值为0。

            //innerHeight 浏览器窗口的视口（viewport）高度（以像素为单位），如果存在水平滚动条，则包括它。
            let alltop = (document.body.scrollTop || document.documentElement.scrollTop) + window.innerHeight + 200
            //scrollHeight 这个只读属性是一个元素内容高度的度量，包括由于溢出导致的视图中不可见内容。
            //没有垂直滚动条的情况下，scrollHeight值与元素视图填充所有内容所需要的最小值clientHeight相同。
            //包括元素的padding，但不包括元素的border和margin.
	        if (alltop > document.body.scrollHeight) {
	        	//console.log('滚动高度加视口高度:'+ alltop + ' 内容区域的实际高度:' + document.body.scrollHeight + '  dataMore:' + _self.props.dataMore + '  isFetching:' + _self.props.isFetching)	
	            let PageIndex = _self.props.listData && _self.props.listData.PageIndex ? ++ _self.props.listData.PageIndex : 1
	            _self.props.fetchPosts({PageIndex:  PageIndex})
	        }
        }
        //再次切回列表页不用拉取数据
        !_self.props.listData  && _self.props.fetchPosts({PageIndex: 1})
    }

	render(){
		const {listData, isFetching, dataMore} = this.props

		return (
			<div className = "listbox">
				<ul className = "list" >
				{
					(listData && listData.BlogWorkList && listData.BlogWorkList.length > 0) && 
						listData.BlogWorkList.map(item => {
							return 	<li key = {item.ID} className = "item" >
										<Link to={'/detail/' + item.ID} className = "clickarea">
											<div className = "contenthead">
												<div className = "title">{decodeURIComponent(item.Title)}</div>
												<div className = "tag">分类:{item.SortName}</div>
											</div>
											<p className = "content">{decodeURIComponent(item.Content)}</p>
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
	    )
	}
} 






























