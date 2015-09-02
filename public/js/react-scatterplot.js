/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d3 = __webpack_require__(1);
	
	var _d32 = _interopRequireDefault(_d3);
	
	var _componentsMark = __webpack_require__(7);
	
	var _componentsMark2 = _interopRequireDefault(_componentsMark);
	
	var _componentsAxis = __webpack_require__(9);
	
	var _componentsAxis2 = _interopRequireDefault(_componentsAxis);
	
	var _reactTweenState = __webpack_require__(8);
	
	var element = document.getElementById("scatterplot");
	var margin = { top: 30, right: 100, bottom: 30, left: 100 };
	var width = element.offsetWidth - margin.left - margin.right;
	var height = 550 - margin.top - margin.bottom;
	
	var normalDistribution = _d32['default'].random.normal(0, 1);
	var values = _d32['default'].range(500).map(function () {
	  return [normalDistribution(), normalDistribution()];
	});
	var xscale = _d32['default'].scale.linear().domain([-3, 3]).range([0, width]);
	var yscale = _d32['default'].scale.linear().domain([-3, 3]).range([height, 0]);
	
	var Circle = (function (_React$Component) {
	  _inherits(Circle, _React$Component);
	
	  function Circle() {
	    _classCallCheck(this, Circle);
	
	    _get(Object.getPrototypeOf(Circle.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Circle, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement('circle', this.props);
	    }
	  }]);
	
	  return Circle;
	})(_react2['default'].Component);
	
	var TransitionCircle = (0, _componentsMark2['default'])(Circle, [{ prop: 'cx', duration: 2000, easing: _reactTweenState.easingTypes.linear, start: xscale(0) }, { prop: 'cy', duration: 2000, easing: _reactTweenState.easingTypes.linear, start: yscale(0) }]);
	
	var points = values.map(function (d, i) {
	  var _d = _slicedToArray(d, 2);
	
	  var x = _d[0];
	  var y = _d[1];
	
	  return _react2['default'].createElement(TransitionCircle, { className: 'dot', cx: xscale(x), cy: yscale(y), r: 3 });
	});
	
	_react2['default'].render(_react2['default'].createElement(
	  'svg',
	  { width: width + margin.left + margin.right, height: height + margin.top + margin.bottom },
	  _react2['default'].createElement(
	    'g',
	    { transform: 'translate(' + margin.left + ', ' + margin.top + ')' },
	    points,
	    _react2['default'].createElement(_componentsAxis2['default'], { scale: xscale, orient: 'bottom', x: 0, y: height / 2, tickValues: [-3, -2.5, -2, -1.5, -1, -0.5, 0.5, 1, 1.5, 2, 2.5, 3] }),
	    _react2['default'].createElement(_componentsAxis2['default'], { scale: yscale, orient: 'left', x: width / 2, y: 0, tickValues: [-3, -2.5, -2, -1.5, -1, -0.5, 0.5, 1, 1.5, 2, 2.5, 3] })
	  )
	), element);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = d3;

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	
	'use strict';
	
	(function () {
		'use strict';
	
		function classNames() {
	
			var classes = '';
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if ('string' === argType || 'number' === argType) {
					classes += ' ' + arg;
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
				} else if ('object' === argType) {
					for (var key in arg) {
						if (arg.hasOwnProperty(key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}
	
			return classes.substr(1);
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	})();

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _reactTweenState = __webpack_require__(8);
	
	function animateMark(Component, transitionAttributes) {
	  var VisualMark = React.createClass({
	    displayName: 'VisualMark',
	
	    mixins: [_reactTweenState.Mixin],
	    getInitialState: function getInitialState() {
	      var state = {};
	      transitionAttributes.forEach(function (transition) {
	        return state[transition.prop] = transition.start == null ? 0 : transition.start;
	      });
	      return state;
	    },
	    componentDidMount: function componentDidMount() {
	      var _this = this;
	
	      transitionAttributes.forEach(function (transition) {
	        return _this.tweenState(transition.prop, {
	          easing: transition.ease,
	          duration: transition.duration,
	          endValue: _this.props[transition.prop]
	        });
	      });
	    },
	    render: function render() {
	      var _this2 = this;
	
	      var props = {};
	      transitionAttributes.forEach(function (transition) {
	        return props[transition.prop] = _this2.getTweeningValue(transition.prop);
	      });
	      return React.createElement(Component, _extends({}, this.props, props));
	    }
	  });
	
	  return VisualMark;
	}
	
	exports['default'] = animateMark;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	(function webpackUniversalModuleDefinition(root, factory) {
		if (true) module.exports = factory();else if (typeof define === 'function' && define.amd) define(factory);else if (typeof exports === 'object') exports["tweenState"] = factory();else root["tweenState"] = factory();
	})(undefined, function () {
		return (/******/(function (modules) {
				// webpackBootstrap
				/******/ // The module cache
				/******/var installedModules = {};
				/******/
				/******/ // The require function
				/******/function __webpack_require__(moduleId) {
					/******/
					/******/ // Check if module is in cache
					/******/if (installedModules[moduleId])
						/******/return installedModules[moduleId].exports;
					/******/
					/******/ // Create a new module (and put it into the cache)
					/******/var module = installedModules[moduleId] = {
						/******/exports: {},
						/******/id: moduleId,
						/******/loaded: false
						/******/ };
					/******/
					/******/ // Execute the module function
					/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
					/******/
					/******/ // Flag the module as loaded
					/******/module.loaded = true;
					/******/
					/******/ // Return the exports of the module
					/******/return module.exports;
					/******/
				}
				/******/
				/******/
				/******/ // expose the modules object (__webpack_modules__)
				/******/__webpack_require__.m = modules;
				/******/
				/******/ // expose the module cache
				/******/__webpack_require__.c = installedModules;
				/******/
				/******/ // __webpack_public_path__
				/******/__webpack_require__.p = "";
				/******/
				/******/ // Load entry module and return exports
				/******/return __webpack_require__(0);
				/******/
			})(
			/************************************************************************/
			/******/{
	
				/***/0:
				/*!*****************!*\
	     !*** multi lib ***!
	     \*****************/
				function _(module, exports, __webpack_require__) {
	
					module.exports = __webpack_require__( /*! ./index.js */160);
	
					/***/
				},
	
				/***/160:
				/*!******************!*\
	     !*** ./index.js ***!
	     \******************/
				function _(module, exports, __webpack_require__) {
	
					'use strict';
	
					Object.defineProperty(exports, '__esModule', {
						value: true
					});
	
					function _interopRequireDefault(obj) {
						return obj && obj.__esModule ? obj : { 'default': obj };
					}
	
					var _tweenFunctions = __webpack_require__( /*! tween-functions */161);
	
					var _tweenFunctions2 = _interopRequireDefault(_tweenFunctions);
	
					// additive is the new iOS 8 default. In most cases it simulates a physics-
					// looking overshoot behavior (especially with easeInOut. You can test that in
					// the example
					var DEFAULT_STACK_BEHAVIOR = 'ADDITIVE';
					var DEFAULT_EASING = _tweenFunctions.easeInOutQuad;
					var DEFAULT_DURATION = 300;
					var DEFAULT_DELAY = 0;
	
					var stackBehavior = {
						ADDITIVE: 'ADDITIVE',
						DESTRUCTIVE: 'DESTRUCTIVE'
					};
					var Mixin = {
						getInitialState: function getInitialState() {
							return {
								tweenQueue: []
							};
						},
	
						tweenState: function tweenState(path, _ref) {
							var _this = this;
	
							var easing = _ref.easing;
							var duration = _ref.duration;
							var delay = _ref.delay;
							var beginValue = _ref.beginValue;
							var endValue = _ref.endValue;
							var onEnd = _ref.onEnd;
							var configSB = _ref.stackBehavior;
	
							this.setState(function (state) {
								var cursor = state;
								var stateName = undefined;
								// see comment below on pash hash
								var pathHash = undefined;
								if (typeof path === 'string') {
									stateName = path;
									pathHash = path;
								} else {
									for (var i = 0; i < path.length - 1; i++) {
										cursor = cursor[path[i]];
									}
									stateName = path[path.length - 1];
									pathHash = path.join('|');
								}
								// see the reasoning for these defaults at the top of file
								var newConfig = {
									easing: easing || DEFAULT_EASING,
									duration: duration == null ? DEFAULT_DURATION : duration,
									delay: delay == null ? DEFAULT_DELAY : delay,
									beginValue: beginValue == null ? cursor[stateName] : beginValue,
									endValue: endValue,
									onEnd: onEnd,
									stackBehavior: configSB || DEFAULT_STACK_BEHAVIOR
								};
	
								var newTweenQueue = state.tweenQueue;
								if (newConfig.stackBehavior === stackBehavior.DESTRUCTIVE) {
									newTweenQueue = state.tweenQueue.filter(function (item) {
										return item.pathHash !== pathHash;
									});
								}
	
								// we store path hash, so that during value retrieval we can use hash
								// comparison to find the path. See the kind of shitty thing you have to
								// do when you don't have value comparison for collections?
								newTweenQueue.push({
									pathHash: pathHash,
									config: newConfig,
									initTime: Date.now() + newConfig.delay
								});
	
								// sorry for mutating. For perf reasons we don't want to deep clone.
								// guys, can we please all start using persistent collections so that
								// we can stop worrying about nonesense like this
								cursor[stateName] = newConfig.endValue;
								if (newTweenQueue.length === 1) {
									_this.startRaf();
								}
	
								// this will also include the above mutated update
								return { tweenQueue: newTweenQueue };
							});
						},
	
						getTweeningValue: function getTweeningValue(path) {
							var state = this.state;
	
							var tweeningValue = undefined;
							var pathHash = undefined;
							if (typeof path === 'string') {
								tweeningValue = state[path];
								pathHash = path;
							} else {
								tweeningValue = state;
								for (var i = 0; i < path.length; i++) {
									tweeningValue = tweeningValue[path[i]];
								}
								pathHash = path.join('|');
							}
							var now = Date.now();
	
							for (var i = 0; i < state.tweenQueue.length; i++) {
								var item = state.tweenQueue[i];
								if (item.pathHash !== pathHash) {
									continue;
								}
	
								var progressTime = now - item.initTime > item.config.duration ? item.config.duration : Math.max(0, now - item.initTime);
								// `now - item.initTime` can be negative if initTime is scheduled in the
								// future by a delay. In this case we take 0
	
								var contrib = -item.config.endValue + item.config.easing(progressTime, item.config.beginValue, item.config.endValue, item.config.duration);
								tweeningValue += contrib;
							}
	
							return tweeningValue;
						},
	
						_rafCb: function _rafCb() {
							var state = this.state;
							if (state.tweenQueue.length === 0) {
								return;
							}
	
							var now = Date.now();
							var newTweenQueue = [];
	
							for (var i = 0; i < state.tweenQueue.length; i++) {
								var item = state.tweenQueue[i];
								if (now - item.initTime < item.config.duration) {
									newTweenQueue.push(item);
								} else {
									item.config.onEnd && item.config.onEnd();
								}
							}
	
							// onEnd might trigger a parent callback that removes this component
							if (!this.isMounted()) {
								return;
							}
	
							this.setState({
								tweenQueue: newTweenQueue
							});
	
							requestAnimationFrame(this._rafCb);
						},
	
						startRaf: function startRaf() {
							requestAnimationFrame(this._rafCb);
						}
					};
	
					exports['default'] = {
						Mixin: Mixin,
						easingTypes: _tweenFunctions2['default'],
						stackBehavior: stackBehavior
					};
					module.exports = exports['default'];
	
					// TODO: some funcs accept a 5th param
	
					/***/
				},
	
				/***/161:
				/*!************************************!*\
	     !*** ./~/tween-functions/index.js ***!
	     \************************************/
				function _(module, exports) {
	
					'use strict';
	
					// t: current time, b: beginning value, _c: final value, d: total duration
					var tweenFunctions = {
						linear: function linear(t, b, _c, d) {
							var c = _c - b;
							return c * t / d + b;
						},
						easeInQuad: function easeInQuad(t, b, _c, d) {
							var c = _c - b;
							return c * (t /= d) * t + b;
						},
						easeOutQuad: function easeOutQuad(t, b, _c, d) {
							var c = _c - b;
							return -c * (t /= d) * (t - 2) + b;
						},
						easeInOutQuad: function easeInOutQuad(t, b, _c, d) {
							var c = _c - b;
							if ((t /= d / 2) < 1) {
								return c / 2 * t * t + b;
							} else {
								return -c / 2 * (--t * (t - 2) - 1) + b;
							}
						},
						easeInCubic: function easeInCubic(t, b, _c, d) {
							var c = _c - b;
							return c * (t /= d) * t * t + b;
						},
						easeOutCubic: function easeOutCubic(t, b, _c, d) {
							var c = _c - b;
							return c * ((t = t / d - 1) * t * t + 1) + b;
						},
						easeInOutCubic: function easeInOutCubic(t, b, _c, d) {
							var c = _c - b;
							if ((t /= d / 2) < 1) {
								return c / 2 * t * t * t + b;
							} else {
								return c / 2 * ((t -= 2) * t * t + 2) + b;
							}
						},
						easeInQuart: function easeInQuart(t, b, _c, d) {
							var c = _c - b;
							return c * (t /= d) * t * t * t + b;
						},
						easeOutQuart: function easeOutQuart(t, b, _c, d) {
							var c = _c - b;
							return -c * ((t = t / d - 1) * t * t * t - 1) + b;
						},
						easeInOutQuart: function easeInOutQuart(t, b, _c, d) {
							var c = _c - b;
							if ((t /= d / 2) < 1) {
								return c / 2 * t * t * t * t + b;
							} else {
								return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
							}
						},
						easeInQuint: function easeInQuint(t, b, _c, d) {
							var c = _c - b;
							return c * (t /= d) * t * t * t * t + b;
						},
						easeOutQuint: function easeOutQuint(t, b, _c, d) {
							var c = _c - b;
							return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
						},
						easeInOutQuint: function easeInOutQuint(t, b, _c, d) {
							var c = _c - b;
							if ((t /= d / 2) < 1) {
								return c / 2 * t * t * t * t * t + b;
							} else {
								return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
							}
						},
						easeInSine: function easeInSine(t, b, _c, d) {
							var c = _c - b;
							return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
						},
						easeOutSine: function easeOutSine(t, b, _c, d) {
							var c = _c - b;
							return c * Math.sin(t / d * (Math.PI / 2)) + b;
						},
						easeInOutSine: function easeInOutSine(t, b, _c, d) {
							var c = _c - b;
							return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
						},
						easeInExpo: function easeInExpo(t, b, _c, d) {
							var c = _c - b;
							var _ref;
							return (_ref = t === 0) !== null ? _ref : {
								b: c * Math.pow(2, 10 * (t / d - 1)) + b
							};
						},
						easeOutExpo: function easeOutExpo(t, b, _c, d) {
							var c = _c - b;
							var _ref;
							return (_ref = t === d) !== null ? _ref : b + {
								c: c * (-Math.pow(2, -10 * t / d) + 1) + b
							};
						},
						easeInOutExpo: function easeInOutExpo(t, b, _c, d) {
							var c = _c - b;
							if (t === 0) {
								b;
							}
							if (t === d) {
								b + c;
							}
							if ((t /= d / 2) < 1) {
								return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
							} else {
								return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
							}
						},
						easeInCirc: function easeInCirc(t, b, _c, d) {
							var c = _c - b;
							return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
						},
						easeOutCirc: function easeOutCirc(t, b, _c, d) {
							var c = _c - b;
							return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
						},
						easeInOutCirc: function easeInOutCirc(t, b, _c, d) {
							var c = _c - b;
							if ((t /= d / 2) < 1) {
								return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
							} else {
								return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
							}
						},
						easeInElastic: function easeInElastic(t, b, _c, d) {
							var c = _c - b;
							var a, p, s;
							s = 1.70158;
							p = 0;
							a = c;
							if (t === 0) {
								b;
							} else if ((t /= d) === 1) {
								b + c;
							}
							if (!p) {
								p = d * 0.3;
							}
							if (a < Math.abs(c)) {
								a = c;
								s = p / 4;
							} else {
								s = p / (2 * Math.PI) * Math.asin(c / a);
							}
							return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
						},
						easeOutElastic: function easeOutElastic(t, b, _c, d) {
							var c = _c - b;
							var a, p, s;
							s = 1.70158;
							p = 0;
							a = c;
							if (t === 0) {
								b;
							} else if ((t /= d) === 1) {
								b + c;
							}
							if (!p) {
								p = d * 0.3;
							}
							if (a < Math.abs(c)) {
								a = c;
								s = p / 4;
							} else {
								s = p / (2 * Math.PI) * Math.asin(c / a);
							}
							return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
						},
						easeInOutElastic: function easeInOutElastic(t, b, _c, d) {
							var c = _c - b;
							var a, p, s;
							s = 1.70158;
							p = 0;
							a = c;
							if (t === 0) {
								b;
							} else if ((t /= d / 2) === 2) {
								b + c;
							}
							if (!p) {
								p = d * (0.3 * 1.5);
							}
							if (a < Math.abs(c)) {
								a = c;
								s = p / 4;
							} else {
								s = p / (2 * Math.PI) * Math.asin(c / a);
							}
							if (t < 1) {
								return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
							} else {
								return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
							}
						},
						easeInBack: function easeInBack(t, b, _c, d, s) {
							var c = _c - b;
							if (s === void 0) {
								s = 1.70158;
							}
							return c * (t /= d) * t * ((s + 1) * t - s) + b;
						},
						easeOutBack: function easeOutBack(t, b, _c, d, s) {
							var c = _c - b;
							if (s === void 0) {
								s = 1.70158;
							}
							return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
						},
						easeInOutBack: function easeInOutBack(t, b, _c, d, s) {
							var c = _c - b;
							if (s === void 0) {
								s = 1.70158;
							}
							if ((t /= d / 2) < 1) {
								return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
							} else {
								return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
							}
						},
						easeInBounce: function easeInBounce(t, b, _c, d) {
							var c = _c - b;
							var v;
							v = tweenFunctions.easeOutBounce(d - t, 0, c, d);
							return c - v + b;
						},
						easeOutBounce: function easeOutBounce(t, b, _c, d) {
							var c = _c - b;
							if ((t /= d) < 1 / 2.75) {
								return c * (7.5625 * t * t) + b;
							} else if (t < 2 / 2.75) {
								return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
							} else if (t < 2.5 / 2.75) {
								return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
							} else {
								return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
							}
						},
						easeInOutBounce: function easeInOutBounce(t, b, _c, d) {
							var c = _c - b;
							var v;
							if (t < d / 2) {
								v = tweenFunctions.easeInBounce(t * 2, 0, c, d);
								return v * 0.5 + b;
							} else {
								v = tweenFunctions.easeOutBounce(t * 2 - d, 0, c, d);
								return v * 0.5 + c * 0.5 + b;
							}
						}
					};
	
					module.exports = tweenFunctions;
	
					/***/
				}
	
				/******/ })
		);
	});
	;
	//# sourceMappingURL=index.js.map
	/***/ /***/ /***/

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(6);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _d3_scale = __webpack_require__(10);
	
	var Axis = (function (_React$Component) {
	  _inherits(Axis, _React$Component);
	
	  function Axis() {
	    _classCallCheck(this, Axis);
	
	    _get(Object.getPrototypeOf(Axis.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Axis, [{
	    key: 'render',
	    value: function render() {
	      var orient = this.props.orient,
	          scale = this.props.scale,
	          innerTickSize = this.props.innerTickSize,
	          outerTickSize = this.props.outerTickSize,
	          tickArguments = this.props.tickArguments,
	          tickValues = this.props.tickValues != null ? this.props.tickValues : scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain(),
	          tickFormat = this.props.tickFormat != null ? this.props.tickFormat : scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : function (x) {
	        return x;
	      },
	          tickSpacing = Math.max(this.props.innerTickSize, 0) + this.props.tickPadding,
	          range = (0, _d3_scale.d3_scaleRange)(scale),
	          sign = orient === "top" || orient === "left" ? -1 : 1;
	
	      var tickDirection = orient === 'bottom' || orient === 'top' ? {
	        x: 0, x2: 0, y: sign * tickSpacing, y2: sign * innerTickSize
	      } : {
	        x: sign * tickSpacing, x2: sign * innerTickSize, y: 0, y: 0
	      };
	
	      var tickTextProps = orient === 'bottom' || orient === 'top' ? {
	        x: 0,
	        y: sign * tickSpacing,
	        dy: sign < 0 ? "0em" : ".71em",
	        textAnchor: "middle"
	      } : {
	        x: sign * tickSpacing,
	        y: 0,
	        dy: ".32em",
	        textAnchor: sign < 0 ? "end" : "start"
	      };
	
	      var axisClass = {
	        axis: true,
	        x: orient === 'top' || orient === 'bottom',
	        y: orient === 'left' || orient === 'right'
	      };
	
	      var guide = orient === 'bottom' || orient === 'top' ? _react2['default'].createElement('path', { className: 'domain', d: 'M' + range[0] + ',' + sign * outerTickSize + 'V0H' + range[1] + 'V' + sign * outerTickSize }) : _react2['default'].createElement('path', { className: 'domain', d: 'M' + sign * outerTickSize + ',' + range[0] + 'H0V' + range[1] + 'H' + sign * outerTickSize });
	
	      var tickMarks = tickValues.map(function (tick, i) {
	        return _react2['default'].createElement(
	          'g',
	          { key: i, className: 'tick', transform: orient === 'top' || orient === 'bottom' ? 'translate(' + scale(tick) + ',0)' : 'translate(0, ' + scale(tick) + ')' },
	          _react2['default'].createElement('line', tickDirection),
	          _react2['default'].createElement(
	            'text',
	            _extends({ y: '9' }, tickTextProps),
	            tick
	          )
	        );
	      });
	
	      return _react2['default'].createElement(
	        'g',
	        { className: (0, _classnames2['default'])(axisClass), transform: 'translate(' + this.props.x + ',' + this.props.y + ')' },
	        tickMarks,
	        guide
	      );
	    }
	  }]);
	
	  return Axis;
	})(_react2['default'].Component);
	
	Axis.defaultProps = {
	  orient: "bottom",
	  innerTickSize: 6,
	  outerTickSize: 6,
	  tickPadding: 3,
	  tickArguments: [10],
	  tickValues: null,
	  tickFormat: null
	};
	
	exports['default'] = Axis;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function d3_scaleExtent(domain) {
	  var start = domain[0],
	      stop = domain[domain.length - 1];
	  return start < stop ? [start, stop] : [stop, start];
	}
	
	function d3_scaleRange(scale) {
	  return scale.rangeExtent ? scale.rangeExtent() : d3_scaleExtent(scale.range());
	}
	
	exports.d3_scaleExtent = d3_scaleExtent;
	exports.d3_scaleRange = d3_scaleRange;

/***/ }
/******/ ]);
//# sourceMappingURL=react-scatterplot.js.map