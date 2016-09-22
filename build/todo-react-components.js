!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.todoReactComponents=e()}}(function(){var e;return function e(t,n,o){function a(r,l){if(!n[r]){if(!t[r]){var u="function"==typeof require&&require;if(!l&&u)return u(r,!0);if(s)return s(r,!0);var i=new Error("Cannot find module '"+r+"'");throw i.code="MODULE_NOT_FOUND",i}var c=n[r]={exports:{}};t[r][0].call(c.exports,function(e){var n=t[r][1][e];return a(n?n:e)},c,c.exports,e,t,n,o)}return n[r].exports}for(var s="function"==typeof require&&require,r=0;r<o.length;r++)a(o[r]);return a}({1:[function(t,n){!function(){"use strict";function t(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var s=typeof a;if("string"===s||"number"===s)e.push(a);else if(Array.isArray(a))e.push(t.apply(null,a));else if("object"===s)for(var r in a)o.call(a,r)&&a[r]&&e.push(r)}}return e.join(" ")}var o={}.hasOwnProperty;"undefined"!=typeof n&&n.exports?n.exports=t:"function"==typeof e&&"object"==typeof e.amd&&e.amd?e("classnames",[],function(){return t}):window.classNames=t}()},{}],2:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var a="undefined"!=typeof window?window.React:"undefined"!=typeof global?global.React:null,s=o(a),r=e("classnames"),l=o(r),u=e("../site/site-header"),i=o(u),c=function(e){return s.default.createElement("div",null,s.default.createElement(i.default,e.siteHeader),s.default.createElement("main",{className:l.default("page",e.className)},"About Page"))};c.propTypes={className:s.default.PropTypes.string,siteHeader:s.default.PropTypes.object},n.default=c},{"../site/site-header":7,classnames:1}],3:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};n.default=function(e,t){var n=void 0;switch(t.url!==window.location.pathname&&window.history.pushState(null,null,t.url),t.selectedPage){case u.ABOUT:n=r.default.createElement(d.default,{className:"about-page",siteHeader:t.siteHeader});break;default:n=r.default.createElement(c.default,a({className:"todos-page"},t.todos,{siteHeader:t.siteHeader}))}l.render(n,e)};var s="undefined"!=typeof window?window.React:"undefined"!=typeof global?global.React:null,r=o(s),l="undefined"!=typeof window?window.ReactDOM:"undefined"!=typeof global?global.ReactDOM:null,u=e("./site/constants/pages"),i=e("./todos/todos-page"),c=o(i),f=e("./about/about-page"),d=o(f)},{"./about/about-page":2,"./site/constants/pages":6,"./todos/todos-page":12}],4:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i="undefined"!=typeof window?window.React:"undefined"!=typeof global?global.React:null,c=o(i),f=function(e){function t(e){a(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=function(e){n.props.target||n.props.href&&0===n.props.href.indexOf("mailto:")||0===!e.button||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(e.preventDefault(),n.props.onClick&&n.props.onClick(n.props.href))},n.handleClick=n.handleClick.bind(n),n}return r(t,e),u(t,[{key:"render",value:function(){return c.default.createElement("a",l({},this.props,{href:this.props.href,className:"link "+this.props.className,onClick:this.handleClick}))}}]),t}(i.Component);f.propTypes={className:i.PropTypes.string,href:i.PropTypes.string,target:i.PropTypes.string,onClick:i.PropTypes.func},n.default=f},{}],5:[function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0}),n.constants=n.app=void 0;var s=e("./app"),r=a(s),l=e("./site/constants/pages"),u=o(l),i=e("./todos/constants/statuses"),c=o(i),f={PAGES:u,TODO_STATUSES:c},d={app:r.default,constants:f};n.default=d,n.app=r.default,n.constants=f},{"./app":3,"./site/constants/pages":6,"./todos/constants/statuses":8}],6:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.HOME="HOME",n.ABOUT="ABOUT"},{}],7:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var a="undefined"!=typeof window?window.React:"undefined"!=typeof global?global.React:null,s=o(a),r=e("classnames"),l=o(r),u=e("../site/constants/pages"),i=e("../common/link"),c=o(i),f=function(e){return s.default.createElement("header",{className:l.default("site-header",e.className)},s.default.createElement("nav",null,s.default.createElement(c.default,{className:l.default({selected:e.selectedPage===u.HOME}),href:e.hrefHome,onClick:e.onClickHome},e.labelHome),s.default.createElement(c.default,{className:l.default({selected:e.selectedPage===u.ABOUT}),href:e.hrefAbout,onClick:e.onClickAbout},e.labelAbout)))};f.propTypes={className:s.default.PropTypes.string,selectedPage:s.default.PropTypes.string,labelHome:s.default.PropTypes.string,labelAbout:s.default.PropTypes.string,hrefHome:s.default.PropTypes.string,hrefAbout:s.default.PropTypes.string,onClickHome:s.default.PropTypes.func,onClickAbout:s.default.PropTypes.func},n.default=f},{"../common/link":4,"../site/constants/pages":6,classnames:1}],8:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.PENDING="PENDING",n.COMPLETE="COMPLETE",n.TOTAL="TOTAL"},{}],9:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var a="undefined"!=typeof window?window.React:"undefined"!=typeof global?global.React:null,s=o(a),r=e("classnames"),l=o(r),u=function(e){return s.default.createElement("article",{className:l.default("list-item",{checked:e.isComplete},e.className)},s.default.createElement("input",{className:"checkbox",type:"checkbox",checked:e.isComplete,onChange:e.onCheckboxToggled}),s.default.createElement("span",{className:"description"},e.description),s.default.createElement("button",{className:"button",onClick:e.onButtonClicked},e.buttonLabel))};u.propTypes={className:s.default.PropTypes.string,description:s.default.PropTypes.string,isComplete:s.default.PropTypes.bool,buttonLabel:s.default.PropTypes.string,onButtonClicked:s.default.PropTypes.func,onCheckboxToggled:s.default.PropTypes.func},n.default=u},{classnames:1}],10:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s="undefined"!=typeof window?window.React:"undefined"!=typeof global?global.React:null,r=o(s),l=e("classnames"),u=o(l),i=e("../todos/todo-item"),c=o(i),f=function(e){return r.default.createElement("section",{className:u.default("list",e.className)},!!e.todos&&e.todos.map(function(e){return r.default.createElement(c.default,a({key:e.id},e))}))};f.propTypes={className:r.default.PropTypes.string,todos:r.default.PropTypes.array},n.default=f},{"../todos/todo-item":9,classnames:1}],11:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u="undefined"!=typeof window?window.React:"undefined"!=typeof global?global.React:null,i=o(u),c=e("classnames"),f=o(c),d=function(e){function t(e){a(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleOnChange=function(e){n.setState({value:e.target.value})},n.handleOnSubmit=function(e){e.preventDefault(),n.setState({value:""}),n.props.onSubmit(n.state.value)},n.state={value:n.props.value||""},n.handleOnChange=n.handleOnChange.bind(n),n.handleOnSubmit=n.handleOnSubmit.bind(n),n}return r(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=this.state;return i.default.createElement("form",{className:f.default(e.className),onSubmit:this.handleOnSubmit},i.default.createElement("input",{className:"todos-new-form-input",value:t.value,placeholder:e.placeholder,onChange:this.handleOnChange}))}}]),t}(u.Component);d.propTypes={className:i.default.PropTypes.string,placeholder:i.default.PropTypes.string,onSubmit:i.default.PropTypes.func},n.default=d},{classnames:1}],12:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s="undefined"!=typeof window?window.React:"undefined"!=typeof global?global.React:null,r=o(s),l=e("classnames"),u=o(l),i=e("../site/site-header"),c=o(i),f=e("../todos/todos-new-form"),d=o(f),p=e("../todos/todos-list"),m=o(p),y=e("../todos/todos-summary"),b=o(y),g=function(e){return r.default.createElement("div",null,r.default.createElement(c.default,e.siteHeader),r.default.createElement("main",{className:u.default("page",e.className)},!!e.newForm&&r.default.createElement(d.default,a({className:"todos-new-form"},e.newForm)),!!e.list&&r.default.createElement(m.default,{className:"todos-list",todos:e.list}),!!e.summary&&r.default.createElement(b.default,a({className:"todos-summary"},e.summary))))};g.propTypes={className:r.default.PropTypes.string,siteHeader:r.default.PropTypes.object,newForm:r.default.PropTypes.object,list:r.default.PropTypes.array,summary:r.default.PropTypes.object},n.default=g},{"../site/site-header":7,"../todos/todos-list":10,"../todos/todos-new-form":11,"../todos/todos-summary":13,classnames:1}],13:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var a="undefined"!=typeof window?window.React:"undefined"!=typeof global?global.React:null,s=o(a),r=e("classnames"),l=o(r),u=e("../todos/constants/statuses"),i=function(e){return s.default.createElement("section",{className:l.default("todo-summary",e.className)},s.default.createElement("span",{className:l.default("todo-summary-pending",{"is-selected":e.selectedSummaryStatus===u.PENDING}),onClick:e.onClickPending},e.countIncomplete),s.default.createElement("span",{className:l.default("todo-summary-complete",{"is-selected":e.selectedSummaryStatus===u.COMPLETE}),onClick:e.onClickComplete},e.countComplete),s.default.createElement("span",{className:l.default("todo-summary-total",{"is-selected":e.selectedSummaryStatus===u.TOTAL}),onClick:e.onClickTotal},e.countTotal))};i.propTypes={className:s.default.PropTypes.string,countIncomplete:s.default.PropTypes.string,countComplete:s.default.PropTypes.string,countTotal:s.default.PropTypes.string,selectedSummaryStatus:s.default.PropTypes.oneOf([u.PENDING,u.COMPLETE,u.TOTAL]),onClickPending:s.default.PropTypes.func,onClickComplete:s.default.PropTypes.func,onClickTotal:s.default.PropTypes.func},n.default=i},{"../todos/constants/statuses":8,classnames:1}]},{},[5])(5)});