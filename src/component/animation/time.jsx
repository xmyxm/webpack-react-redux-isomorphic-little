import React,{Component} from 'react';
import './time.less';

export default function Square(){
		return (
            <div className= "flipClock">
					<div className= "flipUnitContainer">
						<div className= "upperCard">
							<span>16</span>
						</div>
						<div className= "lowerCard">
							<span>15</span>
						</div>
						<div className= "flipCard first fold">
							<span>15</span>
						</div>
						<div className= "flipCard second unfold">
							<span>16</span>
						</div>
					</div>
					<div className= "flipUnitContainer">
						<div className= "upperCard">
							<span>00</span>
						</div>
						<div className= "lowerCard">
							<span>59</span>
						</div>
						<div className= "flipCard first unfold">
							<span>00</span>
						</div>
						<div className= "flipCard second fold">
							<span>59</span>
						</div>
					</div>
					<div className= "flipUnitContainer">
						<div className= "upperCard">
							<span>29</span>
						</div>
						<div className= "lowerCard">
							<span>28</span>
						</div>
						<div className= "flipCard first fold">
							<span>28</span>
						</div>
						<div className= "flipCard second unfold">
							<span>29</span>
						</div>
					</div>
				</div>
	    )
} 



// 'use strict';

// function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

// function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// var AnimatedCard = function (_React$Component) {
// 	_inherits(AnimatedCard, _React$Component);

// 	function AnimatedCard() {
// 		_classCallCheck(this, AnimatedCard);

// 		return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
// 	}

// 	AnimatedCard.prototype.render = function render() {
// 		var _props = this.props;
// 		var position = _props.position;
// 		var digit = _props.digit;
// 		var animation = _props.animation;

// 		return React.createElement(
// 			'div',
// 			{ className: 'flipCard ' + position + ' ' + animation },
// 			React.createElement(
// 				'span',
// 				null,
// 				digit
// 			)
// 		);
// 	};

// 	return AnimatedCard;
// }(React.Component);

// var StaticCard = function (_React$Component2) {
// 	_inherits(StaticCard, _React$Component2);

// 	function StaticCard() {
// 		_classCallCheck(this, StaticCard);

// 		return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
// 	}

// 	StaticCard.prototype.render = function render() {
// 		var _props2 = this.props;
// 		var position = _props2.position;
// 		var digit = _props2.digit;

// 		return React.createElement(
// 			'div',
// 			{ className: position },
// 			React.createElement(
// 				'span',
// 				null,
// 				digit
// 			)
// 		);
// 	};

// 	return StaticCard;
// }(React.Component);

// var FlipUnitContainer = function (_React$Component3) {
// 	_inherits(FlipUnitContainer, _React$Component3);

// 	function FlipUnitContainer() {
// 		_classCallCheck(this, FlipUnitContainer);

// 		return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
// 	}

// 	FlipUnitContainer.prototype.render = function render() {
// 		var _props3 = this.props;
// 		var digit = _props3.digit;
// 		var shuffle = _props3.shuffle;
// 		var unit = _props3.unit;

// 		var now = digit;
// 		var before = digit - 1;

// 		// to prevent a negative value
// 		if (unit !== 'hours') {
// 			before = before === -1 ? 59 : before;
// 		} else {
// 			before = before === -1 ? 23 : before;
// 		}

// 		// add zero
// 		if (now < 10) now = '0' + now;
// 		if (before < 10) before = '0' + before;

// 		// shuffle digits
// 		var digit1 = shuffle ? before : now;
// 		var digit2 = !shuffle ? before : now;

// 		// shuffle animations
// 		var animation1 = shuffle ? 'fold' : 'unfold';
// 		var animation2 = !shuffle ? 'fold' : 'unfold';

// 		return React.createElement(
// 			'div',
// 			{ className: 'flipUnitContainer' },
// 			React.createElement(StaticCard, {
// 				position: 'upperCard',
// 				digit: now
// 			}),
// 			React.createElement(StaticCard, {
// 				position: 'lowerCard',
// 				digit: before
// 			}),
// 			React.createElement(AnimatedCard, {
// 				position: 'first',
// 				digit: digit1,
// 				animation: animation1
// 			}),
// 			React.createElement(AnimatedCard, {
// 				position: 'second',
// 				digit: digit2,
// 				animation: animation2
// 			})
// 		);
// 	};

// 	return FlipUnitContainer;
// }(React.Component);

// var FlipClock = function (_React$Component4) {
// 	_inherits(FlipClock, _React$Component4);

// 	function FlipClock(props) {
// 		_classCallCheck(this, FlipClock);

// 		var _this4 = _possibleConstructorReturn(this, _React$Component4.call(this, props));

// 		_this4.state = {
// 			hours: 0,
// 			hoursShuffle: true,
// 			minutes: 0,
// 			minutesShuffle: true,
// 			seconds: 0,
// 			secondsShuffle: true
// 		};
// 		return _this4;
// 	}

// 	FlipClock.prototype.componentDidMount = function componentDidMount() {
// 		var _this5 = this;

// 		this.timerID = setInterval(function () {
// 			return _this5.updateTime();
// 		}, 50);
// 	};

// 	FlipClock.prototype.componentWillUnmount = function componentWillUnmount() {
// 		clearInterval(this.timerID);
// 	};

// 	FlipClock.prototype.updateTime = function updateTime() {
// 		// get new date
// 		var time = new Date();
// 		// set time units
// 		var hours = time.getHours();
// 		var minutes = time.getMinutes();
// 		var seconds = time.getSeconds();
// 		// on hour chanage, update this.state.minutes
// 		if (hours !== this.state.hours) {
// 			var hoursShuffle = !this.state.hoursShuffle;
// 			this.setState({
// 				hours: hours,
// 				hoursShuffle: hoursShuffle
// 			});
// 		}
// 		// on minute chanage, update this.state.minutes
// 		if (minutes !== this.state.minutes) {
// 			var minutesShuffle = !this.state.minutesShuffle;
// 			this.setState({
// 				minutes: minutes,
// 				minutesShuffle: minutesShuffle
// 			});
// 		}
// 		// on second chanage, update this.state.seconds
// 		if (seconds !== this.state.seconds) {
// 			var secondsShuffle = !this.state.secondsShuffle;
// 			this.setState({
// 				seconds: seconds,
// 				secondsShuffle: secondsShuffle
// 			});
// 		}
// 	};

// 	FlipClock.prototype.render = function render() {
// 		var _state = this.state;
// 		var hours = _state.hours;
// 		var minutes = _state.minutes;
// 		var seconds = _state.seconds;
// 		var hoursShuffle = _state.hoursShuffle;
// 		var minutesShuffle = _state.minutesShuffle;
// 		var secondsShuffle = _state.secondsShuffle;

// 		return React.createElement(
// 			'div',
// 			{ className: 'flipClock' },
// 			React.createElement(FlipUnitContainer, {
// 				unit: 'hours',
// 				digit: hours,
// 				shuffle: hoursShuffle
// 			}),
// 			React.createElement(FlipUnitContainer, {
// 				unit: 'minutes',
// 				digit: minutes,
// 				shuffle: minutesShuffle
// 			}),
// 			React.createElement(FlipUnitContainer, {
// 				unit: 'seconds',
// 				digit: seconds,
// 				shuffle: secondsShuffle
// 			})
// 		);
// 	};

// 	return FlipClock;
// }(React.Component);

// var Header = function (_React$Component5) {
// 	_inherits(Header, _React$Component5);

// 	function Header() {
// 		_classCallCheck(this, Header);

// 		return _possibleConstructorReturn(this, _React$Component5.apply(this, arguments));
// 	}

// 	Header.prototype.render = function render() {
// 		return React.createElement(
// 			'header',
// 			null,
// 			React.createElement(
// 				'h1',
// 				null,
// 				' React Flip Clock'
// 			)
// 		);
// 	};

// 	return Header;
// }(React.Component);

// var App = function (_React$Component6) {
// 	_inherits(App, _React$Component6);

// 	function App() {
// 		_classCallCheck(this, App);

// 		return _possibleConstructorReturn(this, _React$Component6.apply(this, arguments));
// 	}

// 	App.prototype.render = function render() {
// 		return React.createElement(
// 			'div',
// 			null,
// 			React.createElement(Header, null),
// 			React.createElement(FlipClock, null)
// 		);
// 	};

// 	return App;
// }(React.Component);

// ReactDOM.render(React.createElement(App, null), document.querySelector('#root'));







